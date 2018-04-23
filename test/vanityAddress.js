/**
 * https://github.com/libbitcoin/libbitcoin#debianubuntu
 */

const EC = require("elliptic").ec;
const curve = new EC("secp256k1");
const PrivateKey = require("../lib/privatekey");
const Base58Check = require("../lib/encoding/base58check");
const hash160 = require("../lib/crypto/hash").sha256ripemd160;



function getAddress (d, compressed) {
  const keypair = curve.keyFromPrivate(d);
  const pubkey = keypair.getPublic(compressed, "arr");
  // const Q = curve.G.multiply(d).getEncoded(compressed);
  const hash = hash160(Buffer.from(pubkey));
  const payload = Buffer.allocUnsafe(21);
  payload.writeUInt8(0x00, 0); // XXX TODO FIXME bitcoin only??? damn you BIP38
  hash.copy(payload, 1);

  return Base58Check.encode(payload);
}

for(let i=0;;i++){
  const privKey = new PrivateKey("livenet");
  const addr = getAddress(privKey.bn, true);
  if(addr.slice(1,4) === "cao"){
    console.log(privKey);
    console.log(privKey.bn);
    console.log(addr);
    process.exit(110);
  }
  console.log(addr.slice(1,2));
  if(i!==0&&1%100===0){
    console.log(`1w looped...`);
  }
}
