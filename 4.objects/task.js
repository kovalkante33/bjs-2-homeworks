// Функция-конструктор для добавления данных о студентах
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

// Функция назначения студенту предмета обучения
Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

// Функция для установки отметок студенту
Student.prototype.addMarks = function (...marksToAdd) {
    if (this.marks === undefined) {
        return undefined;
    } else {
        this.marks.push(...marksToAdd);
    }
}

// Функция для вычисления среднего арифметического по оценкам
Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
        return 0
    }
    const sum = this.marks.reduce((acc, val) => acc + val, 0);
    return sum / this.marks.length;
}

// Функция для исключения студента из учебного процесса
Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.exclude = reason;
}
