import Account from "./Account.js";

class OverDraftAccount extends Account {
    #overdraft;

    constructor(id = "", balance = 0, minimumLimit,  hasOverDraft = true) {
        super(id, balance, minimumLimit, hasOverDraft);
    }

    getOverDraft() {
        return this.#overdraft;
    }
}

export default OverDraftAccount;
