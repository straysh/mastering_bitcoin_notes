Private and Public Keys

  比特币钱包通常是钥匙对的集合,每一对包含私钥和公钥.私钥(k)是一个数值,通常是随机选取的.通过私钥,使用椭圆曲线乘法(单向密码学函数)生成公钥(K).通过公钥(K),使用单向密码学哈希函数生成比特币地址(A).  
![privkey to pubkey to address][0]

### Private key
  公私钥对中使用非对称密码学不是为了加密/编码交易,而是生成*数字签名*.私钥应用到交易的指纹上生成*数值签名*.该签名只能由知晓该秘钥的用户生成.而拥有公钥和交易指纹的用户可以校验签名.  
  这个特性使得任何人可以校验任何一笔交易,同时只有私钥的主人可以生成签名.

#### Private Keys
私钥是一个随机选取的数值.

##### Generating a private key from a random number
  生成秘钥时第一步且最重要的一步就是选取一个安全的熵源/随机数生成器.生成比特币私钥本质上和从&quot;1~ $$ x^{256} $$&quot;中选取一个数是等价的.其实际使用的方法你不需要关心,因为它是不可预测、不可重复的.比特币软件使用的是操作系统底层的随机数生成器产生256位的随机熵.通常,操作系统的随机数生成器需要从认为初始化,因此你可能会被要求用鼠标晃动数秒.  
  更确切的说,私钥可以是[1, n-1] 之间的任何数,其中n是一个 [椭圆双曲线][100] 中定义*order*的常量(n=$$1.1578*10^{77}$$, 稍小于$$2^{256}$$)  
  用编程术语来说:从随机源向字符串填充随机bit,然后通过SHA256哈希算法得到一个256位的数值.若结果小于n,即是我们需要的私钥;否侧,重复上述过程.
> 不要使用编程语言提供的随机数生成器.而是基于熵的种子使用密码学安全的伪随机数生成器(CSPRNG).正确实现CSPRNG对秘钥的安全性极为重要!!!

  以下是一个随机的秘钥(k),以十六进制显示(256位显示位64个十六进制字符, 每个字符4位)

```1E99423A4ED27608A15A2616A2B0E9E52CED330AC530EDCC32C8FFC6A526AEDD```

> 私钥空间的大小, $$2^{256}$$是一个极其巨大的数字.数值上大约等于$$10^{77}$$, 对比一下, 我们宇宙的可见部分大约由$$10^{80}$$个原子组成.

```
$bitcoin-cli -regtest getnewaddress
n49BFuLygTwpVGwv7usnRiTGKrddwYHQ2F
$bitcoin-cli -regtest dumpprivkey n49BFuLygTwpVGwv7usnRiTGKrddwYHQ2F
cVJSo5oQQqRxiKUwUuF3SkakrM5PFz5rU2DijVsRM7TwEJMd2CrA
```
#### Public Keys
  公钥是用私钥通过椭圆双曲线乘法计算得出,并且该计算过程不可逆向进行: $$K = k * G$$.其中$$k$$是私钥,$$G$$是一个常量点,亦称生成器图点, $$K$$是生成的公钥.其逆向过程俗称"离散对数搜索"—从$$K$$计算$$k$$—其难度等同于尝试所有可能的$$k$$值,如同暴力破解.
> 椭圆曲线乘法被密码学家称作"陷阱门"函数:其乘法运算很容易,但逆向的除法运算几乎不可能完成.私钥的生产者可以轻松的制作一把私钥并分享向全世界,而不必担心有人反向计算出他的私钥.这项数学技巧成为比特币资产安全/不可篡改的数字签名的基石.

#### 椭圆双曲线加密学解释
#### Bitcoin Address
比特币地址常常作为交易资产的接收者出现.一个比特币地址能够代表一对公私钥对,或者其他类似支付脚本(payment script).
  对公钥进行单向不可逆哈希运算得到比特币地址."哈希算法"是一个单向函数,它可以对任意长度的输入计算出一个指纹或者说"hash".加密哈希函数在比特币中有着广泛的应用:如比特币地址,脚本地址(script address),工作量证明算法.生成比特币地址的哈希算法是Secure Hash Algorithm(SHA)和RACE Integrity Primitives Evaluation Message Digest(RIPEMD), 具体来讲是*SHA256*和*RIPEMD160*  
  从公钥$$K$$开始,我们先计算其$$SHA256$$哈希值,然后计算$$RIPEMD160$$哈希值,生成一个160位(20字节)的数字.  
> $$ {A = RIPEMD160(SHA256(K))} $$
其中$$K$$是公钥, $$A$$是比特币地址
> 比特币地址和公钥是不等同的.比特币地址是从公钥由单向函数演算而来.

比特币地址几乎都会被编码为"Base58Check" (参考[Bse58 和 Base58Check编码][102]), 其使用58个字符(Base58数值系统)和校验码来帮助阅读,避免歧义,以及减少输入的错误.Base58Check在比特币的其他方面也有应用,例如比特币地址,私钥,加密编码的私钥,脚本哈希等需要人阅读和键入的场景.
![public key to address][1]

