// SPDX-License-Identifier: MIT
pragma solidity  ^0.8.10;

import "@openzeppelin/contracts@4.8.3/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts@4.8.3/security/Pausable.sol";
import "@openzeppelin/contracts@4.8.3/access/AccessControl.sol";
import "@openzeppelin/contracts@4.8.3/security/ReentrancyGuard.sol";

struct PlayerInfo {
    uint256 amount;
    address addr;
}

enum GameStatus {
    Created,
    Open, 
    Closed, 
    Paused, 
    Canceled, 
    Completed 
}

struct GameInfo {
    uint256 id;
    uint256 minJoinAmount; 
    uint256 minJoinPlayer; 
    uint256 guarantee;
    uint256 _joinTotal;
    uint256 _charityTotal;
    uint256 _winnerReward;
    uint256 _referrerReward;
    uint8 charityPercentage; 
    uint8 referrPercentage; 
    uint8 drawPercentage; 
}

contract HeroV1Game is AccessControl, Pausable, ReentrancyGuard {

    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    GameInfo public gameInfo;
    address public factory;
    address public creator;
    address public token;
    address public winner;
    address public charity;

    address public joinGas;
    address public refundGas;

    PlayerInfo[] public players;
    mapping(address => uint256) public playerTotal;
    mapping(address => uint256) public referrers;

    uint256 private _joinTotal;
    uint256 private _charityTotal;
    uint256 private _winnerReward;
    uint256 private _referrerReward;
    GameStatus private _gameStatus;
    GameStatus private _lastStatus;

    event Join(address indexed player, uint256 amount);
    event Winner(address indexed player, uint256 amount);
    event Drawer(address indexed user, uint256 amount);
    event Charity(address indexed player, uint256 amount);
    event Refund(address indexed player, uint256 amount);
    event Referrer(address indexed user, uint256 amount);
    event Canceled();
    event Completed();

    constructor(
        uint256 _gameId,
        uint256 _minJoinAmount,
        uint256 _minJoinPlayer,
        uint256 _guarantee,
        address _creator,
        address _charityAddress,
        address _token,
        uint8 _charityPercentage,
        uint8 _referrPercentage,
        uint8 _drawPercentage
    ) {
        _charityPercentage = _charityPercentage % 100;
        _referrPercentage = _referrPercentage % 100;
        _drawPercentage = _drawPercentage % 100;       
       
        require(100 > _charityPercentage + _referrPercentage + _drawPercentage);
        
        factory = msg.sender;
        creator = _creator;
        charity = _charityAddress;

        if (address(0) != _token) {
            token = _token;
        }

        _gameStatus = GameStatus.Created;

        gameInfo = GameInfo(
            _gameId,
            _minJoinAmount,
            _minJoinPlayer,
            _guarantee,
            0,
            0,
            0,
            0,
            _charityPercentage,
            _referrPercentage,
            _drawPercentage
        );

        _grantRole(DEFAULT_ADMIN_ROLE, address(0));
        _grantRole(PAUSER_ROLE, msg.sender);
    }


    function getGameStatus() external view  returns (GameStatus, uint256, uint256, uint256, uint256, uint256, uint256) {
        return (
            _gameStatus,
            players.length,
            _balance(),
            gameInfo._joinTotal,
            gameInfo._charityTotal,
            gameInfo._winnerReward,
            gameInfo._referrerReward
        );
    }

    function startGame() external payable whenNotPaused {
        require(GameStatus.Created == _gameStatus && msg.sender == creator);
        _getValueOrRevert(gameInfo.guarantee);
        _gameStatus = GameStatus.Open;
    }

    function pauseGame() external onlyRole(PAUSER_ROLE) whenNotPaused {
        _lastStatus = _gameStatus;
        _gameStatus = GameStatus.Paused;
        _pause();
    }

    function unpauseGame() external onlyRole(PAUSER_ROLE) whenPaused {
        _gameStatus = _lastStatus;
        _unpause();
    }

    function joinGame(uint256 _amount, address _referrer) external payable whenNotPaused {
        require(GameStatus.Open == _gameStatus);
        require(_amount >= gameInfo.minJoinAmount);

        _amount = _getValueOrRevert(_amount);

        emit Join(msg.sender, _amount);

        if (address(0) != _referrer) {
            uint256  _reward =  (_amount * gameInfo.referrPercentage) / 100;
            if (0 < _reward) {
                _referrerReward += _reward;
                referrers[_referrer] += _reward;
                gameInfo._referrerReward += _reward;
                emit Referrer(_referrer, _reward);
            }
        }

        _joinTotal += _amount;
        gameInfo._joinTotal = _joinTotal;
        playerTotal[msg.sender] += _amount;

        players.push(PlayerInfo({addr: msg.sender, amount: _amount}));
    }

    function drawGame() external whenNotPaused {
        require(GameStatus.Open == _gameStatus && players.length >= gameInfo.minJoinPlayer);

        gameInfo._charityTotal = _charityTotal = (_joinTotal * gameInfo.charityPercentage) / 100;
        
        uint256 _drawReward = (_joinTotal * gameInfo.drawPercentage) / 100;
        uint256 _random = getRandom(_joinTotal);
        uint256 _sum = 0;

        for (uint256 i = 0; i < players.length; i++) {
            PlayerInfo memory _player = players[i];
            _sum += players[i].amount;
            if (_sum > _random) {
                _gameStatus = GameStatus.Closed;
                winner = _player.addr;
                gameInfo._winnerReward = _winnerReward = _joinTotal - _charityTotal - _drawReward - _referrerReward;
                emit Winner(winner, _winnerReward);
                bool _success = _sendValue(msg.sender, _drawReward);
                if (_success) {
                    emit Drawer(msg.sender, _drawReward);
                }
                break;
            }
        }
    }

    function completeGame() external whenNotPaused {
        require(GameStatus.Closed == _gameStatus);
        
        uint256 _remain = _balance();
        
        if (_charityTotal > 0) {
            _remain -= _charityTotal;
        }

        if (_winnerReward > 0) {
            _remain -= _winnerReward;
        }

        if (_referrerReward > 0) {
            _remain -= _referrerReward;
        }

        _gameStatus = GameStatus.Completed;
        emit Completed();

        _sendValueOrRevert(creator, _remain);
    }
        
    function cancelGame() external whenNotPaused {
        require(GameStatus.Open == _gameStatus && players.length < gameInfo.minJoinPlayer && msg.sender == creator);
        
        _gameStatus = GameStatus.Canceled;
        emit Canceled();

        if (_referrerReward > 0) {
            _referrerReward = 0;
            gameInfo._referrerReward = 0;
        }
    }

    function getGuarantee(bool force) external whenNotPaused nonReentrant {
        require(GameStatus.Canceled == _gameStatus);
        if (force) {
            uint256 _refunded = 0;
            for (uint256 i = 0; i < players.length; i++) {
                address _player = players[i].addr;
                uint256 _refund = playerTotal[_player];
                if (_refund > 0) {
                    playerTotal[_player] = 0;
                    _joinTotal -= _refund;
                    bool _success = _sendValue(_player, _refund);
                    if (_success) {
                        _refunded += _refund;
                        emit Refund(_player, _refund);
                    } else {
                        playerTotal[_player] = _refund;
                        _joinTotal += _refund;
                    }
                }
            }
            _sendValueOrRevert(creator, _balance() - (_joinTotal - _refunded));
        } else {
            require(_joinTotal <= 0);
            _sendValueOrRevert(creator, _balance());
        }
    }

    function getCharity() external whenNotPaused {
        require(_charityTotal > 0);
        uint256 _c = _charityTotal;
        _charityTotal = 0;
        _sendValueOrRevert(charity, _c);
    }

    function getWinnerReward() external whenNotPaused {
        require(_winnerReward > 0);
        uint256 _r = _winnerReward;
        _winnerReward = 0;
        _sendValueOrRevert(winner, _r);
        if (_charityTotal > 0) {
            uint256 _c = _charityTotal;
            _charityTotal = 0;
            bool _success = _sendValue(charity, _c);
            if (_success) {
                emit Charity(charity, _c);
            } else {
                _charityTotal = _c;
            }
        }
    }

    function getReferrerReward() external whenNotPaused {
        require((GameStatus.Completed == _gameStatus || GameStatus.Closed == _gameStatus), "E1");
        require(_referrerReward > 0, "E2");
        uint256 _r = referrers[msg.sender];
        require(_r > 0, "E3");
        _referrerReward -= _r;
        referrers[msg.sender] = 0;
        _sendValueOrRevert(msg.sender, _r);
    }

    function getRefund() external whenNotPaused {
        require(GameStatus.Canceled == _gameStatus, "E1");
        require(_joinTotal > 0, "E2");
        uint256 _r = playerTotal[msg.sender];
        require(_r > 0, "E3");
        _joinTotal -= _r;
        playerTotal[msg.sender] = 0;
        emit Refund(msg.sender, _r);
        _sendValueOrRevert(msg.sender, _r);
    }

    function _balance() internal view returns (uint256) {
        if (address(0) != token) {
            return IERC20(token).balanceOf(address(this));
        } else {
            return address(this).balance;
        }
    }

    function _getValueOrRevert(uint256 amount) internal returns (uint256) {
        if (address(0) != token) {
            bool _success = IERC20(token).transferFrom(msg.sender, address(this), amount);
            require(true == _success);
            return amount;
        } else {
            require(msg.value >= amount);
            return msg.value;
        }
    }

    function _sendValueOrRevert(address to, uint256 amount) internal {
        if (address(0) != token) {
            bool _success = IERC20(token).transfer(to, amount);
            require(true == _success);
        } else {
           payable(to).transfer(amount);
        }
    }

    function _sendValue(address to, uint256 amount) internal returns(bool)  {
        if (address(0) != token) {
           try IERC20(token).transfer(to, amount) returns(bool _success){
               return  _success;
            } catch {
                return  false;
            }
        } else {
           (bool _success,) = payable(to).call{value: amount}("");
           return _success;
        }
    }
    
    function getRandom(uint256 _max) internal view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(block.timestamp, block.number, msg.sender))) % _max;
    }
}