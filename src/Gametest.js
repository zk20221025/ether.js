import {ethers} from 'ethers'

const INFURA_SEPOLIA_URL =
    'https://sepolia.infura.io/v3/8280c1f722bf4d1ab88eb72177679d82'
const provider = new ethers.JsonRpcProvider(INFURA_SEPOLIA_URL)

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
]

const wallets = privateKeys.map(
    (privateKey) => new ethers.Wallet(privateKey, provider)
)

const abiFactory =
    '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "previousAdmin", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newAdmin", "type": "address" } ], "name": "AdminChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "beacon", "type": "address" } ], "name": "BeaconUpgraded", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "game", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "GameCreated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "game", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "GamePaused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "game", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "GameUnpaused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint8", "name": "version", "type": "uint8" } ], "name": "Initialized", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" } ], "name": "RoleAdminChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleGranted", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleRevoked", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Unpaused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "implementation", "type": "address" } ], "name": "Upgraded", "type": "event" }, { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PAUSER_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "UPGRADER_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "currentGameId", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "games", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" } ], "name": "getRoleAdmin", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "hasRole", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_minJoinAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_minPlayers", "type": "uint256" }, { "internalType": "uint256", "name": "_guarantee", "type": "uint256" }, { "internalType": "address", "name": "_charityAddress", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint8", "name": "_charityPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "_referrPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "_drawingRewardPercentage", "type": "uint8" } ], "name": "newGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "gameId", "type": "uint256" } ], "name": "pauseGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "proxiableUUID", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "gameId", "type": "uint256" } ], "name": "unpauseGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newImplementation", "type": "address" } ], "name": "upgradeTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newImplementation", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "upgradeToAndCall", "outputs": [], "stateMutability": "payable", "type": "function" } ]'
const factoryAddress = '0x24f8c0c433291fc4929ae7a1a9f9c1e1b9c30088'

const abiGame =
    '[ { "inputs": [ { "internalType": "uint256", "name": "_gameId", "type": "uint256" }, { "internalType": "uint256", "name": "_minJoinAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_minJoinPlayer", "type": "uint256" }, { "internalType": "uint256", "name": "_guarantee", "type": "uint256" }, { "internalType": "address", "name": "_creator", "type": "address" }, { "internalType": "address", "name": "_charityAddress", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint8", "name": "_charityPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "_referrPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "_drawPercentage", "type": "uint8" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [], "name": "Canceled", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "player", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Charity", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Completed", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Drawer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "player", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Join", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Referrer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "player", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Refund", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" } ], "name": "RoleAdminChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleGranted", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleRevoked", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Unpaused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "player", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Winner", "type": "event" }, { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PAUSER_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "cancelGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "charity", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "completeGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "creator", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "drawGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "gameInfo", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "minJoinAmount", "type": "uint256" }, { "internalType": "uint256", "name": "minJoinPlayer", "type": "uint256" }, { "internalType": "uint256", "name": "guarantee", "type": "uint256" }, { "internalType": "uint256", "name": "_joinTotal", "type": "uint256" }, { "internalType": "uint256", "name": "_charityTotal", "type": "uint256" }, { "internalType": "uint256", "name": "_winnerReward", "type": "uint256" }, { "internalType": "uint256", "name": "_referrerReward", "type": "uint256" }, { "internalType": "uint8", "name": "charityPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "referrPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "drawPercentage", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCharity", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getGameStatus", "outputs": [ { "internalType": "enum GameStatus", "name": "", "type": "uint8" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "force", "type": "bool" } ], "name": "getGuarantee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getReferrerReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getRefund", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" } ], "name": "getRoleAdmin", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getWinnerReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "hasRole", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "address", "name": "_referrer", "type": "address" } ], "name": "joinGame", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "joinGas", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pauseGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "playerTotal", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "players", "outputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "addr", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "referrers", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "refundGas", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startGame", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unpauseGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "winner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ]'

