const ECDSA = require("../lib/crypto/ecdsa");
const PrivateKey = require("../lib/privatekey");

const privKeyWif = "cVJSo5oQQqRxiKUwUuF3SkakrM5PFz5rU2DijVsRM7TwEJMd2CrA";
const msg1 = "0209c8fbe1adb8e568999ea15c8cfa80e18570240efb52d31133de14d7f55efef3";
const privKey = new PrivateKey( privKeyWif );
const pubHashBuffer = Buffer.from(msg1, 'hex');

const hashbuf = sighash(transaction, sighashType, inputIndex, subscript);
const signature1 = ECDSA.sign(pubHashBuffer, privKey)
  .toBuffer().toString('hex')
console.log(signature1);