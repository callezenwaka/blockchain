const sha1 = require('sha1');

function Konfidio() {
	this.blocks = [];
	this.balances = [];
  this.blockSize = null;
	this.transactions = [];
	this.addBlock(10, '0000000000000000000000000000000000000000', '0000000000000000000000000000000000000000');
};

Konfidio.prototype.verifyTransaction = function(balance, transaction) {
  try {
    // TODO: verify transactions
    if (!transaction || transaction.length != 3) {
      throw new Error("Invalid transaction");
    }
    if(balance > transaction[2]) return true;
    else return false;
  } catch (error) {
    console.info(error);
    return console.info('Internal Error!');
  }
};

Konfidio.prototype.hashBlock = function(prevBlockHash, blockTransactions, nonce) {
	const dataString = prevBlockHash + nonce.toString() + JSON.stringify(blockTransactions);
	const hash = sha1(dataString);
	return hash;
};

Konfidio.prototype.getNonce = function(prevBlockHash, blockTransactions) {
	let nonce = 0;
	let hash = this.hashBlock(prevBlockHash, blockTransactions, nonce);
	while (hash.substring(0, 4) !== '1234') {
		nonce++;
		hash = this.hashBlock(prevBlockHash, blockTransactions, nonce);
	}

	return nonce;
};

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

    return block;
  } catch (error) {
    console.info(error);
    return console.info('Internal Error!');
  }
};

// Initialize Blockchain
Konfidio.prototype.init = async function(balances, transactions, blockSize) {
  try {
		// TODO: initialize blockchain with parameters
    if (!balances || !transactions || !blockSize) 
      return console.info('Initialization failed!');
    
    this.balances.push(...balances);
    this.blockSize = blockSize;
    for (let i = 0; i < transactions.length; i++) {
      let isValid = this.verifyTransaction(this.balances[transactions[i][0]], transactions[i]);
      console.info(isValid);
      if (!isValid) {
      // if (this.balances[transactions[i][0]] > transactions[i][2]) {
        continue;
      }
      this.balances[transactions[i][0]] -= transactions[i][2];
      this.balances[transactions[i][1]] += transactions[i][2];
      this.transactions.push(transactions[i]);

      if(this.transactions.length == blockSize) {
        const prevBlockHash = this.blocks[this.blocks.length - 1].hash;
        const nonce = this.getNonce(prevBlockHash, this.transactions);
        const hash = this.hashBlock(prevBlockHash, this.transactions, nonce);
        const block = this.addBlock(nonce, prevBlockHash, hash);
        this.transactions = [];
        console.info(`Block ${this.blocks.length - 1} added:\n${block}`);
      }
    };

    return console.info('Initialization succesful!');
  } catch (error) {
    console.info(error);
    return console.info('Internal Server Error!');
  }
};

// Get Account Balance
Konfidio.prototype.getAccountBalance = function(index) {
  try {
		// TODO: get account balance for a given index
    if (index < 0 || index >= this.balances.length)
      return console.info('Invalid index!');

    const balance = this.balances[index];

    if (!balance) return console.info(null);
    else return console.info(balance);
  } catch (error) {
    console.info(error);
    return console.info('Internal Error!');
  }
};

module.exports = Konfidio;