import {ethers} from 'ethers';

const INFURA_SEPOLIA_URL =
'https://sepolia.infura.io/v3/8280c1f722bf4d1ab88eb72177679d82'
const provider = new ethers.JsonRpcProvider(INFURA_SEPOLIA_URL)

const privateKey1 = '0x220dcca66eade77247d22f4de81332e0b8aced92b96a2c91ca0bd3e11ee98480'
const wallet1 = new ethers.Wallet(privateKey1, provider)

const privateKey2 = '0x0725e91a2e290321a2d1a30b71b5c6521832eccab475765db6f0c5578d4ed2f3'
const wallet2 = new ethers.Wallet(privateKey2, provider)

const privateKey3 = '0x84fdf6a4ec33e3388804cf2a4e65bb18bfe1143e2b5c61a3104e0a6f4e491443'
const wallet3 = new ethers.Wallet(privateKey3, provider)

const privateKey4 = '0x0f71ba5a719628569a027bc843fa3346bfb86d92db6642f5241ca8dde39badb1'
const wallet4 = new ethers.Wallet(privateKey4, provider)

const privateKey5 = '03f5874121fb3fb8cf6e6a6daa4935736b8f0e7c6f201dbf17b65e75856503ed'
const wallet5 = new ethers.Wallet(privateKey5, provider)

const abiFactory = '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "previousAdmin", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newAdmin", "type": "address" } ], "name": "AdminChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "beacon", "type": "address" } ], "name": "BeaconUpgraded", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "game", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "GameCreated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "game", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "GamePaused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "game", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" } ], "name": "GameUnpaused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint8", "name": "version", "type": "uint8" } ], "name": "Initialized", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" } ], "name": "RoleAdminChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleGranted", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleRevoked", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Unpaused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "implementation", "type": "address" } ], "name": "Upgraded", "type": "event" }, { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PAUSER_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "UPGRADER_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "currentGameId", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "games", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" } ], "name": "getRoleAdmin", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "hasRole", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_minJoinAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_minPlayers", "type": "uint256" }, { "internalType": "uint256", "name": "_guarantee", "type": "uint256" }, { "internalType": "address", "name": "_charityAddress", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint8", "name": "_charityPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "_referrPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "_drawingRewardPercentage", "type": "uint8" } ], "name": "newGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "gameId", "type": "uint256" } ], "name": "pauseGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "proxiableUUID", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "gameId", "type": "uint256" } ], "name": "unpauseGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newImplementation", "type": "address" } ], "name": "upgradeTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newImplementation", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "upgradeToAndCall", "outputs": [], "stateMutability": "payable", "type": "function" } ]'
const factoryAddress = '0x24f8c0c433291fc4929ae7a1a9f9c1e1b9c30088'

const abiGame = '[ { "inputs": [ { "internalType": "uint256", "name": "_gameId", "type": "uint256" }, { "internalType": "uint256", "name": "_minJoinAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_minJoinPlayer", "type": "uint256" }, { "internalType": "uint256", "name": "_guarantee", "type": "uint256" }, { "internalType": "address", "name": "_creator", "type": "address" }, { "internalType": "address", "name": "_charityAddress", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint8", "name": "_charityPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "_referrPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "_drawPercentage", "type": "uint8" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [], "name": "Canceled", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "player", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Charity", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Completed", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Drawer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "player", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Join", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Referrer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "player", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Refund", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" } ], "name": "RoleAdminChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleGranted", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" } ], "name": "RoleRevoked", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Unpaused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "player", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Winner", "type": "event" }, { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PAUSER_ROLE", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "cancelGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "charity", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "completeGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "creator", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "drawGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "gameInfo", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "minJoinAmount", "type": "uint256" }, { "internalType": "uint256", "name": "minJoinPlayer", "type": "uint256" }, { "internalType": "uint256", "name": "guarantee", "type": "uint256" }, { "internalType": "uint256", "name": "_joinTotal", "type": "uint256" }, { "internalType": "uint256", "name": "_charityTotal", "type": "uint256" }, { "internalType": "uint256", "name": "_winnerReward", "type": "uint256" }, { "internalType": "uint256", "name": "_referrerReward", "type": "uint256" }, { "internalType": "uint8", "name": "charityPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "referrPercentage", "type": "uint8" }, { "internalType": "uint8", "name": "drawPercentage", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCharity", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getGameStatus", "outputs": [ { "internalType": "enum GameStatus", "name": "", "type": "uint8" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "force", "type": "bool" } ], "name": "getGuarantee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getReferrerReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getRefund", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" } ], "name": "getRoleAdmin", "outputs": [ { "internalType": "bytes32", "name": "", "type": "bytes32" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getWinnerReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "hasRole", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "address", "name": "_referrer", "type": "address" } ], "name": "joinGame", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "joinGas", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pauseGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "playerTotal", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "players", "outputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "addr", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "referrers", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "refundGas", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" } ], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startGame", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unpauseGame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "winner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ]';

