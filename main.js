const SHA256 = require('crypto-js/sha256');

class Block
{
    constructor(index, timestamp, data, previousHash = '')
    {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash()
    {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain
{
    constructor()
    {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock()
    {
        return new Block(0, "20/11/2020", "Genesis block", "0");
    }

    getLatestBlock()
    {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock)
    {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

let eduRecord = new Blockchain();
eduRecord.addBlock(new Block(1, "10/2/2020", {S_Id: 1, name: "Miraj", CGPA: 3.90}));
eduRecord.addBlock(new Block(2, "10/2/2020", {S_Id: 2, name: "Ashif", CGPA: 4.00}));
eduRecord.addBlock(new Block(3, "10/2/2020", {S_Id: 3, name: "Ahmed", CGPA: 3.76}));


console.log(JSON.stringify(eduRecord, null, 4));






















