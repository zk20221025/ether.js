import {ethers} from 'ethers'

const INFURA_SEPOLIA_URL =
    'https://sepolia.infura.io/v3/8280c1f722bf4d1ab88eb72177679d82'
const provider = new ethers.JsonRpcProvider(INFURA_SEPOLIA_URL)

const privateKey =
    '0x220dcca66eade77247d22f4de81332e0b8aced92b96a2c91ca0bd3e11ee98480'
const wallet = new ethers.Wallet(privateKey, provider)

// 第1种输入abi的方式: 复制abi全文
// WETH的abi可以在这里复制：https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2#code
const abiHeroV1Factory =
    '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"game","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"GameCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"game","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"GamePaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"game","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"GameUnpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPGRADER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentGameId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"games","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minJoinAmount","type":"uint256"},{"internalType":"uint256","name":"_minPlayers","type":"uint256"},{"internalType":"uint256","name":"_guarantee","type":"uint256"},{"internalType":"address","name":"_charityAddress","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint8","name":"_charityPercentage","type":"uint8"},{"internalType":"uint8","name":"_referrPercentage","type":"uint8"},{"internalType":"uint8","name":"_drawingRewardPercentage","type":"uint8"}],"name":"newGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gameId","type":"uint256"}],"name":"pauseGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxiableUUID","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gameId","type":"uint256"}],"name":"unpauseGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"}]'
const addressHeroV1Factory = '0x8640f3AAe61619187793a0FB90405f9C9c2DbFA4' // WETH Contract
const contractHeroV1Factory = new ethers.Contract(
    addressHeroV1Factory,
    abiHeroV1Factory,
    wallet
)

const main = async () => {
    const minJoinAmount = 100000000000000000 // 最小加入金额
    const minPlayers = 2 // 最小玩家数
    const guarantee = 100000000000000000 // 保证金
    const charityAddress = '0xd24eceF3AA9257383BD3341e63F6Cd73951186dF' // 慈善机构地址
    const tokenAddress = '0x0000000000000000000000000000000000000000' // 代币地址
    const charityPercentage = 96 // 慈善比例
    const referrPercentage = 1 // 推荐人比例
    const drawingRewardPercentage = 1 // 抽奖奖励比例

    // 调用newGame函数
    const tx = await contractHeroV1Factory.newGame(
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
}
main()
