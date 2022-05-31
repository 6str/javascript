/*
*   a basic blockchain 1 - 4
*   https://www.youtube.com/watch?v=zVqczFZr124, https://www.youtube.com/watch?v=HneatE69814, 
*   https://www.youtube.com/watch?v=fRV6cGXVQ4I, https://www.youtube.com/watch?v=kWQ84S13-hw
*
*   angular front end : 
*   https://www.youtube.com/watch?v=AQV0WNpE_3g
*
*   github
*   https://github.com/Savjee/SavjeeCoin/tree/master/src

*   somone else
*   https://javascript.plainenglish.io/byob-build-your-own-blockchain-93ecfdc388ad

*/

const SHA256 = require("crypto-js/sha256");
const EC = require('elliptic').ec;


const ec = new EC('secp256k1');


class Transaction {
    constructor(fromAddress, toAddress, amount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }

    calculateHash() {
        return SHA256(this.fromAddress + this.toAddress + this.amount).toString();
    }

    signTransaction(signingKey) {
        if(signingKey.getPublic('hex') !== this.fromAddress) {
            throw new Error("Signing key does not belong to this address")
        }

        const hashTxn = this.calculateHash();
        const sig = signingKey.sign(hashTxn, 'base64');
        this.signature = sig.toDER('hex');
    }

    isValid() {
        if(this.fromAddress === null) return true;  // assume can only be a mining reward txn

        if(!this.signature || this.signature.length === 0) throw new Error('Transaction has no signature')
        
        const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');
        return publicKey.verify(this.calculateHash(), this.signature);  // verify that the hash has been signed by the adress' private key
    }
}


class Block {
    
    constructor(timestamp, transactions, previousHash = '') {
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.hash = this.calculateHash();
        this.salt = Math.random();
        this.nonce = 0;
    }

    calculateHash() {
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.data) + this.salt + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while(this.hash.substring(0, difficulty) !== '0'.repeat(difficulty)) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
    }

    // checks all of the block's txns are valid
    hasValidTransactions() {
        for(const txn of this.transactions){
            if(!txn.isValid()){
                return false;
            }
        }
        return true;
    }

}


class Blockchain {
    
    constructor(difficulty = 0) {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = difficulty;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock () {                                    // # makes it a private method
        let timestamp = new Date(Date.now()).toISOString();
        return new Block(timestamp, "Genesis block", null);
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(miningRewardAddress) {
    
        process.stdout.write("mining block ... ")

        const rewardTxn = new Transaction(null, miningRewardAddress, this.miningReward);
        this.pendingTransactions.push(rewardTxn);

        let block = new Block(new Date(Date.now()).toISOString(), this.pendingTransactions, this.getLatestBlock().hash);
        block.mineBlock(this.difficulty);

        this.chain.push(block);

        process.stdout.write("done/n")

        this.pendingTransactions = [];
    }

    addTransaction(transaction){

        if(!transaction.fromAddress || !transaction.toAddress) {
            throw new Error("Transaction must include a from and to address");
        }

        if(!transaction.isValid()){
            throw new Error("Transaction not valid");
        }

        this.pendingTransactions.push(transaction);
        console.log("added pending txn: ", {transaction});
    }

    getBalanceOfAddress(address){
        let balance = 0;
        for(const block of this.chain){
            for(const txn of block.transactions){
                if(address === txn.toAddress){
                    balance += txn.amount;
                } else if (address === txn.fromAddress){
                    balance -= txn.amount;
                }
            }
        }
        return balance;
    }



    isChainValid() {
        
        for(let i = 1; i < this.chain.length; i++) {
        
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if(!currentBlock.hasValidTransactions()) {   // check all transactions valid
                return false; 
            }

            if(currentBlock.hash != currentBlock.calculateHash()) {
                console.log("Block %d's hash is wrong", i);
                console.log(currentBlock.hash);
                console.log(currentBlock.calculateHash());
                return false;
            } else if(currentBlock.previousHash !== previousBlock.hash) {
                console.log("Block %d's previousHash value doesn't match the hash of the previous block", i);
                return false;
            }
        }
        return true;
    }
}


module.exports.Blockchain = Blockchain;
module.exports.Transaction = Transaction;
