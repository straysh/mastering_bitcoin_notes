const Address = require("../lib/address");
const PrivateKey = require("../lib/privatekey");


const address = "n49BFuLygTwpVGwv7usnRiTGKrddwYHQ2F";
const privKeyWif = "cVJSo5oQQqRxiKUwUuF3SkakrM5PFz5rU2DijVsRM7TwEJMd2CrA";
const privKey = new PrivateKey( privKeyWif );
const addr = new Address([privKey.toPublicKey()], 1, 'testnet');
console.log(addr);