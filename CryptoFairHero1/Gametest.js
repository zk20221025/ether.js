import {ethers} from 'ethers';

const INFURA_SEPOLIA_URL =
    'https://sepolia.infura.io/v3/8280c1f722bf4d1ab88eb72177679d82'
const provider = new ethers.JsonRpcProvider(INFURA_SEPOLIA_URL)

const privateKey1 =
    '0x220dcca66eade77247d22f4de81332e0b8aced92b96a2c91ca0bd3e11ee98480'
const wallet1 = new ethers.Wallet(privateKey1, provider)

const privateKey2 =
    '0x0725e91a2e290321a2d1a30b71b5c6521832eccab475765db6f0c5578d4ed2f3'
const wallet2 = new ethers.Wallet(privateKey2, provider)

const privateKey3 =
    '0x84fdf6a4ec33e3388804cf2a4e65bb18bfe1143e2b5c61a3104e0a6f4e491443'
const wallet3 = new ethers.Wallet(privateKey3, provider)

const privateKey4 =
    '0x0f71ba5a719628569a027bc843fa3346bfb86d92db6642f5241ca8dde39badb1'
const wallet4 = new ethers.Wallet(privateKey4, provider)

const privateKey5 =
    '03f5874121fb3fb8cf6e6a6daa4935736b8f0e7c6f201dbf17b65e75856503ed'
const wallet5 = new ethers.Wallet(privateKey5, provider)

const privateKey6 =
    '76ce894551a539887cc82280e78d6ff5e9d3379d918bcb8cce4a493effc90107'
const wallet6 = new ethers.Wallet(privateKey6, provider)

const privateKey7 =
    'e59c2b05a341927c724e23d74e0cba6028816189d5f7f13def1c2b12731b193e'
const wallet7 = new ethers.Wallet(privateKey7, provider)

const privateKey8 =
    '4cdefe87fa6abb35e7e1987eebc3d19fdd675ba6e6a8362132056c90e725ef69'
const wallet8 = new ethers.Wallet(privateKey8, provider)

const privateKey9 =
    '25eeb050f0cf7cd77c2122f24a904f517022d21d9ddfad006d1044f0a5339d37'
const wallet9 = new ethers.Wallet(privateKey9, provider)

const privateKey10 =
    '549d7e0bd45bfb8e2b5da6b15b413e4c55c2ea83ac5ee7ab7ba3cf7be26ad06c'
const wallet10 = new ethers.Wallet(privateKey10, provider)

const abiFactory =
    '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "previousAdmin", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newAdmin", "type": "address" } ], "name": "AdminChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "beacon", "type": "address" } ], "name": "BeaconUpgraded", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "game", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "GameCreated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "game", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "GamePaused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "game", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "GameUnpaused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint8", "name": "version", "type": "uint8" } ], "name": "Initialized", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" } ], "name": "RoleAdminChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleGranted", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleRevoked", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Unpaused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "implementation", "type": "address" } ], "name": "Upgraded", "type": "event" }, { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PAUSER_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "UPGRADER_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "currentGameId", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "games", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" } ], "name": "getRoleAdmin", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "hasRole", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_minJoinAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_minPlayers", "type": "uint256" }, { "internalType": "uint256", "name": "_guarantee", "type": "uint256" }, { "internalType": "address", "name": "_charityAddress", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint8", "name": "_charityPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "_referrPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "_drawingRewardPercentage", "type": "uint8" } ], "name": "newGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "gameId", "type": "uint256" } ], "name": "pauseGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "proxiableUUID", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "gameId", "type": "uint256" } ], "name": "unpauseGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newImplementation", "type": "address" } ], "name": "upgradeTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newImplementation", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "upgradeToAndCall", "outputs": [], "stateMutability": "payable", "type": "function" } ]'
const factoryAddress = '0x24f8c0c433291fc4929ae7a1a9f9c1e1b9c30088'

const abiGame =
    '[ { "inputs": [ { "internalType": "uint256", "name": "_gameId", "type": "uint256" }, { "internalType": "uint256", "name": "_minJoinAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_minJoinPlayer", "type": "uint256" }, { "internalType": "uint256", "name": "_guarantee", "type": "uint256" }, { "internalType": "address", "name": "_creator", "type": "address" }, { "internalType": "address", "name": "_charityAddress", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint8", "name": "_charityPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "_referrPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "_drawPercentage", "type": "uint8" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [], "name": "Canceled", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "player", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Charity", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Completed", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Drawer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "player", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Join", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Referrer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "player", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Refund", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" } ], "name": "RoleAdminChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleGranted", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleRevoked", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Unpaused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "player", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Winner", "type": "event" }, { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PAUSER_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "cancelGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "charity", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "completeGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "creator", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "drawGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "gameInfo", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "minJoinAmount", "type": "uint256" }, { "internalType": "uint256", "name": "minJoinPlayer", "type": "uint256" }, { "internalType": "uint256", "name": "guarantee", "type": "uint256" }, { "internalType": "uint256", "name": "_joinTotal", "type": "uint256" }, { "internalType": "uint256", "name": "_charityTotal", "type": "uint256" }, { "internalType": "uint256", "name": "_winnerReward", "type": "uint256" }, { "internalType": "uint256", "name": "_referrerReward", "type": "uint256" }, { "internalType": "uint8", "name": "charityPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "referrPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "drawPercentage", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCharity", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getGameStatus", "outputs": [ { "internalType": "enum GameStatus", "name": "", "type": "uint8" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "force", "type": "bool" } ], "name": "getGuarantee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getReferrerReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getRefund", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" } ], "name": "getRoleAdmin", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getWinnerReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "hasRole", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "address", "name": "_referrer", "type": "address" } ], "name": "joinGame", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "joinGas", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pauseGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "playerTotal", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "players", "outputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "addr", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "referrers", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "refundGas", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startGame", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unpauseGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "winner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ]'

