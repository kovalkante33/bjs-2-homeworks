// Задача 1. Форматтер чисел

// Функция для преобразования значения в число и проверка результата
function parseCount(value) {
    const number = Number.parseFloat(value);
    if (isNaN(number)) {
        throw new Error("Невалидное значение");
    }
    return number;
}

// Функция перехвата ошибки и вывона пользователю
function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error.message;
    }
}

// Задача 2. Треугольник 

// Класс для определения треугольника
class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = Number(a);
        this.b = Number(b);
        this.c = Number(c);
    }
    // Вычисление периметра
    get perimeter() {
        return this.a + this.b + this.c;
    }
    // Вычисление площади
    get area() {
        const s = this.perimeter / 2; // полупериметр
        const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
        return area.toFixed(3); // округляем до трех знаков после запятой
    }
}
// Функция выводит сообщение в случае не существования треугольника
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
        };
    }
}
