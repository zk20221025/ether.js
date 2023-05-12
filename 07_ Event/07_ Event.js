// 检索事件的方法：
// const transferEvents = await contract.queryFilter("事件名", [起始区块高度，结束区块高度])
// 其中起始区块高度和结束区块高度为选填参数。

import { ethers } from 'ethers'
// 利用Infura的rpc节点连接以太坊网络
// 准备Infura API Key, 教程：https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL02_Infura/readme.md
const INFURA_ID = '8280c1f722bf4d1ab88eb72177679d82'
// 连接rinkeby测试网
const provider = new ethers.providers.JsonRpcProvider(
    `https://goerli.infura.io/v3/8280c1f722bf4d1ab88eb72177679d82`,
)

// WETH ABI，只包含我们关心的Transfer事件
const abiWETH = [
    'event Transfer(address indexed from, address indexed to, uint amount)',
]

// 测试网WETH地址
const addressWETH = '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6'
// 声明合约实例
const contract = new ethers.Contract(addressWETH, abiWETH, provider)

const main = async () => {
    // 获取过去10个区块内的Transfer事件
    console.log('\n1. 获取过去10个区块内的Transfer事件，并打印出1个')
// 得到当前block
const block = await provider.getBlockNumber()
console.log(`当前区块高度: ${block}`);
console.log(`打印事件详情:`);
const transferEvents = await contract.queryFilter('Transfer', block - 10, block)
// 打印第1个Transfer事件
console.log(transferEvents[0])

    console.log(`事件数: ${transferEvents.length}`)
    // 打印第1个Transfer事件
    console.log(transferEvents[0])

    // 解析Transfer事件的数据（变量在args中）
    console.log('\n2. 解析事件：')
    const amount = ethers.utils.formatUnits(
        ethers.BigNumber.from(transferEvents[0].args['amount']),
        'ether',
    )
    console.log(
        `地址 ${transferEvents[0].args['from']} 转账${amount} WETH 到地址 ${transferEvents[0].args['to']}`,
    )
}

main()
