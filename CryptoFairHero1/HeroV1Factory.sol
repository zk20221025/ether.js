// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable@4.8.3/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable@4.8.3/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable@4.8.3/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable@4.8.3/proxy/utils/UUPSUpgradeable.sol";
import "./HeroV1Game.sol";

contract HeroV1Factory is  Initializable, UUPSUpgradeable, AccessControlUpgradeable, PausableUpgradeable {
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");
    
    uint256 public currentGameId;
    mapping(uint256 => address) public games;

    event GameCreated(address indexed game, uint256 id);
    event GamePaused(address indexed game, uint256 id);
    event GameUnpaused(address indexed game, uint256 id);

    constructor() {
        _disableInitializers();
    }

    function initialize() initializer public {
        __Pausable_init();
        __AccessControl_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
        _grantRole(UPGRADER_ROLE, msg.sender);
    }

    function newGame(
        uint256 _minJoinAmount,
        uint256 _minPlayers,
        uint256 _guarantee,
        address _charityAddress,
        address _token,
        uint8 _charityPercentage,
        uint8 _referrPercentage,
        uint8 _drawingRewardPercentage
    ) external {
        uint256 id = currentGameId = currentGameId + 1;
        address _game =  address(new HeroV1Game{salt: keccak256(abi.encode(msg.sender, id))} (
            id,

            _minJoinAmount,
            _minPlayers,
            _guarantee,

            msg.sender,
            _charityAddress,
            _token,

            _charityPercentage,
            _referrPercentage,
            _drawingRewardPercentage            
        ));
        games[id] = _game;
        emit GameCreated(_game, id);
    }

    function pauseGame(uint256 gameId) public onlyRole(PAUSER_ROLE) {
        address _game = games[gameId];
        require(_game != address(0));
        HeroV1Game(_game).pauseGame();
        emit GamePaused(_game, gameId);
    }

    function unpauseGame(uint256 gameId) public onlyRole(PAUSER_ROLE) {
        address _game = games[gameId];
        require(_game != address(0));
        HeroV1Game(_game).unpauseGame();
        emit GameUnpaused(_game, gameId);
    }

    function pause() public whenNotPaused onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public whenPaused onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        onlyRole(UPGRADER_ROLE)
        override
    {}
}
