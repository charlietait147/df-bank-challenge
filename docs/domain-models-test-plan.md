# Domain Models and Test Plan

**BENEFITS OF SOFTWARE**


Benefits of this software to the client/business:

- It is efficient. The application streamlines the banking process by providing a simple but intuitive interface for users to manage their bank accounts which can also provide a positive banking experience.

- As user's data like their balance and transaction history is private, this ensures that there is greater security over their data being leaked.

- As this software automates several banking operations, it reduces the need for any manual intervention, which in turn can save resources for the business.

- This type of application is scalable. It can be designed accomodate the growth of the company and further adapt to market changes.


Benefits of this software to the end user:

- It is convenient for users to use and access in their own home, instead of visiting a physical branch.

- There is a clear account statement that user's can print to better manage their finances and track their spending.

- As users can manage their account deposits, withdraws and available balance, they have more control over their finances.

- As the application allows for an overdraft facility on a per-account basis, it provides some flexibility for users who may require access to some additional funds beyond their balance.

 

**USER STORIES**

![Screenshot](https://drive.google.com/file/d/15ZX8FfNChsXtf7ka8GFOmR1fptpK-KlL/view?usp=drive_link)

**DOMAIN MODELS**

1. As a user, I want to access my account so that I can see my balance.

| Objects | Properties    | Messages        | Output        |   |
|---------|---------------|-----------------|---------------|---|
| Account | #id @String   | getId()         | #id @String   |   |
|         | #balance @int | getBalance()    | #balance @int |   |
|         |               |                 |               |   |

2. As a user, I want to deposit funds into my account so that I can save money

| Objects | Properties               | Messages                                                   | Output       |   |
|---------|--------------------------|------------------------------------------------------------|--------------|---|
| Account | transaction_date @String | depositFunds(transaction_date @String, depositAmount @int) | @int balance |   |
|         | credit @int              |                                                            |              |   |
|         | @balance @int            |                                                            |              |   |

3. As a user, I want to withdraw funds from my account in order to spend the funds.

| Objects | Properties             | Messages                                             | Output        |   |
|---------|------------------------|------------------------------------------------------|---------------|---|
| Account | #debit @int            | withdrawFunds(#withdrawalAmount @int, #date @String) | #balance @int |   |
|         | #date @String          |                                                      |               |   |
|         |                        |                                                      |               |   |

4. As a user, I want to print my account statement, to keep track of my money.

| Objects                 | Properties | Messages                     | Output                    |   |
|-------------------------|------------|------------------------------|---------------------------|---|
| AccountStatementPrinter |            | static printAccountDetails() | #transaction_date @String |   |
|                         |            |                              | #credit @int              |   |
|                         |            |                              | #debit @int               |   |
|                         |            |                              | #balance @int             |   |

5. As a user, I want to to be able to withdraw my overdraft, in case I need emergency funds.

| Objects          | Properties                | Messages            | Output       |   |
|------------------|---------------------------|---------------------|--------------|---|
| OverDraftAccount | #balance @int             | withdrawOverdraft() | @int balance |   |
|                  | #id @String               |                     |              |   |
|                  | #transaction_date @String |                     |              |   |
|                  | #debit @int               |                     |              |   |
|                  | #credit @int              |                     |              |   |
|                  | #overdraft @int           |                     |              |   |











- 
