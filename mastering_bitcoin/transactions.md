receive address: n49BFuLygTwpVGwv7usnRiTGKrddwYHQ2F

```bash
$bitcoin-cli --regtest sendtoaddress n49BFuLygTwpVGwv7usnRiTGKrddwYHQ2F 1.1
8b1fa0d470fc68dfe73dd15e6ccd42477622f1d6531d6eae93969e73628c1ca3
```

raw transaction: 0100000001fadc6f37fb54cbfcc0f44b747888545816fc2abddfe677ca89f03605719ce3fe000000004847304402203941bf1a40b3b0d4076f4059836450062bdd15a021ca4a978a819e010006ca6302203ce2d13db10ef67dc28c20349231565f2bb802ab4c81225d86c822b475360a4d01feffffff0280778e06000000001976a914f82c901181c3f35d6ea3eea3477c4d628aff40d888ac806b7723010000001976a91475ea42faa1751bd7a3e8e43dd844f51c092f03c488ac65000000

decode raw transaction:
```json
{
  "txid": "8b1fa0d470fc68dfe73dd15e6ccd42477622f1d6531d6eae93969e73628c1ca3",
  "size": 191,
  "version": 1,
  "locktime": 101,
  "vin": [
    {
      "txid": "fee39c710536f089ca77e6dfbd2afc1658548878744bf4c0fccb54fb376fdcfa",
      "vout": 0,
      "scriptSig": {
        "asm": "304402203941bf1a40b3b0d4076f4059836450062bdd15a021ca4a978a819e010006ca6302203ce2d13db10ef67dc28c20349231565f2bb802ab4c81225d86c822b475360a4d[ALL]",
        "hex": "47304402203941bf1a40b3b0d4076f4059836450062bdd15a021ca4a978a819e010006ca6302203ce2d13db10ef67dc28c20349231565f2bb802ab4c81225d86c822b475360a4d01"
      },
      "sequence": 4294967294
    }
  ],
  "vout": [
    {
      "value": 1.10000000,
      "n": 0,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 f82c901181c3f35d6ea3eea3477c4d628aff40d8 OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914f82c901181c3f35d6ea3eea3477c4d628aff40d888ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "n49BFuLygTwpVGwv7usnRiTGKrddwYHQ2F"
        ]
      }
    }, 
    {
      "value": 48.89996160,
      "n": 1,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 75ea42faa1751bd7a3e8e43dd844f51c092f03c4 OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a91475ea42faa1751bd7a3e8e43dd844f51c092f03c488ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "mrGRzHK6VKGNae6c7WHtcEjSKgx9ryCLDW"
        ]
      }
    }
  ]
}
```

```json
68999ea15c8cfa80e18570240efb52d31133de14d7f55efef3ac00000000
{
  "txid": "fee39c710536f089ca77e6dfbd2afc1658548878744bf4c0fccb54fb376fdcfa",
  "size": 98,
  "version": 1,
  "locktime": 0,
  "vin": [
    {
      "coinbase": "510101",
      "sequence": 4294967295
    }
  ],
  "vout": [
    {
      "value": 50.00000000,
      "n": 0,
      "scriptPubKey": {
        "asm": "0209c8fbe1adb8e568999ea15c8cfa80e18570240efb52d31133de14d7f55efef3 OP_CHECKSIG",
        "hex": "210209c8fbe1adb8e568999ea15c8cfa80e18570240efb52d31133de14d7f55efef3ac",
        "reqSigs": 1,
        "type": "pubkey",
        "addresses": [
          "mnsYJzAKYdrco47a6Fo4AnuHchrjNZJVEH"
        ]
      }
    }
  ]
}
```
Transaction Structure:

| 字段                         | 值                                                           |
| ---------------------------- | ------------------------------------------------------------ |
| Version                      | 01000000                                                     |
| Number Of Inputs             | 01                                                           |
| Previous Tx Hash             | FADC6F37FB54CBFCC0F44B747888545816FC2ABDDFE677CA89F03605719CE3FE |
| Previous Output Index        | 00000000                                                     |
| Script Length                | 48                                                           |
| ScriptSig(Unlocking script)  | 47304402203941BF1A40B3B0D4076F4059836450062BDD15A021CA4A978A819E010006CA6302203CE2D13DB10EF67DC28C20349231565F2BB802AB4C81225D86C822B475360A4D01 |
| Sequence                     | FEFFFFFF                                                     |
| Number Of Outputs            | 02                                                           |
| Value                        | 80778E0600                                                   |
| ScriptLength                 | 00000019                                                     |
| ScriptPubKey(Locking Script) | 76A914F82C901181C3F35D6EA3EEA3477C4D628AFF40D888AC           |
| Value                        | 806B772301                                                   |
| ScriptLength                 | 00000019                                                     |
| ScriptPubKey(Locking Script) | 76A91475EA42FAA1751BD7A3E8E43DD844F51C092F03C488AC           |
| Locktime                     | 65000000                                                     |

