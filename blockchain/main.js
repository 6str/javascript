const { min } = require('bn.js');
const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


const keyAddr1 = ec.keyFromPrivate('910b3aa02e84d3ffc0375b121fb845ef3250c7f84204d6a5a2e44ddaa85af405');
const walletAddr1 = keyAddr1.getPublic('hex');



function tests1() {
    console.log(JSON.stringify(mintCoin, null, 4));
    console.log(mintCoin.isChainValid());
    
    alteredBlock = mintCoin.chain[1];
    /*  you can alter the last block and reset its hash and the chain test would return valid
        alteredBlock = mintCoin.getLatestBlock(); 
    */

    console.log(alteredBlock);  // block before

    // alteredBlock.previousHash = "alteredHash";

    alteredBlock.data = "amount: 180";
    alteredBlock.hash = alteredBlock.calculateHash();

    console.log(alteredBlock);  // block after
    console.log(mintCoin.isChainValid());
 

}

function tests2() {

    function nowISO() {
        return new Date(Date.now()).toISOString();
    }
    
    mintCoin.addBlock(new Block(nowISO(), {amount: 4 }));
    mintCoin.addBlock(new Block(nowISO(), {amount: 16}));
    mintCoin.addBlock(new Block(nowISO(), {amount: 42}));
    mintCoin.addBlock(new Block(nowISO(), {amount: 118}));

    console.log(JSON.stringify(mintCoin, null, 4));
}

function tests3() {
    let mintCoin = new Blockchain(4);

    mintCoin.createTransaction(new Transaction('addr1', 'addr2', 100));
    mintCoin.createTransaction(new Transaction('addr2', 'addr1', 10));
    mintCoin.createTransaction(new Transaction('addr3', 'addr2', 11));


    addr = "xyzMiner"
    mintCoin.minePendingTransactions(addr);
    console.log(`\nBalance of ${addr} is, `, mintCoin.getBalanceOfAddress(addr));  // miner's rewards still a pending txn

    addr = "addr1"
    console.log(`\nBalance of ${addr} is, `, mintCoin.getBalanceOfAddress(addr));

    addr = "addr2"
    console.log(`\nBalance of ${addr} is, `, mintCoin.getBalanceOfAddress(addr));

    addr = "addr3"
    console.log(`\nBalance of ${addr} is, `, mintCoin.getBalanceOfAddress(addr));

    addr = "xyzMiner"
    mintCoin.minePendingTransactions(addr);
    console.log(`\nBalance of ${addr} is, `, mintCoin.getBalanceOfAddress(addr));
}



let mintCoin = new Blockchain(4);
const txn1 = new Transaction(walletAddr1,'placeholder', 10);
txn1.signTransaction(keyAddr1);
mintCoin.addTransaction(txn1);

console.log("mining ...")
mintCoin.minePendingTransactions(walletAddr1);

addr = walletAddr1;
console.log(`\nBalance of ${addr} is, `, mintCoin.getBalanceOfAddress(addr));

console.log("chain is valid: ", mintCoin.isChainValid());

console.log("\tamper with mined block 1 txn");
mintCoin.chain[1].transactions[0].amount = 1;

console.log("chain is valid: ", mintCoin.isChainValid());

