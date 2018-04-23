const PrivateKey = require("../lib/privatekey");
const sha256ripemd160 = require("../lib/crypto/hash").sha256ripemd160;
const Base58Check = require("../lib/encoding/base58check");


const address = "n49BFuLygTwpVGwv7usnRiTGKrddwYHQ2F";
const privKeyWif = "cSNfaeLJRFyDV5NQAUx1LAYfNVFLcBCStiDky6RjmLPkSpmYSQxf";
const privKey = new PrivateKey( privKeyWif );
const pubkey = privKey.toPublicKey();
console.log(`privkey Buffer:`, privKey.toBuffer().toString("hex"));
console.log(`pubkey:`, pubkey.toString());
const hashbuf = sha256ripemd160(pubkey.toBuffer());
console.log( `hashbuf:`, hashbuf.toString("hex") );
console.log( `base58check:${Base58Check.encode(Buffer.from([0x6f, ...hashbuf]))}` );

console.log(`Locking Script:`, `OP_DUP OP_HASH160 ${hashbuf.toString('hex')} OP_EQUALVERIFY OP_CHECKSIG`);

