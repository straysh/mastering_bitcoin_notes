/**
 * BIP38
 * https://github.com/bitcoinjs/bip38/blob/master/index.js
 */

const BN = require("../lib/crypto/bn");
const EC = require("elliptic").ec;
const curve = new EC("secp256k1");
const Base58Check = require("../lib/encoding/base58check");
const hash160 = require("../lib/crypto/hash").sha256ripemd160;
const PrivateKey = require("../lib/privatekey");
const bip38 = require('bip38');

// const ecurve = require('ecurve')
// const curve = ecurve.getCurveByName('secp256k1')

function getAddress (d, compressed) {
  const keypair = curve.keyFromPrivate(d);
  const pubkey = keypair.getPublic(compressed, "arr");
  // const Q = curve.G.multiply(d).getEncoded(compressed);
  const hash = hash160(Buffer.from(pubkey));
  const payload = Buffer.allocUnsafe(21);
  payload.writeUInt8(0x6f, 0); // XXX TODO FIXME bitcoin only??? damn you BIP38
  hash.copy(payload, 1);

  return Base58Check.encode(payload);
}


const privKeyWif = "cVJSo5oQQqRxiKUwUuF3SkakrM5PFz5rU2DijVsRM7TwEJMd2CrA";
const privKeyBn = "104184124151266178554855244405732166916618115452920084132405497568573890757913";
// console.log( getAddress(new BN(privKeyBn), true) );
const privKey = new PrivateKey( privKeyWif );
const encoded = bip38.encrypt(privKey.toBuffer(), true, "AMX7Fz7bRlEs9QKybZ2WTcFupOssXRn+yOXNn45Fxsg=");
console.log(encoded);