const minJoinAmount = ethers.parseEther("0.01") // 最小加入_amount
const minPlayers = 2 // 最小玩家数
const guarantee = ethers.parseEther("0.01") // 保证金
const charityAddress = '0xd24eceF3AA9257383BD3341e63F6Cd73951186dF' // 慈善机构地址
const tokenAddress = ethers.ZeroAddress // 代币地址
const charityPercentage = 44 // 慈善比例
const referrPercentage = 1 // 推荐人比例
const drawingRewardPercentage = 5 // 抽奖奖励比例

let factoryContract = new ethers.Contract(factoryAddress,abiFactory,wallet1)
let tx = await factoryContract.newGame(
minJoinAmount,
minPlayers,
guarantee,
charityAddress,
tokenAddress,
charityPercentage,
referrPercentage,
drawingRewardPercentage)
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

if (gameToken == ethers.ZeroAddress) {
let tx2 = await gameContract.startGame( {value: ethers.parseEther("0.01")})
await tx2.wait()
console.log(`交易详情：2`)
console.log(tx2)

} else {
let tx3 = await gameContract.startGame()
await tx3.wait()
console.log(`交易详情：3`)
console.log(tx3)

}

let gameContract2 = new ethers.Contract(newGame, abiGame, wallet2)
if (gameToken == ethers.ZeroAddress) {
let tx4 = await gameContract2.joinGame(ethers.parseEther("0.01"),ethers.ZeroAddress,{value: ethers.parseEther("0.01")})
await tx4.wait()
console.log(`交易详情：4`)
console.log(tx4)

} else {
let tx5 = await gameContract2.joinGame(ethers.parseEther("0.01"))
await tx5.wait()
console.log(`交易详情：5`)
console.log(tx5)

}

let gameContract3 = new ethers.Contract(newGame, abiGame, wallet3)
if (gameToken == ethers.ZeroAddress) {
let tx6 = await gameContract3.joinGame(ethers.parseEther("0.01"),ethers.ZeroAddress,{value: ethers.parseEther("0.01")})
await tx6.wait()
console.log(`交易详情：6`)
console.log(tx6)

} else {
let tx7 = await gameContract3.joinGame(ethers.parseEther("0.01"))
await tx7.wait()
console.log(`交易详情：7`)
console.log(tx7)

}

let gameContract4 = new ethers.Contract(newGame, abiGame, wallet4)
if (gameToken == ethers.ZeroAddress) {
let tx8 = await gameContract4.joinGame(ethers.parseEther("0.01"),ethers.ZeroAddress,{value: ethers.parseEther("0.01")})
await tx8.wait()
console.log(`交易详情：8`)
console.log(tx8)
} else {
let tx9 = await gameContract4.joinGame(ethers.parseEther("0.01"))
await tx9.wait()
console.log(`交易详情：9`)
console.log(tx9)
}

let gameContract5 = new ethers.Contract(newGame, abiGame, wallet5)
if (gameToken == ethers.ZeroAddress) {
let tx10 = await gameContract5.joinGame(ethers.parseEther("0.01"),ethers.ZeroAddress,{value: ethers.parseEther("0.01")})
await tx10.wait()
console.log(`交易详情：10`)
console.log(tx10)
} else {
let tx20 = await gameContract4.joinGame(ethers.parseEther("0.01"))
await tx20.wait()
console.log(`交易详情：20`)
console.log(tx20)
}

let tx14 = await gameContract2.drawGame()
await tx14.wait()
console.log(`交易详情：14`)
console.log(tx14)

const winner = await gameContract2.winner()
console.log(`赢家: ${winner}`)

let tx11 = await gameContract.completeGame()
await tx11.wait()
console.log(`交易详情：11`)
console.log(tx11)

let tx12 = await gameContract.getCharity()
await tx12.wait()
console.log(`交易详情：12`)
console.log(tx12)


let tx13 = await gameContract.getWinnerReward()
await tx13.wait()
console.log(`交易详情：13`)
console.log(tx13)


