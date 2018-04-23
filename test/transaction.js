const Transaction = require("../lib/transaction/transaction");
const Uint = require("../lib/unit");
const BN = require("../lib/crypto/bn");

const raw = "0100000001fadc6f37fb54cbfcc0f44b747888545816fc2abddfe677ca89f03605719ce3fe000000004847304402203941bf1a40b3b0d4076f4059836450062bdd15a021ca4a978a819e010006ca6302203ce2d13db10ef67dc28c20349231565f2bb802ab4c81225d86c822b475360a4d01feffffff0280778e06000000001976a914f82c901181c3f35d6ea3eea3477c4d628aff40d888ac806b7723010000001976a91475ea42faa1751bd7a3e8e43dd844f51c092f03c488ac65000000";

const decodedTransaction = new Transaction(raw);
console.log(decodedTransaction);

const txid = "76A91475EA42FAA1751BD7A3E8E43DD844F51C092F03C488AC";
const amount = 48.89996160;
const bf = new BN(Uint.fromBTC(amount).toSatoshis());
console.log(bf);

// console.log(parseInt('FFFFFFFE', 16));

