// reduce function

const myNums = [1, 2, 3,]

// const myTotal = myNums.reduce (function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// console.log(myTotal);

// arrow function

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "react course",
        price: 1499
    },
    {
        itemName: "nodejs course",
        price: 1999
    },
    {
        itemName: "mongodb course",
        price: 1299
    },
    {
        itemName: "typescript course",
        price: 1599
    }
];

const priceTpay = shoppingCart.reduce((acc,item) =>acc + item.price , 0 )

console.log(priceTpay);