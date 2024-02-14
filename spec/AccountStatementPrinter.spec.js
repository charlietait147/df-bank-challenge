import AccountStatementPrinter from "../src/AccountStatementPrinter.js";

describe("AccountStatementPrinter", () => {
    //Arrange
    let accountStatementPrinter; //initialise a mock account statement printer
    let account; //initialise a mock account

    beforeEach(() => {
        accountStatementPrinter = new AccountStatementPrinter(); //declare the mock account statement printer
        account = { //declare the mock statementlist array of an object
            getStatementList: jasmine.createSpy("getStatementList").and.returnValue([
                { date: "2022-01-01", credit: 1000, debit: "", balance: 1000 }
            ]),
        };
    });

    it("should print the account statement", () => {
        //Arrange
        const logSpy = spyOn(console, "log"); //spy on the console log inside the function

        //Act
        AccountStatementPrinter.printStatement(account); //print the account

        //Assert
        expect(logSpy).toHaveBeenCalledWith("2022-01-01 || 1000   ||        || 1000.00");
    });
});