const { expect } = require('chai'); 
const Konfidio = require('./konfidio');

describe("Konfidio Blockchain.", function () {
  const balances = [200, 250, 500];
  const transactions = [[0, 1, 50], [1, 2, 80], [1, 0, 100], [1, 2, 600], [2, 0, 150], [1, 0, 50], [2, 1, 80]];
  const blockSize = 2;
  const index = 1;
  const pendingTransactions = [[0,1,50], [1,2,80]];
  const prevBlockHash = '548bc92f827bd41ad97243cc3ca4b765f8c68a2c';

  before(async () => {
    this.konfidio = new Konfidio();
  });

  it("Should return a boolean for transaction validity.", async () => {
    const result = this.konfidio.verifyTransaction(balances[index], transactions[index]);

    expect(result).to.be.a('boolean');
  });

  it("Should initialize blockchain.", async () => {
    const expectedResult = 'Initialization Complete';
    const result = this.konfidio.init(balances, transactions, blockSize);

    expect(result).to.include(expectedResult);
    expect(this.konfidio.balances).to.be.an('array').that.is.not.empty;
  });

  it("Should return a hashed string of length 40.", async () => {
    const result = this.konfidio.hashBlock(prevBlockHash, pendingTransactions, 10);

    expect(result).to.be.a('string');
    expect(result).to.have.lengthOf(40);
  });

  it("Should return a nonce random number.", async () => {
    const result = this.konfidio.getNonce(prevBlockHash, pendingTransactions);

    expect(result).to.be.a('number');
  });

  it("Should return an account balance.", async () => {
    const result = this.konfidio.getAccountBalance(index);

    expect(result).to.be.a('number');
  });
});
