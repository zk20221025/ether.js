import {ethers} from 'ethers'

const INFURA_SEPOLIA_URL =
    'https://sepolia.infura.io/v3/8280c1f722bf4d1ab88eb72177679d82'
const provider = new ethers.JsonRpcProvider(INFURA_SEPOLIA_URL)

const abiFactory =
    '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "previousAdmin", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newAdmin", "type": "address" } ], "name": "AdminChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "beacon", "type": "address" } ], "name": "BeaconUpgraded", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "game", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "GameCreated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "game", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "GamePaused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "game", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "GameUnpaused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint8", "name": "version", "type": "uint8" } ], "name": "Initialized", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" } ], "name": "RoleAdminChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleGranted", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleRevoked", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Unpaused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "implementation", "type": "address" } ], "name": "Upgraded", "type": "event" }, { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PAUSER_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "UPGRADER_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "currentGameId", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "games", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" } ], "name": "getRoleAdmin", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "hasRole", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_minJoinAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_minPlayers", "type": "uint256" }, { "internalType": "uint256", "name": "_guarantee", "type": "uint256" }, { "internalType": "address", "name": "_charityAddress", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint8", "name": "_charityPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "_referrPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "_drawingRewardPercentage", "type": "uint8" } ], "name": "newGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "gameId", "type": "uint256" } ], "name": "pauseGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "proxiableUUID", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "gameId", "type": "uint256" } ], "name": "unpauseGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newImplementation", "type": "address" } ], "name": "upgradeTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newImplementation", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "upgradeToAndCall", "outputs": [], "stateMutability": "payable", "type": "function" } ]'
const factoryAddress = '0x24f8c0c433291fc4929ae7a1a9f9c1e1b9c30088'

const abiGame =
    '[ { "inputs": [ { "internalType": "uint256", "name": "_gameId", "type": "uint256" }, { "internalType": "uint256", "name": "_minJoinAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_minJoinPlayer", "type": "uint256" }, { "internalType": "uint256", "name": "_guarantee", "type": "uint256" }, { "internalType": "address", "name": "_creator", "type": "address" }, { "internalType": "address", "name": "_charityAddress", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint8", "name": "_charityPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "_referrPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "_drawPercentage", "type": "uint8" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [], "name": "Canceled", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "player", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Charity", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Completed", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Drawer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "player", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Join", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Referrer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "player", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Refund", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" } ], "name": "RoleAdminChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleGranted", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleRevoked", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Unpaused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "player", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Winner", "type": "event" }, { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PAUSER_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "cancelGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "charity", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "completeGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "creator", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "drawGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "gameInfo", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "minJoinAmount", "type": "uint256" }, { "internalType": "uint256", "name": "minJoinPlayer", "type": "uint256" }, { "internalType": "uint256", "name": "guarantee", "type": "uint256" }, { "internalType": "uint256", "name": "_joinTotal", "type": "uint256" }, { "internalType": "uint256", "name": "_charityTotal", "type": "uint256" }, { "internalType": "uint256", "name": "_winnerReward", "type": "uint256" }, { "internalType": "uint256", "name": "_referrerReward", "type": "uint256" }, { "internalType": "uint8", "name": "charityPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "referrPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "drawPercentage", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCharity", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getGameStatus", "outputs": [ { "internalType": "enum GameStatus", "name": "", "type": "uint8" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "force", "type": "bool" } ], "name": "getGuarantee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getReferrerReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getRefund", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" } ], "name": "getRoleAdmin", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getWinnerReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "hasRole", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "address", "name": "_referrer", "type": "address" } ], "name": "joinGame", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "joinGas", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pauseGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "playerTotal", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "players", "outputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "addr", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "referrers", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "refundGas", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startGame", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unpauseGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "winner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ]'


