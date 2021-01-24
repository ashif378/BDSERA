const {Blockchain, transactions} = require('./Blockchain');

let eduRecord = new Blockchain();

eduRecord.createTransaction(new transactions('address1', 'address2', 100));
eduRecord.createTransaction(new transactions('address2', 'address1', 50));

console.log('\nStarting the miner...');
eduRecord.minePendingTransactions('MinerPublicKey');

console.log('Miner Reward: ' + eduRecord.getBalanceAddress('MinerPublicKey'));

console.log('\nStarting the miner again...');
eduRecord.minePendingTransactions('MinerPublicKey');

console.log('Miner Reward: ' + eduRecord.getBalanceAddress('MinerPublicKey'));


