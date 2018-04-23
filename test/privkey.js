const PrivateKey = require("../lib/privatekey");
const BN = require("../lib/crypto/bn");
const Base58 = require("../lib/encoding/base58");
const Base58Check = require("../lib/encoding/base58check");

function Assert(a,b){if(a!==b)throw new Error("mismatch!");}
const address = "n49BFuLygTwpVGwv7usnRiTGKrddwYHQ2F";
const privKeyWif = "cVJSo5oQQqRxiKUwUuF3SkakrM5PFz5rU2DijVsRM7TwEJMd2CrA";
const privKeyBn = "104184124151266178554855244405732166916618115452920084132405497568573890757913";
const privKey = new PrivateKey( privKeyWif );
Assert(address, privKey.toAddress().toString());

// console.log(`priv Hex:`, privKey.toBuffer().toString('hex'));
// console.log(`priv compressed:`, privKey.toWIF(true));
// console.log(`priv uncompressed:`, privKey.toWIF(false));
// console.log(Base58Check.decode(privKey.toWIF(true)));
//
// const buf = Buffer.from(Base58.decode(privKey.toWIF(false)));
// const buf2 = {
//   version:buf.slice(0,1).toString("hex"),
//   payload:buf.slice(1,buf.length-4).toString("hex"),
//   checksum:buf.slice(buf.length-4).toString("hex"),
// }
// console.log(buf2);
//
// let b = Buffer.from("e6561fe50eff6241c589c83286ff980d01ec865e1e5ef6e73e0642cb81dc0519", "hex");
// b = Buffer.from([...Buffer.from("ef", "hex"), ...b]);
// console.log(Base58Check.encode(b));

// const pubkey = privKey.toPublicKey();
// const x = pubkey.point.x.toString('hex');
// const y = pubkey.point.y.toString('hex');
// console.log(pubkey.toString());