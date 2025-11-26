const {odd, even} = require('./var')

function checkOddOrEven(num){
    if(num%2 == 0){
        return even
    }
    else {
        return odd
    }
}

module.exports = checkOddOrEven