#### Base58 和 Base58Check Encoding
比特币Base58字母表
> 123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz

  Base58Checkd是对Base58的编码格式, 针对传输和键入增加了额外的安全性,在比特币中使用频繁.校验码是附加到编码串后的4字节.校验码衍生自编码串哈希,因此能够侦测和防止传输/键入错误.  
  为了将`data`数据(数字)转换位Base58Check格式,首先给`data`添加`prefix`,称为"版本字节"(version byte),表示被编码的数据类型.例如,再比特币地址中,prefix是0即`0x00`,而编码私钥时prefix是128即`0x80`  
> checksum = SHA256(SHA256(prefix+data))
Base58Check version prefix and encoded result examples

| Type | Version prefix (hex) | Base58 result prefix |
| :--: | ---- | ---- |
| Bitcoin Address | 0x00 | 1 |
| Pay-to-Script-Hash Address | 0x05 | 3 |
| Bitcoin Testnet Address | 0x6F | m or n |
| Private Key WIF | 0x80 | 5, K, or L |
| BIP-38 Encrypted Private Key | 0x0142 | 6P |
| BIP-32 Extended Public Key | 0x0488B21E | xpub |
![Base58Check encoding][3]

#### Key Formats
私钥和公钥都可以用多种格式来展示.虽然他们看起来不同,但都编码自同一个数字.
#### Private key formats
从相同的256位数字开始,私钥可以被编码为多种格式.十六进制和二进制格式通常再比特币系统内部使用,而WIF格式多用在导入/导出私钥以及二维码扫描上.

Private key representations (encoding formats)
| Type           | Prefix | Description                                                  |
| -------------- | ------ | ------------------------------------------------------------ |
| Raw            | None   | 32 bytes                                                     |
| Hex            | None   | 64 hexadecimal digits                                        |
| WIF            | 5      | Base58Check encoding: Base58 with version prefix of 128- and 32-bit checksum |
| WIF-compressed | K or L | As above, with added suffix 0x01 before encoding             |

Example: Same key, different formats
| Format         | Private key                                                  |
| -------------- | ------------------------------------------------------------ |
| Hex            | e6561fe50eff6241c589c83286ff980d01ec865e1e5ef6e73e0642cb81dc0519 |
| WIF            | 93LMoEmx9aBBoyJCtdkxqRpycCM2REqgJT747TUjfzepdcE6deV          |
| WIF-compressed | cVJSo5oQQqRxiKUwUuF3SkakrM5PFz5rU2DijVsRM7TwEJMd2CrA         |

Base58Check 解码未压缩的私钥
```json
{
  version: 'ef',
  payload: 'e6561fe50eff6241c589c83286ff980d01ec865e1e5ef6e73e0642cb81dc0519',
  checksum: '9095d886' 
}
```

Base58Check 解码压缩私钥.注意`payload`的末位是`01`,表明将来计算出的公钥也是压缩的
```json
{
  version: 'ef',
  payload: 'e6561fe50eff6241c589c83286ff980d01ec865e1e5ef6e73e0642cb81dc051901',
  checksum: 'ab8c6157' 
}
```

#### Encode from hex to Base58Check
未压缩私钥
```js
let b = Buffer.from("e6561fe50eff6241c589c83286ff980d01ec865e1e5ef6e73e0642cb81dc0519", "hex");
b = Buffer.from([...Buffer.from("ef", "hex"), ...b]);
console.log(Base58Check.encode(b));
//93LMoEmx9aBBoyJCtdkxqRpycCM2REqgJT747TUjfzepdcE6deV
```

压缩的私钥
```js
let b = Buffer.from("e6561fe50eff6241c589c83286ff980d01ec865e1e5ef6e73e0642cb81dc051901", "hex");
b = Buffer.from([...Buffer.from("ef", "hex"), ...b]);
console.log(Base58Check.encode(b));
//cVJSo5oQQqRxiKUwUuF3SkakrM5PFz5rU2DijVsRM7TwEJMd2CrA
```
#### Public key formats
  也有多种格式,通常分为压缩公钥和非压缩公钥.  
  公钥是椭圆双曲线上的一对坐标(x,y).通常,公钥的格式为:前缀`0x04`+256位数字(图点对应的x坐标)+256位数字(图点对应的y坐标).前缀`0x04`表示压缩公钥,而`0x02`或`0x03`表示非压缩公钥.  
```
x = 1a2d8c995e4f416b7a1b8334eb03461aca32cce67d15774f2a99f19a1f871bd2
y = 80cda88a4cccfe70e9b37cfea95671c589f21b37718aef1856fa07a63b35a70e
```
  该公钥使用上述格式(04 x y)展示如下:(520位数字,130位十六进制字符串)