const privateKeys = [
    '0x220dcca66eade77247d22f4de81332e0b8aced92b96a2c91ca0bd3e11ee98480',
    '0x0725e91a2e290321a2d1a30b71b5c6521832eccab475765db6f0c5578d4ed2f3',
    '0x84fdf6a4ec33e3388804cf2a4e65bb18bfe1143e2b5c61a3104e0a6f4e491443',
    '0x0f71ba5a719628569a027bc843fa3346bfb86d92db6642f5241ca8dde39badb1',
    '0x03f5874121fb3fb8cf6e6a6daa4935736b8f0e7c6f201dbf17b65e75856503ed',
    '0x76ce894551a539887cc82280e78d6ff5e9d3379d918bcb8cce4a493effc90107',
    '0xe59c2b05a341927c724e23d74e0cba6028816189d5f7f13def1c2b12731b193e',
    '0x4cdefe87fa6abb35e7e1987eebc3d19fdd675ba6e6a8362132056c90e725ef69',
    '0x25eeb050f0cf7cd77c2122f24a904f517022d21d9ddfad006d1044f0a5339d37',
    '0x549d7e0bd45bfb8e2b5da6b15b413e4c55c2ea83ac5ee7ab7ba3cf7be26ad06c',
    '0x62e4c3c9e433016d5ea21765df1455fe5281d00738e2fb6093a206ff814c5e83',
];

const wallets = privateKeys.map(
    (privateKey) => new ethers.Wallet(privateKey, provider)
)

