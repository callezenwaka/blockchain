'use strict';

/**
 * [START VERIFY TRANSACTION]
 * Define create wallet middleware.
 */
const verifyTransaction = async (balance, transaction) => {
  try {
    // TODO: verify transactions
    if (!transaction || transaction.length != 3) {
      throw new Error("Invalid transaction");
    }
    console.info(balance, transaction);
    if(balance > transaction[2]) return true;
    else return false;
  } catch (error) {
    console.info(error);
    return console.info('Internal Error!');
  }
};
// [END VERIFY TRANSACTION]

// Export All Methods
module.exports = {
  verifyTransaction,
}