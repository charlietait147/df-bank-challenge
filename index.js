import Account from "./src/Account.js";
import AccountStatementPrinter from "./src/AccountStatementPrinter.js"; // Import the AccountStatementPrinter class correctly
import chalk from "chalk";

const account = new Account("1"); //Create new account
console.log(`Account accessed: The current id is ${account.getId()} and the current balance is ${account.getBalance()}`); //Access account balance and id
account.depositFunds("10/01/2012",1000.00); //Deposit 1000 
console.log(chalk.green(`You deposited 1000`));
console.log(`Your new balance is ${account.getBalance()}`); //Retrieve the balance
account.depositFunds("13/01/2012",2000.00) //Deposit 2000
console.log(chalk.green(`You deposited 2000`));
console.log(`Your new balance is ${account.getBalance()}`); //Retrieve the balance
account.withdrawFunds("14/01/2012",500.00); //Withdraw 500
console.log(chalk.red(`You withdrew 500`));
console.log(`Your new balance is ${account.getBalance()}`);  //Retrieve the balance 
console.log("==================");
console.log(account.getStatementList()); //Print out the account statement for the previous transactions.
console.log("Your account statement:");
console.log(`date       || credit || debit  || balance`);
console.log(AccountStatementPrinter.printStatement(account)); // Print out the account statement for the previous transactions.

