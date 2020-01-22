// let money, time;

// function start() {
//   money = +prompt("Ваш бюджет на месяц", '');
//   time = prompt("Введите дату в формате YYYY-MM-DD", '');

//   while(isNaN(money) || money == "" || money == null) {
//     money = +prompt("Ваш бюджет на месяц", '');
//   }
// };

// start();

// let appData= {
//   budget: money,
//   expenses: {},
//   optionalExpenses: {},
//   income: [],
//   timeData: time,
//   savings: true,
//   chooseExpenses: function() {
//     for (let i = 0; i<2; i++) {
//       let a = prompt("Введите обязательную статью разходов в этом месяце", '');
//       let b = prompt("Во сколько обойдется?", '');

//       if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a!= '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//       } else {
//         i = i-1;
//       }
//     };
//   },
//   detectDayBudget: function() {
//     appData.moneyPerDay = (appData.budget / 30).toFixed();
//     alert("Ежедневный бюджет: " + appData.moneyPerDay);
//   },
//   detectLevel: function() {
//     if (appData.moneyPerDay < 100) {
//       console.log("Минимальный уровень достатка");
//     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//       console.log("Средний уровень достатка");
//     } else if (appData.moneyPerDay > 2000) {
//       console.log("Высокий уровень достатка");
//     } else {
//       console.log("Произошла ошибка");
//     }
//   },
//   checkSavings: function() {
//     if (appData.savings == true) {
//       let save = +prompt("Какова сумма накоплений?", '');
//       let percent = +prompt("Под какой процент?", '');

//       appData.monthIncome = save/100/12*percent;
//       alert("Доход с вашего дипозита: " + appData.monthIncome);
//     }
//   },
//   chooseOptExpenses: function() {
//     let numberExp = 1;
//     for (i=0; i<3; i++) {
//       let optExp = prompt("Статья необязательных расходов?", '');

//       appData.optionalExpenses[numberExp++] = optExp;
//     }
//   },
//   chooseIncome: function() {
//     for (let i = 0; i<2; i++) {
//       let items = prompt("Что принесёт доп. доход?", '');

//       if ((typeof(items)) === 'string' && (typeof(items)) != null && items != "" && items.length < 0) {
//         appData.income = items.split(", ");
//         appData.income.push(prompt("Что ещё?", ''));
//         appData.income.sort();

//         appData.income.forEach((item, index) => {
//           index = index + 1;
//           console.log("Способ доп. дохода: " + index, item);
//         });
//       } else {
//         console.log(0);
//         i = i-1;
//       }
//     }
//   }
// };

// for (let item in appData) {
//   console.log("Наша программа содержит " + item);
// }
