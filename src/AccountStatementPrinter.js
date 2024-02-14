class AccountStatementPrinter {
    static printStatement(account) {
        const statementList = account.getStatementList();

        statementList.forEach((statement) => {
            const { date, credit, debit, balance } = statement;

            console.log(`${date.padEnd(6)} || ${credit.toString().padEnd(6)} || ${debit.toString().padEnd(6)} || ${balance.toFixed(2)}`);
        }); 
    }
    }
export default AccountStatementPrinter


