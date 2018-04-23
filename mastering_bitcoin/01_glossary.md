1.  address  
    比特币地址形似`1DSrfJdB2AnWaFNgSbv3MZC2m74996JafV`,它由字母和数字组成.
    它是公钥 → *160bit hash* → *base58check*的编码形式.就像让人向你的email邮件地址发送邮件一样,你也可以让人向你的比特币地址发送比特币.
2.  bip  
    *Bitcoin Improvement Proposals*:一些列由比特币社区成员提出用以改善比特币的提案.  
    举例:`BIP-21`是改善比特币统一资源定位符(URI)方案的提案.
3.  bitcoin  
    略......
4.  block  
    一组交易(group of transactions),并标记上时间戳`timestamp`和前一项block的指纹`fingerprint`.
    其中,`block header`被哈希来生成工作量证明`proof of work`,以此来校验其包含的交易.合法的blocks经过网络共识后被添加进主区块链.
5.  blockchain  
    合法blocks的列表,一直向上链接到创世块.
6.  Byzantine Generals Problem(拜占庭将军问题)  
    略......
7.  coinbase transaction  
    一个block中的第一个交易.它总是由旷工创建,并含有一条`coinbase`.  
    敲黑板:不要和`Coinbase`混淆.
8.  cold storage  
9.  colord coins  
    开源比特币2.0协议,让开发者由能力基于比特币区块链创造超出法币的数字资产.
10. confirmations  
    当一笔交易被包含到某个block A中时,它将获得一个`confirmation`.一旦另一个block B在同一条链上(block A所在的链)被旷工挖矿, 这个交易就由`2 confirmations`,以此类推.*>= 6*个确认数即可认为该交易不会被回滚.
11. consensus  
    当一些节点,通常指网络上大部分节点,在他们的本地已校验的最长链中都包含相同的块.  
    敲黑板:不要和`coinsensus rules`混淆
12. difficulty  
    用来控制需要多少算力来产生一个工作量证明的网络参数
13. difficulty retargeting  
    对`difficulty`的重复计算,每2016个block触发,并会参考前2016个block的哈希能力.
14. difficulty target  
    网络中所有算力都能每隔10分钟算出block的难度值
15. double-spending  
    双花指某笔资金成功花费至少一次.比特币会检查每一笔交易的输入,确保它没有被之前的block引用过.
16. ECDSA  
    椭圆双曲线算法*Elliptic Curve Digital Signature Algorithm or ECDSA*,是比特币确保资产被合法拥有者使用的密码学算法.
17. extra nonce  
    随着`diffculty`的增加, 矿工会陷入在400万的可能值中寻找nonce但仍算不出block的死循环.因为`coinbase`脚本能存储2~100bytes数据,矿工开始使用那部分空间来作为额外的nonce空间,使得可以用更大的blocker header空间来寻找合格的block.
18. fees  
    为了交易被网络处理,交易的发送者通常会附加一笔矿工费.大部分交易要求最小矿工费 *0.5mBTC*;   
19. fork  
    略......
20. genesis block  
    区块链中的第一个block, 用以初始化加密货币
21. hard fork  
    略......
22. hardware wallet  
    在加密的硬件设备中存储私钥的比特币钱包.
23. hash  
    一段二进制数据的数字指纹.
24. hashlocks  
    是一种禁止使用某个`output`的限制,除非某段特定的数据被公开.hashlocks有一种很实用的属性,即当hashblocks A被公开以后,其他任何被hashlocks A加密且实用相同key的数据也可以被解开.使得可以实用同一个hashlock同时锁定多个`output`,并同时解锁.
25. HD protocol  
    HD key 创建和转移协议(*BIP32*).
26. HD wallet  
27. HD wallet seed  
    HD钱包种子(根种子)用来给HD钱包生成`master privatekey`和`master chaincode`
28. HTLC 闪电网络  
    哈希时间锁定合约*Hashed TimeLock Contract or HTLC*
29. KYC  
    了解你的客户*Know your customer (KYC)*
30. LevelDB  
31. Lighting Networks 闪电网络  
32. Locktime  
    Locktime或者nLockTime指交易能被加入到区块链条件: 最小时间戳或者最小块高度.
33. mempool  
    比特币内存池,指block中所有被本地校验但尚未被确认(打包落块)的交易.
34. merkle root  
    merkle tree的根节点.
35. merkle tree  
36. miner  
37. multisignature  
    一笔交易需要多个私钥来验证
38. network  
    p2p网络
39. nonce  
    在比特币block中,`nonce`是一个32位(4字节)字段,保存了一个值,这个值使得该block的哈希包含一串0.而剩余的部分将不会改变,因为它们含有确定的含义.
40. off-chain transactions  
    脱链交易
41. opcode  
42. OP_RETURN  
43. OP_RETURN transaction  
44. orphan block  
    在本地区块链中找不到父块的块.
45. orphan transactions  
    由于缺少input transations而不能进入内存池的交易
46. output  
47. P2PKH  
    支付到比特币地址的交易,包含P2PKH(Pay To PubKey Hash Script).一个由P2PKH锁定的output可以被公钥和对应私钥生成的签名解锁(花费).
48. P2SH  
    ???
49. P2SH address  
    20位哈希的Base58Check编码数据.
50. P2WPKH  
    ???
51. paper wallet  
    略......
52. payment channels  
    ???
53. pooled mining  
    矿池
54. Proof-of-Stake  
    权益证明
55. Proof-of-Work  
    工作量证明
56. reward  
    挖矿产生的奖励(凭空产生的比特币)
57. RIPEMD-160  
    RIPEMD-160是一个160位的密码学哈希函数. RIPEMD160是RIPEMD的加强版,并认为再未来十年内是安全的.
58. satoshi  
59. Script  
60. ScriptPubKey(aka pubkey script)  
    ScriptPubKey存在于`output`中,指定了花费该笔资金的条件.`signature script`提供了解锁所必须的数据.
61. ScriptSig(aka signature script)  
    花费者生成的数据,作为变量来匹配`pubkey script`
62. secret key(aka private key)  
    私钥,一个私密的大数
63. Segregated Witness  
    ???
64. SHA  
65. Simplified Payment Verification(SPV)  
66. soft fort  
67. stable block  
68. timelocks  
69. transaction  
70. transaction pool  
71. Turing completeness  
72. unspent transaction output(UTXO)  
73. wallet  
74. Wallet Import Format(WIF)  
    
