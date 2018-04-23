const Script = require("../lib/script/script");
const Interpreter = require("../lib/script/interpreter");



const inputScript = Script('OP_1');
const outputScript = Script('OP_DUP OP_HASH160 50ad984c1b6d34c4ffc2fa12745a79e299e8abe4 OP_EQUALVERIFY OP_CHECKSIG');

const verified = (new Interpreter()).verify(inputScript, outputScript);
console.log(verified);