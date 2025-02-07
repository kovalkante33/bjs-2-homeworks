class AlarmClock {
    constructor() {
        this.alarmCollection = []; // Коллекция звонков
        this.intervalId = null;    // ID таймера
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        // Проверка на наличие звонка с таким же временем
        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        // Добавление нового звонка
        this.alarmCollection.push({
            time,
            callback,
            canCall: true
        });
    }

    removeClock(time) {
        // Удаление звонков с указанным временем
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    start() {
        if (this.intervalId !== null) {
            return; // Интервал уже запущен
        }

        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();

            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false; // Звонок больше не может быть вызван
                    alarm.callback();
                }
            });
        }, 1000);
    }

    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId); // Остановка интервала
            this.intervalId = null;         // Сброс ID интервала
        }
    }

    resetAllCalls() {
        // Сброс возможности вызова всех звонков
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        this.stop(); // Остановка интервала
        this.alarmCollection = []; // Удаление всех звонков
    }
}