let testCase = [
    // charityAddress，guarantee，tokenAddress，minJoinAmount，minPlayers，charityPercentage，referrPercentage，drawingRewardPercentage，charity预期结果，draw预期结果
    ['0xd24eceF3AA9257383BD3341e63F6Cd73951186dF',ethers.parseEther('0.05'),ethers.ZeroAddress,ethers.parseEther('0.01'),5,10,0,10,0.01*5*0.1,0.01*5*0.1],
    ['0x2b3A4b62790cFf087d41dD6B3A9514CC13aB1b78',ethers.parseEther('0.04'),ethers.ZeroAddress,ethers.parseEther('0.02'),8,20,0,20,0.02*8*0.2,0.02*8*0.2],
    ['0x34ABE182B89e4Fe88bD4F8f03573D6b177483c0A',ethers.parseEther('0.03'),ethers.ZeroAddress,ethers.parseEther('0.05'),7,20,0,0,0.05*7*0.2,0],
    ['0xbAA740937169387fcE3c59658b23199b65102D5a',ethers.parseEther('0.02'),ethers.ZeroAddress,ethers.parseEther('0.04'),6,50,0,10,0.04*6*0.5,0.04*6*0.1],
    ['0x4aA738e75ca61716335A924f01141bF87C792647',ethers.parseEther('0.01'),ethers.ZeroAddress,ethers.parseEther('0.03'),9,40,0,15,0.03*9*0.4,0.03*9*0.15],   
]
const main = async () => {
for (var i = 0; i < testCase.length; i++) {
    let test = testCase[i]
    let charityAddress = test[0]
    let guarantee = test[1]
    let tokenAddress = test[2]
    let minJoinAmount = test[3]
    let minPlayers = test[4]
    let charityPercentage = test[5]
    let referrPercentage = test[6]
    let drawingRewardPercentage = test[7]
    const charityExpectedBalance = test[8]
    const drawExpectedBalance = test[9]

const charityBalance1 = await provider.getBalance(charityAddress);
console.log(`charityBalance1:${ethers.formatEther(charityBalance1)}`);
    const drawBalance1 = await provider.getBalance(wallets[0].address);
    console.log(`drawBalance1:${ethers.formatEther(drawBalance1)}`);

    const players = []
    for (let j = 0; j < minPlayers; j++) {
        const randomIndex = Math.floor(Math.random() * wallets.length);
        players.push(wallets[randomIndex])
    }

    for (let z = 0; z < players.length; z++) {
        const wallet = players[z]
        const balance = await provider.getBalance(wallet.address)
        console.log(`${wallet.address}: ${ethers.formatEther(balance)} ETH`)
    }

    const randomIndex = Math.floor(Math.random() * players.length);
    const winner = players[randomIndex];

    const factoryContract = new ethers.Contract(
        factoryAddress,
        abiFactory,
        wallets[0]
    )
    const tx = await factoryContract.newGame(
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
    console.log(`newGame`)

    const gameId = await factoryContract.currentGameId()
    const newGame = await factoryContract.games(gameId)
    const contractGame = new ethers.Contract(newGame, abiGame, wallets[0])
    const gameToken = await contractGame.token()
    const gameInfo = await contractGame.gameInfo()
    const gameStatus = await contractGame.getGameStatus()
    console.log(`游戏: ${newGame}`)
    console.log(`gameInfo: ${gameInfo}`)

    const gameContract = new ethers.Contract(newGame, abiGame, wallets[0])

    const tx2 = await gameContract.startGame({
        value: guarantee,
    })
    await tx2.wait()
    console.log(`startGame`)



    for (let k = 0; k < players.length; k++) {
        const wallet = players[k]
        const gameContract = new ethers.Contract(newGame, abiGame, wallet)
        try {
            const tx = await gameContract.joinGame(
                minJoinAmount,
                tokenAddress,
                {value: minJoinAmount}
            )
            await tx.wait()
            console.log(`交易详情：${k}`)
        } catch (error) {
            console.log(`执行joinGame函数时出错：${error}`)
        }
    }   

    const tx1 = await gameContract.drawGame()
    await tx1.wait()
    console.log(`交易详情：开奖`)

    const winnerAddress = await gameContract.winner()
    console.log(`赢家: ${winnerAddress}`)
    if (ethers.ZeroAddress != winnerAddress) {
        console.log('交易完成!')
    } else {
        const tx99 = await gameContract.drawGame()
        await tx99.wait()
        console.log(`交易详情：99`)

        const winner1 = await gameContract.winner()
        console.log(`确认赢家: ${winner1}`)
        if (ethers.ZeroAddress != winner1) {
            console.log('交易确认完成!')
        } else {
            const tx100 = await gameContract.drawGame()
            await tx100.wait()
            console.log(`交易详情：100`)

            const winner2 = await gameContract.winner()
            console.log(`再次确认赢家: ${winner2}`)
        }
    }

    const tx15 = await gameContract.completeGame()
    await tx15.wait()
    console.log(`交易详情：completeGame`)

    const tx12 = await gameContract.getCharity()
    await tx12.wait()
    console.log(`交易详情：getCharity`)

    const tx13 = await gameContract.getWinnerReward()
    await tx13.wait()
    console.log(`交易详情：getWinnerReward`)

const charityBalance = await provider.getBalance(charityAddress);
const drawBalance = await provider.getBalance(wallets[0].address);

if (parseFloat(ethers.formatEther(charityBalance)) == (charityExpectedBalance + parseFloat(ethers.formatEther(charityBalance1)))) {
  console.log(`Charity balance is correct: ${ethers.formatEther(charityBalance)}`);
} else {
  console.log(`Charity balance is incorrect: ${ethers.formatEther(charityBalance)}, expected: ${charityExpectedBalance + parseFloat(ethers.formatEther(charityBalance1))}`);
}

if (parseFloat(ethers.formatEther(drawBalance)) == (drawExpectedBalance + parseFloat(ethers.formatEther(drawBalance1)))) {
  console.log(`Draw balance is correct: ${ethers.formatEther(drawBalance)}`);
} else {
  console.log(`Draw balance is incorrect: ${ethers.formatEther(drawBalance)}, expected: ${drawExpectedBalance + parseFloat(ethers.formatEther(drawBalance1))}`);
}

    console.log(`游戏: ${newGame}`)
    console.log(`gameInfo: ${gameInfo}`)
    const winner3 = await gameContract.winner()
    console.log(`赢家: ${winner3}`)
}
}
main()