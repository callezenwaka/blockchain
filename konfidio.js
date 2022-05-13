const sha1 = require('sha1');

/**
 * [START KONFIDIO CONSTRUCTOR]
 * Constructor function
 */
function Konfidio() {
	this.blocks = [];
	this.balances = [];
  this.blockSize = null;
	this.transactions = [];
	this.addBlock(10, '0000000000000000000000000000000000000000', '0000000000000000000000000000000000000000');
};
// [END KONFIDIO CONSTRUCTOR]

/**
 * [START VERIFY TRANSACTION]
 * @param { object } balance.
 * @param { object } transaction.
 * @return { boolean } boolean.
 * Verify transaction
 */
Konfidio.prototype.verifyTransaction = function(balance, transaction) {
  try {
    // TODO: verify transaction validity
    if (!transaction || transaction.length != 3) {
      throw new Error("Invalid transaction");
    }
    if(balance > transaction[2]) return true;
    else return false;
  } catch (error) {
    console.info(error);
    return error;
  }
};
// [END VERIFY TRANSACTION]

/**
 * [START BLOCK HASH]
 * @param { string } prevBlockHash.
 * @param { object } blockTransactions.
 * @param { number } nonce.
 * @return { string } hash.
 * Block hash
 */
Konfidio.prototype.getHash = function(prevBlockHash, blockTransactions, nonce) {
  try {
    // TODO: get hash string
    const dataString = prevBlockHash + nonce.toString() + JSON.stringify(blockTransactions);
    const hash = sha1(dataString);
    return hash;
  } catch (error) {
    console.info(error);
    return error;
  }
};
// [END BLOCK HASH]

/**
 * [START GET NONCE]
 * @param { string } prevBlockHash.
 * @param { object } blockTransactions.
 * @return { number } hash.
 * Nonce number
 */
Konfidio.prototype.getNonce = function(prevBlockHash, blockTransactions) {
  try {
    // TODO: get nonce number
    let nonce = 0;
    let hash = this.getHash(prevBlockHash, blockTransactions, nonce);
    while (hash.substring(0, 4) !== '1234') {
      nonce++;
      hash = this.getHash(prevBlockHash, blockTransactions, nonce);
    }

    return nonce;
  } catch (error) {
    console.info(error);
    return error;
  }
};
// [END GET NONCE]

/**
 * [START ADD BLOCK]
 * @param { number } nonce.
 * @param { string } prevBlockHash.
 * @param { string } hash.
 * @return { object } block.
 * Add block
 */
Konfidio.prototype.addBlock = function(nonce, prevBlockHash, hash) {
  try {
    const block = {
      index: this.blocks.length + 1,
      timestamp: Date.now(),
      transactions: this.transactions,
      nonce: nonce,
      hash: hash,
      prevBlockHash: prevBlockHash
    };
    this.transactions = [];
    this.blocks.push(block);
    console.info(this.blocks[this.blocks.length-1].transactions.length);

    return block;
  } catch (error) {
    console.info(error);
    return error;
  }
};
// [END ADD BLOCK]

/**
 * [START INITIALIZE BLOCKCHAIN]
 * @param { object } balances.
 * @param { object } transactions.
 * @param { number } blockSize.
 * @return { string } string.
 * Initialize blockchain
 */
Konfidio.prototype.init = function(balances, transactions, blockSize) {
  try {
		// TODO: initialize blockchain with parameters
    if (!balances || !transactions || !blockSize) 
      return console.info('Initialization failed!');
    
    this.balances.push(...balances);
    this.blockSize = blockSize;
    for (let i = 0; i < transactions.length; i++) {
      let isValid = this.verifyTransaction(this.balances[transactions[i][0]], transactions[i]);
      if (!isValid) {
        continue;
      }
      this.balances[transactions[i][0]] -= transactions[i][2];
      this.balances[transactions[i][1]] += transactions[i][2];
      this.transactions.push(transactions[i]);

      if(this.transactions.length == blockSize) {
        const prevBlockHash = this.blocks[this.blocks.length - 1].hash;
        const nonce = this.getNonce(prevBlockHash, this.transactions);
        const hash = this.getHash(prevBlockHash, this.transactions, nonce);
        const block = this.addBlock(nonce, prevBlockHash, hash);
        // this.transactions = [];
        // console.info(`Block ${this.blocks.length - 1} added:\n${block}`);
      }
    };

    return 'Initialization Complete!';
  } catch (error) {
    console.info(error);
    return error;
  }
};
// [END INITIALIZE BLOCKCHAIN]

/**
 * [START GET ACCOUNT BALANCE]
 * @param { number } index.
 * @return { number } balance.
 * Account balance
 */
Konfidio.prototype.getAccountBalance = function(index) {
  try {
		// TODO: get account balance for a given index
    if (index < 0 || index >= this.balances.length)
      return console.info('Invalid index!');

    const balance = this.balances[index];

    if (!balance) return null;
    else return balance;
  } catch (error) {
    console.info(error);
    return error;
  }
};
// [END GET ACCOUNT BALANCE]

module.exports = Konfidio;