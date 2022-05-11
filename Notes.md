# Konfidio Blockchain Backend Task

Task
Given two arrays representing initialBalances and transactions and an integer blockSize, create a blockchain that includes all valid pending transactions in the order
in which they are given. Provide functionality to get the balance of a specific account on the blockchain

## Interface
1. init(initialBalances, transactions, blockSize) => A function that initializes the blockchain.
2. getAccountBalance(accountIndex) => returns the account balance of a specific account.

### Activate Node REPL
```
node
```

### Initialize Constructor
```
const Konfidio = require('./konfidio');
```

### Instantiate Object
```
const konfidio = new Konfidio();
```

### Initialize Object
```
konfidio.init(balances, transactions, blockSize);
```

### Retrieve account balance
```
konfidio.getAccountBalance(index);
```

### Run Test
```
npm test ./konfidio.test.js
```