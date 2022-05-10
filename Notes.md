node konfidio.js init <balances> <transactions> <blockSize>

node

import konfidio from './konfidio'; (******* "type": module, ******)

let konfidio = require('./konfidio');

konfidio.init([300,250,500], [ [0,1,50], [1,2,80], [2,0,450] ], 2);

konfidio.init([100,100,500], [ [0,1,50], [1,2,80], [2,0,150], [1,0,50], [2,1,80] ], 2);

konfidio.getAccountBalance(0);