// let styles = ["Jazz", "Blues"]

// styles.push("Rock-n-Roll")

// // styles[1] = "Classic"
// styles[Math.floor(styles.length / 2)] = "Classic"

// alert(styles.shift())

// styles.unshift("Reggae")
// styles.unshift("Rap")


// function sumInput() {
//     let arr = []
//     let num
//     let result = 0
//     do {
//         num = prompt("Введите число")
//         if (num && (+num || num === "0")) {
//             arr.push(+num)
//             result += +num
//         }
//     } while(num && (+num || num === "0"))

//     return result
// }

// console.log(sumInput)

// Задание 0
// let auto = {
//     brand: "BMW",
//     model: "X5",
//     year: 2021,
//     avgSpeed: 80,
//     toString() {
//         return `
//         brand: ${this.brand},
//         model: ${this.model},
//         year: ${this.year},
//         avgSpeed: ${this.avgSpeed}
//         `
//     },

//     calculateDriveTime(distance) {
//         return distance / this.avgSpeed
//     }
// }
// alert(auto.calculateDriveTime(240))

// Задание 1
// let list = [
//     {name: "Морковь", count: 5, bought: true, price: 40},
//     {name: "Картошка", count: 3, bought: false, price: 50},
//     {name: "Арбуз", count: 1, bought: true, price: 100},
// ]

// function displayList() {
//     return list.sort((item1) => {
//         return item1.bought ? 1 : -1
//     })
// }

// function addToList(name, price) {
//     for (item of list) {
//         if (item.name === name) {
//             item.count += 1
//             return list
//         }
//     } 
//     list.push({name, count: 1, bought: false, price})
//     return list
// }

// console.log(addToList("Арбуз"))
// console.log(addToList("Банан", 55))

// function buyProduct(name) {
//     for (item of list) {
//         if (item.name === name) {
//             item.bought = true
//         }
//     }
//     return list
// }

// console.log(buyProduct("Картошка"))


// // Задание 2
// // 1. Функция для распечатки чека на экран
// function printReceipt(list) {
//     console.log("Чек:");
//     console.log("-------------------------");
//     list.forEach(item => {
//         console.log(`${item.name} - ${item.count} шт. по ${item.price} руб.`);
//     });
//     console.log("-------------------------");
// }

// // 2. Функция для подсчета общей суммы покупки
// function calculateTotal(list) {
//     return list.reduce((total, item) => total + (item.count * item.price), 0);
// }

// // // 3. Функция для получения самой дорогой покупки в чеке
// function getMostExpensiveItem(list) {
//     return list.reduce((mostExpensive, item) => {
//         const totalPrice = item.count * item.price;
//         return totalPrice > mostExpensive.total ? { item, total: totalPrice } : mostExpensive;
//     }, { item: null, total: 0 });
// }

// // // 4. Функция для подсчета средней стоимости одного товара в чеке
// function calculateAveragePrice(list) {
//     const totalItems = list.reduce((total, item) => total + item.count, 0);
//     const totalPrice = calculateTotal(list);
//     return totalItems ? (totalPrice / totalItems).toFixed(2) : 0;
// }

// // // Вызов функций
// printReceipt(list);
// const total = calculateTotal(list);
// console.log(`Общая сумма покупки: ${total} руб.`);
// const mostExpensive = getMostExpensiveItem(list);
// console.log(`Самая дорогая покупка: ${mostExpensive.item.name}, сумма: ${mostExpensive.total} руб.`);
// const averagePrice = calculateAveragePrice(list);
// console.log(`Средняя стоимость одного товара: ${averagePrice} руб.`);


// Задание 3
class Time {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    // Функция вывода времени на экран
    displayTime() {
        const formattedTime = `${this.pad(this.hours)}:${this.pad(this.minutes)}:${this.pad(this.seconds)}`;
        console.log(formattedTime);
    }

    // Функция изменения времени на переданное количество секунд
    changeBySeconds(seconds) {
        this.seconds += seconds;
        this.normalizeTime();
    }

    // Функция изменения времени на переданное количество минут
    changeByMinutes(minutes) {
        this.minutes += minutes;
        this.normalizeTime();
    }

    // Функция изменения времени на переданное количество часов
    changeByHours(hours) {
        this.hours += hours;
        this.normalizeTime();
    }

    // Приватный метод для нормализации времени
    normalizeTime() {
        if (this.seconds >= 60) {
            this.minutes += Math.floor(this.seconds / 60);
            this.seconds = this.seconds % 60;
        } else if (this.seconds < 0) {
            const minutesToSubtract = Math.ceil(Math.abs(this.seconds) / 60);
            this.minutes -= minutesToSubtract;
            this.seconds = (this.seconds + 60 * minutesToSubtract) % 60;
        }
        
        if (this.minutes >= 60) {
            this.hours += Math.floor(this.minutes / 60);
            this.minutes = this.minutes % 60;
        } else if (this.minutes < 0) {
            const hoursToSubtract = Math.ceil(Math.abs(this.minutes) / 60);
            this.hours -= hoursToSubtract;
            this.minutes = (this.minutes + 60 * hoursToSubtract) % 60;
        }
        
        if (this.hours >= 24) {
            this.hours = this.hours % 24;
        } else if (this.hours < 0) {
            this.hours = (this.hours + 24) % 24;
        }
    }

    // Утилита для добавления ведущих нулей
    pad(num) {
        return String(num).padStart(2, '0');
    }
}

// Пример использования
const time = new Time(20, 30, 45);
time.displayTime(); // 20:30:45

time.changeBySeconds(30);
time.displayTime(); // 20:31:15

time.changeByMinutes(2);
time.displayTime(); // 20:33:15