const minJoinAmount = ethers.parseEther('0.005') // 最小加入_amount
const minPlayers = 9 // 最小玩家数
const guarantee = ethers.parseEther('0.005') // 保证金
const charityAddress = '0xd24eceF3AA9257383BD3341e63F6Cd73951186dF' // 慈善机构地址
const tokenAddress = ethers.ZeroAddress // 代币地址
const charityPercentage = 10 // 慈善比例
const referrPercentage = 10 // 推荐人比例
const drawingRewardPercentage = 10 // 抽奖奖励比例
const zeroAddress = '0x0000000000000000000000000000000000000000'
const main = async () => {
    console.log(`i. 发送前各个钱包余额`)
    for (let i = 0; i < wallets.length; i++) {
        const wallet = wallets[i]
        const balance = await provider.getBalance(wallet.address)
        console.log(`${wallet.address}: ${ethers.formatEther(balance)} ETH`)
    }

    let factoryContract = new ethers.Contract(
        factoryAddress,
        abiFactory,
        wallets[0]
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
    const contractGame = new ethers.Contract(newGame, abiGame, wallets[0])
    const gameToken = await contractGame.token()
    const gameInfo = await contractGame.gameInfo()
    const gameStatus = await contractGame.getGameStatus()
    console.log(`游戏: ${newGame}`)
    console.log(`gameInfo: ${gameInfo}`)

    let gameContract = new ethers.Contract(newGame, abiGame, wallets[0])

    let tx2 = await gameContract.startGame({
        value: ethers.parseEther('0.005'),
    })
    await tx2.wait()
    console.log(`交易详情：2`)
    console.log(tx2)

    for (let i = 0; i < wallets.length; i++) {
        const wallet = wallets[i]
        const gameContract = new ethers.Contract(newGame, abiGame, wallet)
        try {
            const tx = await gameContract.joinGame(
                ethers.parseEther('0.005'),
                ethers.ZeroAddress,
                {value: ethers.parseEther('0.005')}
            )
            await tx.wait()
            console.log(`交易详情：${i}`)
            console.log(tx)
        } catch (error) {
            console.log(`执行joinGame函数时出错：${error}`)
        }
    }
    let tx1 = await gameContract.drawGame()
    await tx1.wait()
    console.log(`交易详情：开奖`)
    console.log(tx1)

    const winner = await gameContract.winner()
    console.log(`赢家: ${winner}`)
    if (zeroAddress != winner) {
        console.log('交易完成!')
    } else {
        let tx99 = await gameContract.drawGame()
        await tx99.wait()
        console.log(`交易详情：99`)
        console.log(tx99)
        const winner1 = await gameContract.winner()
        console.log(`确认赢家: ${winner1}`)
        if (zeroAddress != winner1) {
            console.log('交易确认完成!')
        } else {
            let tx100 = await gameContract.drawGame()
            await tx100.wait()
            console.log(`交易详情：100`)
            console.log(tx100)
            const winner2 = await gameContract.winner()
            console.log(`再次确认赢家: ${winner2}`)
        }
    }

    let tx15 = await gameContract.completeGame()
    await tx15.wait()
    console.log(`交易详情：completeGame`)
    console.log(tx15)

    let tx12 = await gameContract.getCharity()
    await tx12.wait()
    console.log(`交易详情：getCharity`)
    console.log(tx12)

    let tx13 = await gameContract.getWinnerReward()
    await tx13.wait()
    console.log(`交易详情：getWinnerReward`)
    console.log(tx13)

    console.log(`游戏: ${newGame}`)
    console.log(`gameInfo: ${gameInfo}`)
    const winner3 = await gameContract.winner()
    console.log(`赢家: ${winner3}`)
    console.log(`i. 发送后各个钱包余额`)
    for (let i = 0; i < wallets.length; i++) {
        const wallet = wallets[i]
        const balance = await provider.getBalance(wallet.address)
        console.log(`${wallet.address}: ${ethers.formatEther(balance)} ETH`)
    }
}
main()
