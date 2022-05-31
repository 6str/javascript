const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log("\n\tkeyGen Public key: ", publicKey);
console.log("\n\tkeyGen Private key: ", privateKey, "\n");

