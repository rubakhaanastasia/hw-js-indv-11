//1-
const bankAccount = {
  owner: "anastasia",
  accountNo: 5492,
  balance: 1234,
  deposit() {
    this.balance += amount;
    return this.balance;
  },
  withdraw() {
    this.balance -= amount;
    return this.balance;
  },
};

//2.
const weather = {
  temperature: -22,
  interest: 80,
  courseWind: 10,
  lowerZero() {
    return this.temperature < 0;
  },
  probingTemperature() {
    if (this.lowerZero()) {
      console.log("температура сягнула нижче 0");
    } else {
      console.log("температура рівна 0 або вище за 0");
    }
  },
};
weather.probingTemperature();

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
  rating: 9.1,
  highRating() {
    if (this.score > 8) {
      return true;
    } else {
      return false;
    }
  },
};
console.log(movie.highRating());
