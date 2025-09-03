class BankAccount {
  #balance; // private

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount("Sara", 2000);
acc.deposit(1000);
console.log(acc.getBalance()); // 3000
// console.log(acc.#balance);     // ❌ Error (private field)
