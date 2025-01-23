// Задача 1. Печатное издание

// Базовый класс
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    // Улучшение сосстояния издания
    fix() {
        this.state *= 1.5;
    }
    // Условия при котором будет производиться улучшение состояния издания
    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

// Определяет печатное издание, как журнал
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

// Определяет печатное издание, как книга - добавляет автора издания
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

// Определяет жанра книги, как новелла
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

// Определяет жанра книги, как фантастика
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

// Определяет жанра книги, как детектив
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задача 2. Библиотека

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    // Добавление книги в библиотеку при условии ее состояния более 30%
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    // Поиск книги по ключевым словам
    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    // Возврат книги читателю
    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        if (index !== -1) {
            const book = this.books[index];
            this.books.splice(index, 1);
            return book;
        }
        return null;
    }
}

// Задача 3. Журнал успеваемости*

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }
    // Добавление оценки студенту в журнал с валидацией
    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            console.log("Оценка должна быть от 2 до 5");
            return;
        }
        // Проверка наличия предмета
        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
    }
    // Возвращение средней оценки по предмету с проверкой наличия предмета
    getAverageBySubject(subject) {
        if (!this.marks[subject]) {
            return 0;
        }

        const total = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
        return total / this.marks[subject].length;
    }
    // Возвращение средней оценки по всем предметам
    getAverage() {
        const subjects = Object.keys(this.marks);
        const totalAverage = subjects.reduce((acc, subject) => {
            return acc + this.getAverageBySubject(subject);
        }, 0);

        return totalAverage / subjects.length;
    }
}