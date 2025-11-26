const {odd, even} = require('./var')
const checkNumber = require('./func')

function checkStringOddOrEven(str){
    if(str.length % 2 ==0){
        return even
    }
    else {
        return odd
    }
}

console.log(checkNumber(10))
console.log(checkStringOddOrEven('Yena'))