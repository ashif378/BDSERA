const {Blockchain, transactions} = require('./Blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('c6079bf168140547aa9a93eef79933087d939ed1c23080a35484aa605431b90b');
const myWalletAddress = myKey.getPublic('hex');


let eduRecord = new Blockchain();

const tx1 = new transactions(myWalletAddress, 'to public key', 10);
tx1.signTransaction(myKey);
eduRecord.addTransaction(tx1);


console.log('\nStarting the miner...');
eduRecord.minePendingTransactions(myWalletAddress);

console.log('Miner Balance: ' + eduRecord.getBalanceAddress(myWalletAddress));

//eduRecord.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?  ::   ', eduRecord.isChainValid());

//console.log(JSON.stringify(eduRecord, null, 4));