```
K=041a2d8c995e4f416b7a1b8334eb03461aca32cce67d15774f2a99f19a1f871bd280cda88a4cccfe70e9b37cfea95671c589f21b37718aef1856fa07a63b35a70e
```
#### Compressed public keys
引进压缩公钥是为了减小交易的字节容量并降低节点上储存区块链的磁盘空间.大部分交易会包含公钥以便校验所有者.每个公钥需要520位(prefix+x+y),每个块包含数百个交易,而每天将产生数千笔交易,结果是每天将在区块链上产生巨大的数据量.  
  因为公钥代表椭圆曲线上的一个点(x,y).因为椭圆曲线表示一个数学函数,曲线上的点表示方程式的一个解.因此,如果我们知道x坐标,就可以通过公式$$y^2\;mod\;p = (x^3+7)\;mod\;p$$计算出y坐标.这样,我们只需要存储x坐标,省略y坐标,从而节省了256比特的空间,介乎节省了50%的空间.  
  未压缩公钥的前缀是`04`,压缩公钥的前缀是`02`或`03`.那么,为什么压缩公钥会有两个前缀呢?因为公式左边是$$y^2$$,y有正负两个解.从图像上解释,即x对应的y值在x轴对称的位置会有两个解.如果y是奇数,前缀是`02`;如果是偶数,前缀是`03`.
![Public key compression][2]
下面是压缩公钥, 264位(66位十六进制字符串):
> K = 021a2d8c995e4f416b7a1b8334eb03461aca32cce67d15774f2a99f19a1f871bd2

  尽管压缩公钥也是从同一个私钥计算而来, 但它和非压缩公钥明显不等.因而, 使用双哈希函数(RIPEMD160(SHA256(K)))计算出来的地址也完全不同.这意味着,同一个私钥将计算出两个完全不同的比特币地址(当然,这两个比特币地址对应的私钥是唯一且相同的).  

#### Compressed private keys
位解决客户端不知道应该使用压缩的还是非压缩的公钥, 比特币引入了私钥的*WIF*格式.  
讽刺的是, 术语"压缩私钥"是不恰当的,因为私钥导出为压缩格式实际上比非压缩格式多一字节.因为压缩私钥需要一个字节的后缀`0x01`.那些未压缩的私钥不应采用压缩模式.术语"压缩私钥"实际上指代从该私钥衍生的公钥需要压缩格式,同时那些非压缩私钥衍生的公钥需要采用非压缩格式.你应该仅仅使用"WIF-compressed"或"WIF",而不是私钥本身的压缩与否.

| Format         | Private key                                                  |
| -------------- | ------------------------------------------------------------ |
| Hex            | e6561fe50eff6241c589c83286ff980d01ec865e1e5ef6e73e0642cb81dc0519 |
| WIF            | 93LMoEmx9aBBoyJCtdkxqRpycCM2REqgJT747TUjfzepdcE6deV          |
| Hex-compressed | e6561fe50eff6241c589c83286ff980d01ec865e1e5ef6e73e0642cb81dc051901 |
| WIF-compressed | cVJSo5oQQqRxiKUwUuF3SkakrM5PFz5rU2DijVsRM7TwEJMd2CrA         |
  增加的后缀`0x01`,使得Base58编码后的首字母从*5*变为*K*或者*L*.需要谨记的是:压缩与非压缩格式是不能随意转换的.在新的钱包中,私钥始终要以WIF-compressed格式导出(首字母是K或者L),而在老式钱包中,不要使用压缩格式,私钥导出后始终以5打头.其目的是告诉钱包,应该使用何种比特币地址去区块链上查找数据.  

#### BIP38
[Encrypted Private Keys (BIP-38)][104]

| **Private Key (WIF)**      | cVJSo5oQQqRxiKUwUuF3SkakrM5PFz5rU2DijVsRM7TwEJMd2CrA       |
| -------------------------- | ---------------------------------------------------------- |
| **Passphrase**             | AMX7Fz7bRlEs9QKybZ2WTcFupOssXRn+yOXNn45Fxsg=               |
| **Encrypted Key (BIP-38)** | 6PYRU2sfUkA4QWwffj1R6peTUCgKazVr738Yy3SH4jePWpvd7DHQ5GfJrv |

#### Pay-to-Script Hash (P2SH) and Multisig Addresses





[0]:./images/privkey_2pubkey_2address.png "privkey to pubkey to address"
[1]:./images/pubkey_2address.png
[2]:./images/public_key_compression.png
[3]:./images/Base58Check_encoding.png
[100]: https://en.wikipedia.org/wiki/Elliptic_curve "椭圆双曲线"
[101]: https://en.bitcoin.it/wiki/Secp256k1 "比特币椭圆双曲线"
[102]: https://en.wikipedia.org/wiki/Base58 "Bse58 和 Base58Check编码"
[103]: https://en.bitcoin.it/wiki/Base58Check_encoding "Bse58 和 Base58Check编码"
[104]: https://github.com/bitcoinjs/bip38/blob/master/index.js "Encrypted Private Keys (BIP-38)"

* [搭建比特币私链](https://samsclass.info/141/proj/pBitc1.htm)