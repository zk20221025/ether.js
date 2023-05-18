// 声明只可写合约的规则：
// const contract = new ethers.Contract(address, abi, signer);
// 参数分别为合约地址`address`，合约ABI `abi`，Signer变量`signer`

import { ethers } from 'ethers'
// playcode免费版不能安装ethers，用这条命令，需要从网络上import包（把上面这行注释掉）
// import { ethers } from "https://cdn-cors.ethers.io/lib/ethers-5.6.9.esm.min.js";

// 利用Alchemy的rpc节点连接以太坊网络
// 准备 alchemy API 可以参考https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL04_Alchemy/readme.md
const INFURA_GOERLI_URL = 'https://goerli.infura.io/v3/8280c1f722bf4d1ab88eb72177679d82'
const provider = new ethers.JsonRpcProvider(INFURA_GOERLI_URL)

// 利用私钥和provider创建wallet对象
const privateKey =
    ''
const wallet = new ethers.Wallet(privateKey, provider)

// WETH的ABI
const abiWETH = [
    'function balanceOf(address) public view returns(uint)',
    'function deposit() public payable',
    'function transfer(address, uint) public returns (bool)',
    'function withdraw(uint) public',
]
// WETH合约地址（Goerli测试网）
const addressWETH = '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6'
// WETH Contract

// 声明可写合约
const contractWETH = new ethers.Contract(addressWETH, abiWETH, wallet)
// 也可以声明一个只读合约，再用connect(wallet)函数转换成可写合约。
// const contractWETH = new ethers.Contract(addressWETH, abiWETH, provider)
// contractWETH.connect(wallet)

const main = async () => {
    const address = await wallet.getAddress()
    // 读取WETH合约的链上信息（WETH abi）
    console.log('\n1. 读取WETH余额')
    const balanceWETH = await contractWETH.balanceOf(address)
    console.log(`存款前WETH持仓: ${ethers.formatEther(balanceWETH)}\n`)

    console.log('\n2. 调用desposit()函数，存入0.001 ETH')
    // 发起交易
    const tx = await contractWETH.deposit({
        value: ethers.parseEther('0.001'),
    })
    // 等待交易上链
    await tx.wait()
    console.log(`交易详情：`)
    console.log(tx)
    const balanceWETH_deposit = await contractWETH.balanceOf(address)
    console.log(
        `存款后WETH持仓: ${ethers.formatEther(balanceWETH_deposit)}\n`,
    )

    console.log('\n3. 调用transfer()函数，给vitalik转账0.001 WETH')
    // 发起交易
    const tx2 = await contractWETH.transfer(
        'vitalik.eth',
        ethers.parseEther('0.001'),
    )
    // 等待交易上链
    await tx2.wait()
    const balanceWETH_transfer = await contractWETH.balanceOf(address)
    console.log(
        `转账后WETH持仓: ${ethers.formatEther(balanceWETH_transfer)}\n`,
    )
}

main()
