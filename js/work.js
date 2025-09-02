//1-
const bankAccount = {
  owner: "anastasia",
  accountNo: 5492,
  balance: 1234,
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },
  withdraw(amount) {
    this.balance -= amount;
    return this.balance;
  },
};
console.log(bankAccount.deposit(355));
console.log(bankAccount.withdraw(29));

//2.
const weather = {
  temperature: -22,
  interest: 80,
  courseWind: 10,
  lowerZero() {
    if (this.temperature < 0) {
      console.log("температура сягнула нижче 0");
    }
  },
  probingTemperature() {
    if (this.lowerZero()) {
      return "температура сягнула нижче 0";
    } else {
      return "температура рівна 0 або вище за 0";
    }
  },
};
console.log(weather.probingTemperature());

//3.
const user = {
  name: "anastasia rubakha",
  email: "kjtmetntiksd@gmail.com",
  password: "kfdskfjsl",
  login(userInputEmail, userInputPassword) {
    return userInputEmail === this.email && userInputPassword === this.password;
  },
};
const emailCheck = "kjtmetntiksd@gmail.com";
const passwordCheck = "kfdskfjsl";
console.log(user.login(emailCheck, passwordCheck));

//4.
const movie = {
  title: "гіпотеза кохання",
  director: "алі гейзелвуд",
  year: 2020,
  rating: 7.1,
  highRating() {
    if (this.rating > 8) {
      return true;
    } else {
      return false;
    }
  },
};
console.log(movie.highRating());
