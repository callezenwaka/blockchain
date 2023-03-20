# Blockchain Task with JavaScript Class

Task
You have three parameters, two arrays representing initialBalances and transactions and a third integer representing the blockSize. Create a blockchain that includes all valid pending transactions in the order in which they are given. Provide functionality to get the balance of a specific account on the blockchain.

## Interface
1. init(initialBalances, transactions, blockSize) => A function that initializes the blockchain.
2. getAccountBalance(accountIndex) => returns the account balance of a specific account.

### Activate Node REPL
```
node
```

### Initialize Constructor
```
const Blockchain = require('./blockchain');
```

### Instantiate Object
```
const blockchain = new Blockchain();
```

### Initialize Object
```
blockchain.init(balances, transactions, blockSize);
```

### Retrieve account balance
```
blockchain.getAccountBalance(index);
```

### Run Test
```
npm test ./blockchain.test.js
```