const minJoinAmount = ethers.parseEther('0.01') // 最小加入_amount
const minPlayers = 5 // 最小玩家数
const guarantee = ethers.parseEther('0.01') // 保证金
const charityAddress = '0xd24eceF3AA9257383BD3341e63F6Cd73951186dF' // 慈善机构地址
const tokenAddress = ethers.ZeroAddress // 代币地址
const charityPercentage = 44 // 慈善比例
const referrPercentage = 1 // 推荐人比例
const drawingRewardPercentage = 5 // 抽奖奖励比例

const main = async () => {
    console.log(`i. 发送前余额`)
    console.log(
        `钱包1: ${ethers.formatEther(await provider.getBalance(wallet1))} ETH`
    )
    console.log(
        `钱包2: ${ethers.formatEther(await provider.getBalance(wallet2))} ETH`
    )
    console.log(
        `钱包3: ${ethers.formatEther(await provider.getBalance(wallet3))} ETH`
    )
    console.log(
        `钱包4: ${ethers.formatEther(await provider.getBalance(wallet4))} ETH`
    )
    console.log(
        `钱包5: ${ethers.formatEther(await provider.getBalance(wallet5))} ETH`
    )
        console.log(
        `钱包6: ${ethers.formatEther(await provider.getBalance(wallet6))} ETH`
    )
    console.log(
        `钱包7: ${ethers.formatEther(await provider.getBalance(wallet7))} ETH`
    )
    console.log(
        `钱包8: ${ethers.formatEther(await provider.getBalance(wallet8))} ETH`
    )
    console.log(
        `钱包9: ${ethers.formatEther(await provider.getBalance(wallet9))} ETH`
    )
    console.log(
        `钱包10: ${ethers.formatEther(await provider.getBalance(wallet10))} ETH`
    )
    let factoryContract = new ethers.Contract(
        factoryAddress,
        abiFactory,
        wallet1
    )
    let tx = await factoryContract.newGame(
        minJoinAmount,
        minPlayers,
        guarantee,
        charityAddress,
        tokenAddress,
        charityPercentage,
        referrPercentage,
        drawingRewardPercentage
    )
    await tx.wait()
    console.log(`交易详情：`)
    console.log(tx)
    let gameId = await factoryContract.currentGameId()
    let newGame = await factoryContract.games(gameId)
    const contractGame = new ethers.Contract(newGame, abiGame, wallet1)
    const gameToken = await contractGame.token()
    const gameInfo = await contractGame.gameInfo()
    const gameStatus = await contractGame.getGameStatus()
    console.log(`游戏: ${newGame}`)
    console.log(`gameInfo: ${gameInfo}`)

    let gameContract = new ethers.Contract(newGame, abiGame, wallet1)


        let tx2 = await gameContract.startGame({
            value: ethers.parseEther('0.01'),
        })
        await tx2.wait()
        console.log(`交易详情：2`)
        console.log(tx2)

    let gameContract2 = new ethers.Contract(newGame, abiGame, wallet2)

        let tx3 = await gameContract2.joinGame(
            ethers.parseEther('0.01'),
            ethers.ZeroAddress,
            {value: ethers.parseEther('0.01')}
        )
        await tx3.wait()
        console.log(`交易详情：3`)
        console.log(tx3)

    let gameContract3 = new ethers.Contract(newGame, abiGame, wallet3)

        let tx4 = await gameContract3.joinGame(
            ethers.parseEther('0.01'),
            ethers.ZeroAddress,
            {value: ethers.parseEther('0.01')}
        )
        await tx4.wait()
        console.log(`交易详情：4`)
        console.log(tx4)

    let gameContract4 = new ethers.Contract(newGame, abiGame, wallet4)

        let tx5 = await gameContract4.joinGame(
            ethers.parseEther('0.01'),
            ethers.ZeroAddress,
            {value: ethers.parseEther('0.01')}
        )
        await tx5.wait()
        console.log(`交易详情：5`)
        console.log(tx5)


    let gameContract5 = new ethers.Contract(newGame, abiGame, wallet5)

        let tx6 = await gameContract5.joinGame(
            ethers.parseEther('0.01'),
            ethers.ZeroAddress,
            {value: ethers.parseEther('0.01')}
        )
        await tx6.wait()
        console.log(`交易详情：6`)
        console.log(tx6)


    let gameContract6 = new ethers.Contract(newGame, abiGame, wallet6)

        let tx7 = await gameContract6.joinGame(
            ethers.parseEther('0.01'),
            ethers.ZeroAddress,
            {value: ethers.parseEther('0.01')}
        )
        await tx7.wait()
        console.log(`交易详情：7`)
        console.log(tx7)


        let gameContract7 = new ethers.Contract(newGame, abiGame, wallet7)

        let tx8 = await gameContract7.joinGame(
            ethers.parseEther('0.01'),
            ethers.ZeroAddress,
            {value: ethers.parseEther('0.01')}
        )
        await tx8.wait()
        console.log(`交易详情：8`)
        console.log(tx8)

        let gameContract8 = new ethers.Contract(newGame, abiGame, wallet8)

        let tx9 = await gameContract8.joinGame(
            ethers.parseEther('0.01'),
            ethers.ZeroAddress,
            {value: ethers.parseEther('0.01')}
        )
        await tx9.wait()
        console.log(`交易详情：9`)
        console.log(tx9)

        let gameContract9 = new ethers.Contract(newGame, abiGame, wallet9)

        let tx10 = await gameContract9.joinGame(
            ethers.parseEther('0.01'),
            ethers.ZeroAddress,
            {value: ethers.parseEther('0.01')}
        )
        await tx10.wait()
        console.log(`交易详情：10`)
        console.log(tx10)

        let gameContract10 = new ethers.Contract(newGame, abiGame, wallet10)

        let tx11 = await gameContract10.joinGame(
            ethers.parseEther('0.01'),
            ethers.ZeroAddress,
            {value: ethers.parseEther('0.01')}
        )
        await tx11.wait()
        console.log(`交易详情：11`)
        console.log(tx11)

    let tx14 = await gameContract.drawGame()
    await tx14.wait()
    console.log(`交易详情：14`)
    console.log(tx14)
    
    const winner = await gameContract.winner()
    console.log(`赢家: ${winner}`)
    if (ethers.ZeroAddress = winner) {
        let tx99 = await gameContract.drawGame()
        await tx99.wait()
        console.log(`交易详情：99`)
        console.log(tx99)
    }
    else {
    console.log('交易完成!');
    }

    let tx15 = await gameContract.completeGame()
    await tx15.wait()
    console.log(`交易详情：15`)
    console.log(tx15)



    let tx12 = await gameContract.getCharity()
    await tx12.wait()
    console.log(`交易详情：12`)
    console.log(tx12)

    let tx13 = await gameContract.getWinnerReward()
    await tx13.wait()
    console.log(`交易详情：13`)
    console.log(tx13)

    console.log(`游戏: ${newGame}`)
    console.log(`gameInfo: ${gameInfo}`)
    console.log(`赢家: ${winner}`)

    const address1 = await wallet1.getAddress()
    const address2 = await wallet2.getAddress() 
    const address3 = await wallet3.getAddress()
    const address4 = await wallet4.getAddress()
    const address5 = await wallet5.getAddress()
    const address6 = await wallet6.getAddress()
    const address7 = await wallet7.getAddress() 
    const address8 = await wallet8.getAddress()
    const address9 = await wallet9.getAddress()
    const address10 = await wallet10.getAddress()
    console.log(`1. 获取钱包地址`);
    console.log(`钱包1地址: ${address1}`);
    console.log(`钱包2地址: ${address2}`);
    console.log(`钱包3地址: ${address3}`);
    console.log(`钱包4地址: ${address4}`);
    console.log(`钱包5地址: ${address5}`);
    console.log(`钱包6地址: ${address6}`);
    console.log(`钱包7地址: ${address7}`);
    console.log(`钱包8地址: ${address8}`);
    console.log(`钱包9地址: ${address9}`);
    console.log(`钱包10地址: ${address10}`);

    console.log(`ii. 发送后余额`)
    console.log(
        `钱包1: ${ethers.formatEther(await provider.getBalance(wallet1))} ETH`
    )
    console.log(
        `钱包2: ${ethers.formatEther(await provider.getBalance(wallet2))} ETH`
    )
    console.log(
        `钱包3: ${ethers.formatEther(await provider.getBalance(wallet3))} ETH`
    )
    console.log(
        `钱包4: ${ethers.formatEther(await provider.getBalance(wallet4))} ETH`
    )
    console.log(
        `钱包5: ${ethers.formatEther(await provider.getBalance(wallet5))} ETH`
    )
    console.log(
        `钱包6: ${ethers.formatEther(await provider.getBalance(wallet6))} ETH`
    )
    console.log(
        `钱包7: ${ethers.formatEther(await provider.getBalance(wallet7))} ETH`
    )
    console.log(
        `钱包8: ${ethers.formatEther(await provider.getBalance(wallet8))} ETH`
    )
    console.log(
        `钱包9: ${ethers.formatEther(await provider.getBalance(wallet9))} ETH`
    )
    console.log(
        `钱包10: ${ethers.formatEther(await provider.getBalance(wallet10))} ETH`
    )
}
main()
