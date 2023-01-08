// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = prompt('Какая скидка?')

let totalSale = Number

let total = Number

let max = Object

let min = Object

let average = Number

let arr = [

    {

        name: 'Milk',

        price: 3.25

    },

    {

        name: 'Coffee',

        price: 1.5

    },

    {

        name: 'Ice Cream',

        price: 7.85

    },

    {

        name: 'Tomatos',

        price: 4.14

    },

    {

        name: 'Onion',

        price: 2.25

    }

]

let arr_sale = []

// 1. Сохранить самый дорогой товар в переменную`max`* // Сделано
// 2. Сохранить самый дешевый товар в переменную`min`* // Сделано
// 3. Сохранить общую цену без скидок в переменную`total`* // Сделано
// 4. Сохранить общую цену со скидкой в переменную`totalSale`* // Сделано
// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`* // Сделано
// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок* // Сделано
// * Писать весь код в функции `setup()`*
// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = (exam) => {
    let numPrice = []
    for(let item of exam) {
        numPrice.push(item.price)
        let numMax = Math.max(...numPrice) 
        let numMin = Math.min(...numPrice) 
        if(numMax == item.price) {
            max = item
        } else if (numMin == item.price) {
            min = item
        }

        total = numPrice.reduce((a, b) => a + b)

        totalSale = total - (total / 100 * discount)
        
        arr_sale.push({
            name: item.name,
            price: item.price - (item.price / 100 * discount)
        })

    }
    average = total / exam.length

    console.log(max, min);
    console.log(total, totalSale);
    console.log(arr_sale);
    console.log(average);
}

setup(arr)

// Вариант для первой и второй задании

// min = arr.reduce((a, b) => {
//     if (a.price < b.price) {
//         return a
//     } else {
//         return b
//     }
// })

// max = arr.reduce((a, b) => {
//     if (a.price > b.price) {
//         return a
//     } else {
//         return b
//     }
// })