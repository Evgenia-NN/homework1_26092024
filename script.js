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


let list = [
    {name: "Морковь", count: 5, bought: true, price: 40},
    {name: "Картошка", count: 3, bought: false, price: 50},
    {name: "Арбуз", count: 1, bought: true, price: 100},
]

function displayList() {
    return list.sort((item1) => {
        return item1.bought ? 1 : -1
    })
}

function addToList(name, price) {
    for (item of list) {
        if (item.name === name) {
            item.count += 1
            return list
        }
    } 
    list.push({name, count: 1, bought: false, price})
    return list
}

console.log(addToList("Арбуз"))
console.log(addToList("Банан", 55))


function buyProduct(name) {
    for (item of list) {
        if (item.name === name) {
            item.bought = true
        }
    }
    return list
}

console.log(buyProduct("Картошка"))