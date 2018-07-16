////// Class reptition //////

// 1 - bank account
// 2 - game
// 3 - good

let person = {
   firstname:"Damir",
   lastname: "Lucic"
};

let BankAccount = {
   iban: "123456789",
   bic: "ABC123",
   currency: "EUR",
   type: "giro",
   balance: 1000000,
   onlinebanking: false,
   credit: 2500,
   owner: "Dmair"
};

class BankAccount {
   constructor(iban, bic, currency, owner) {  // mother constructor
        this.iban = iban;
        this.bic = bic;
        this.currency = currency;
        this.owner = owner;  
   }
}


class SavingsAccount extends BankAccount{
    constructor(iban, bic, currency, owner, withdrawalPeriod) {
        super(iban, bic, currency, owner);
        this.withdrawalPeriod = withdrawalPeriod
    }
    
    withdraw() {
        if(this.withdrawalPeriod > 6) {
            //...
        }
    }
}

class GiroAccount extends BankAccount {
    constructor(iban, bic, currency, owner, balance, negativeInterest = 0.17) {
        super(iban, bic, currency, owner);
        this.balance = balance;
        this.negativeInterest = 0.17
    }
}

class CreditAccount extends BankAccount {
    constructor(iban, bic, currency, owner, credit) {
        super(iban, bic, currency, owner, credit);
    }
    creditAllowed() {
        if(this.credit) {
            //...
        }
    }
}










