// #!/usr/bin/env node
// const { program } = require('commander');
const { Command } = require('commander');
const program = new Command();
const { init, getAccountBalance, } = require('./index');

program
  .name('konfidio')
  .version('1.0.0')
  // .alias('v')
  .description('konfidio Blockchain Platform')

// program
//   .help(`
//     Function                              Alias        Description
//     konfidio-cli version                    v             To check the version of the konfidio-cli
//     konfidio-cli init                       i             To initialize blockchain in the database
//     konfidio-cli getAccountBalance [INDEX]  g             To find a retrieve specific account from the database
//   `)

// Initialize Command
program
  .command('init <balances> <transactions> <blockSize>')
  .alias('i')
  .description('Initialize blockchain')
  .action(async (balances, transactions, blockSize) => {
    init(balances, transactions, blockSize);
  });


// Get Balance Command
program
  .command('getAccountBalance <index>')
  .alias('g')
  .description('Get account balance')
  .action(index => getAccountBalance(index));

program.parse(process.argv);