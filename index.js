const { verifyTransaction } = require('./utils');
const { transactions, balances } = require('./database');

// Initialize Blockchain
const init = async (bal, tx, size) => {
  try {
		// TODO: initialize blockchain with parameters
    const _balances = JSON.parse(bal);
    const _transactions = JSON.parse(tx);
    const _blockSize = Number(size);
    if (!_balances || !_transactions || !_blockSize) 
      return console.info('Initialization failed!');

    (await balances).push(..._balances);
    blockSize = _blockSize;
    for (let i = 0; i < _transactions.length; i++) {
      let isValid = await verifyTransaction((await balances)[_transactions[i][0]], _transactions[i]);
      if (!isValid) {
        continue;
      }
      (await balances)[_transactions[i][0]] -= _transactions[i][2];
      (await balances)[_transactions[i][1]] += _transactions[i][2];
      (await transactions).push(_transactions[i]);
    }
    return console.info('New Customer Added');
  } catch (error) {
    console.info(error);
    return console.info('Internal Server Error!');
  }
}

// Get Account Balance
const getAccountBalance = async (index) => {
	try {
		// Todo: get account balance for a given index
    if (!index) return;
    const balance = (await balances[index]);

    if (!balance) return console.info(null);
    else return balance;
  } catch (error) {
		return console.info('Internal Server Error!');
	}
}

// Export All Methods
module.exports = {
  init,
  getAccountBalance,
}