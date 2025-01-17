function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  let avg = (sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: Number(avg) };
}

// Функция для нахождения суммы элементов массива
function summElementsWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, el) => acc + el, 0);
}

// Функция для вычисления разницы максимального и минимального элементов
function differenceMaxMinWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return max - min;
}

// Функция для вычисления разницы сумм чётных и нечётных элементов
function differenceEvenOddWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let el of arr) {
    if (el % 2 === 0) {
      sumEvenElement += el;
    } else {
      sumOddElement += el;
    }
  }

  return sumEvenElement - sumOddElement;
}

// Функция для вычисления среднего значения чётных элементов
function averageEvenElementsWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let el of arr) {
    if (el % 2 === 0) {
      sumEvenElement += el;
      countEvenElement++;
    }
  }

  if (countEvenElement === 0) {
    return 0;
  }

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {

}
