"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c; // Вычисляем дискриминант
  if (discriminant < 0) { // Если дискриминант меньше нуля
    return arr;
  } else if (discriminant === 0) { // Если дискриминант равен нулю
    let sqrt = -b / (2 * a);
    arr.push(sqrt);
  } else { // Если дискриминант больше нуля, существует два корня, вычесляем
    let sqrtOne = (-b + Math.sqrt(discriminant)) / (2 * a);
    let sqrtTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
    roots.push(sqrtOne, sqrtTwo);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Месячная процентная ставка
  const monthlyPercent = percent / 100 / 12;
  // тело кредита
  const loanAmount = amount - contribution;
  // Ежемесечная плата
  const monthlyPayment = loanAmount * (monthlyPercent + monthlyPercent / ((Math.pow(1 + monthlyPercent, countMonths) - 1)));
  // Общая сумма выплат
  const totalAmount = monthlyPayment * countMonths;
  return +totalAmount.toFixed(2);
}