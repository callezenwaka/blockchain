'use strict';

/**
 * [START VERIFY TRANSACTION]
 * @param {number} balance account number.
 * @param {object} transaction transaction object.
 * @return {boolean} boolean.
 * Define verify transaction.
 */
const verifyTransaction = async (balance, transaction) => {
  try {
    // TODO: verify transactions
    if (!transaction || transaction.length != 3) {
      throw new Error("Invalid transaction");
    }
    // console.info(balance, transaction);
    if(balance > transaction[2]) return true;
    else return false;
  } catch (error) {
    console.info(error);
    return console.info('Internal Error!');
  }
};
// [END VERIFY TRANSACTION]


const addBlock = async (blockTransactions, block) => {
  try {
    // TODO: verify transactions
    // console.info(blockTransactions);
    console.info(block);

  } catch (error) {
    console.info(error);
    return console.info('Internal Error!');
  }
}

// Export All Methods
module.exports = {
  verifyTransaction,
  addBlock,
}