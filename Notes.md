node konfidio.js init <balances> <transactions> <blockSize>

let konfidio = require('./konfidio');

konfidio.init([100,100,500],[[0,1,50],[1,2,80],[2,0,450]],2);

konfidio.getAccountBalance(0);