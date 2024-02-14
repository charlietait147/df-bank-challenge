
class Account {
    #id;
    #balance;
    #statementList = [];
    #minimumLimit;
    #hasOverDraft = false;

    constructor(id = "", balance = 0, minimumLimit = 0, hasOverDraft = false) {
        this.#id = id;
        this.#balance = balance;
        this.#minimumLimit = minimumLimit;
        this.#hasOverDraft = hasOverDraft;
    }

    updateStatementList(date, credit, debit) {
        this.#statementList.unshift({
            date,
            credit,
            debit,
            balance: this.#balance
        });
    }

    getId() {
        return this.#id;
    }

    getBalance() {
        return this.#balance;
    }

    getMinimumLimit() {
        return this.#minimumLimit;
    }

    depositFunds(date, credit) {
        this.#balance += credit;
        this.updateStatementList(date, credit, " ");

    }

    withdrawFunds(date, debit) {
        if (this.#balance - debit >= this.#minimumLimit) {
            this.#balance -= debit;
        }
        this.updateStatementList(date, " ", debit);
    }

    getStatementList() {
        return this.#statementList;
    }

    withdrawOverDraft(amount) { 
        if (this.#hasOverDraft) { //If the account has an overdraft, withdraw the amount
            this.#balance -= amount;

            if (this.#balance < this.#minimumLimit) { //If the balance is less than the minimum limit, set the balance to the minimum limit
                this.#balance = this.#minimumLimit;
            }
        }

    }
}

export default Account;


