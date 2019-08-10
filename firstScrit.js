'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: "time",
    expenses: {},
    income: [],
    savings: false
};

let firstQuestion1 = prompt("Введите обязательную статью расходов в этом месяце"),
    secondQuestion1 = prompt("Во сколько обойдется?"),
    firstQuestion2 = prompt("Введите обязательную статью расходов в этом месяце"),
    secondQuestion2 = prompt("Во сколько обойдется?");

    console.log(appData.expenses.firstQuestion1 = secondQuestion1);
    appData.expenses.firstQuestion2 = secondQuestion2;

   
    alert(appData.budget / 30);