import Account from "../src/Account.js";

describe('Account tests', () => {
    it("should create a new instance of the Account class", () => {
        //Act
        const testAccount = new Account();
        //Assert
        expect(testAccount).toBeInstanceOf(Account)
    });

    it("should get the id and balance of the Account class", () => {
        //Arrange
        const testAccount = new Account("1");
        //Act
        const testAccountId = testAccount.getId();
        const testAccountBalance = testAccount.getBalance();
        //Assert
        expect(testAccountId).toBe("1");
        expect(testAccountBalance).toBe(0);
    });

    describe('depositFunds tests', () => {
        it("should deposit 1000 into the balance when depositFunds is called", () => {
            //Arrange
            const testAccount = new Account("1");
            const expectedValue = 1000; 
            //Act
            testAccount.depositFunds("10/01/20", 1000); //add 1000 to the account
            //Assert
            expect(testAccount.getBalance()).toBe(expectedValue); //Expect balance to now equal 1000
        })
    });

    describe('withdrawFunds tests', () => {
        it("should withdraw 500 from the balance when withdrawFunds is called", () => {
            //Arrange
            const testAccount = new Account("1", 1000); //set up account with 1000 balance
            const expectedValue = 500;
            //Act
            testAccount.withdrawFunds("10/01/20", 500); //withdraw 500 from the account
            //Assert
            expect(testAccount.getBalance()).toBe(expectedValue); //Expect balance to now equal 500
        })

        it("should not be able to withdraw funds if the amount is more than the balance", () => {
            //Arrange
            const testAccount = new Account("1", 20); //set up account with 20 balance
            const expectedValue = 20; 
            //Act
            testAccount.withdrawFunds("12/01/20", 30); //withdraw 30 from account
            //Assert
            expect(testAccount.getBalance()).toBe(expectedValue); //This should fail so balance shouldn't change
        })
    })
})

  