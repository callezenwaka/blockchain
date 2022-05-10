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
node konfidio.test.js
```

konfidio.init([300,250,500], [ [0,1,50], [1,2,80], [2,0,450] ], 2);

konfidio.init([100,100,500], [ [0,1,50], [1,2,80], [2,0,150], [1,0,50], [2,1,80] ], 2);