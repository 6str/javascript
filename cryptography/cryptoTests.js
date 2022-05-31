// a very simplified demo of some techniques of hashing, encryption, signing and verification
// this is just a basic demo using the idea of a crypto transaction but it drops some real world features/complexity
// note a wallet address is not the public key but, for e.g. 0x & last 20 bytes of sha256 hash of the public key
// ECDSA signatures contain enough information that together with the signed message, allow what is known as "public key recovery",
// and knowing the public key the address can be calculated

// https://keygen.sh/blog/how-to-use-hexadecimal-ed25519-keys-in-node/

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const { clear } = require('console');
const crypto = require('crypto');  // node.js module

class Person  {
    constructor(keyPair){
        this.keyPair = keyPair;
        this.privateKey = keyPair.getPrivate('hex');
        this.publicKey = keyPair.getPublic('hex');
    }
}

class Txn {
    constructor (fromAddr, toAddr, amount) {
        this.fromAddr = fromAddr;
        this.toAddr = toAddr;
        this.amount = amount;
    }
}

function hashTxn (txn) {
    txnStr = (txn.fromAddr + txn.toAddr + txn.amount).toString();
    return crypto.createHash('sha256').update(txnStr).digest('hex');
}

function sign(person, str){
    sigB64 = person.keyPair.sign(str, 'base64');
    return sigB64.toDER('hex');
}




const alice = new Person(ec.genKeyPair());
const bob = new Person(ec.genKeyPair());
const eve = new Person(ec.genKeyPair());



// alice creates a transaction and a signs transaction hash
const tx1 = new Txn(alice.publicKey, bob.publicKey, '125');
const hashedTxn1 = hashTxn(tx1);
signedTxn1 = sign(alice, hashedTxn1);

console.log("\nmeet alice")
console.log("Alice's public key: ", alice.publicKey);
console.log("\nAlice creates a transation. She sends an amount to Bob");
console.log(tx1);
console.log("txn1 hash: ", hashTxn(tx1));
console.log("\nAlice signs txn ", hashTxn(tx1));
console.log("signedTxn1: ", signedTxn1);


// bob verifies the signed txn using alice's public key
// gets the transaction hash himself
let bobGotTxnHash = hashTxn(tx1);

console.log("\nmeet Bob")
console.log("Bob's public key: ", bob.publicKey);
console.log("\nBob wants to verify the transaction from Alice");
console.log("Bob gets the hash of the transaction himself")
console.log("txn1 hash: ", hashTxn(tx1));

// alices public key will decrypt the signTxn that was signed/encrypted with her private key
// so the signedTxn decrypted with her public key (wallet address) should be the same as the transaction hash
console.log("Bob uses Alice's public key/wallet address to decrypt the signed transaction hash")
console.log("and compare it to the hash he got before")
let publicKey = ec.keyFromPublic(tx1.fromAddr, 'hex');  // if alice sent the transaction it would come from her wallet which is also her public key

console.log("are the two hashes the same?");
console.log("verify tx1: ", publicKey.verify(bobGotTxnHash, signedTxn1));
console.log("Bob is happy");


// eve tampers with the transaction
console.log("\nEve tampers with transaction");
tx1.amount = '42';
console.log(tx1);
console.log("txn1 hash: ", hashTxn(tx1));


// bob verifies the signed txn using alice's public key
// get the transaction hash himself
console.log("\nBob wants to verify the transaction so he gets the hash again")
console.log("txn1 hash: ", hashTxn(tx1));
bobTxnHash = hashTxn(tx1);

// alices public key will decrypt the signTxn that was signed/encrypted with her private key
// so the signedTxn decrypted with her public key (wallet address) should be the same as the hashed transaction
console.log("are the two hashes the same?");
console.log("verify tx1: ", alice.keyPair.verify(bobTxnHash, signedTxn1));
console.log("Nope. Bob know's something is up");
