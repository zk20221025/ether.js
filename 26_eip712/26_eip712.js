import { ethers } from "ethers";

// 利用Alchemy的rpc节点连接以太坊网络
// 准备 alchemy API 可以参考https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL04_Alchemy/readme.md 
const ALCHEMY_GOERLI_URL = 'https://goerli.infura.io/v3/8280c1f722bf4d1ab88eb72177679d82';
const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_GOERLI_URL);

// 利用私钥和provider创建wallet对象
const privateKey = '0x220dcca66eade77247d22f4de81332e0b8aced92b96a2c91ca0bd3e11ee98480'
const wallet = new ethers.Wallet(privateKey, provider)

// 创建 EIP712 Domain
let contractName = "EIP712Storage"
let version = "1"
let chainId = "1"
let contractAddress = "0xf8e81D47203A594245E36C48e151709F0C19fBe8"

const domain = {
    name: contractName,
    version: version,
    chainId: chainId,
    verifyingContract: contractAddress,
};

// 创建类型化数据，Storage
let spender = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
let number = "100"

const types = {
    Storage: [
        { name: "spender", type: "address" },
        { name: "number", type: "uint256" },
    ],
};

const message = {
    spender: spender,
    number: number,
};

const main = async () => {
    console.log("Message: ", message)
    // EIP712 签名
    const signature = await wallet.signTypedData(domain, types, message);
    console.log("Signature:", signature);
    // 验证 EIP712 签名，从签名和消息复原出 signer 地址
    let eip712Signer = ethers.verifyTypedData(domain, types, message, signature)
    console.log("EIP712 Signer: ", eip712Signer)
}

main();