import OverDraftAccount from "../src/OverDraftAccount.js";

describe('OverDraftAccount tests', () => {
    it(`should withdraw an extra 200 from the balance with the overdraft facility`, () => {
        // Arrange
        const testOverDraftAccount = new OverDraftAccount("1", 0, -300);
        const expectedBalance = -200;

        // Act
        testOverDraftAccount.withdrawOverDraft(200);

        // Assert
        expect(testOverDraftAccount.getBalance()).toBe(expectedBalance);
    });

    it(`should not withdraw any more than the overdraft limit of -300`, () => {
        // Arrange
        const testOverDraftAccount = new OverDraftAccount("1", 0, -300);
        const expectedBalance = -300;

        // Act
        testOverDraftAccount.withdrawOverDraft(400);

        // Assert
        expect(testOverDraftAccount.getBalance()).toBe(expectedBalance);
    });
});
