import { even, odd } from "./var.mjs";
import { checkEvenOrOdd } from "./func.mjs";

function checkWordLenIsEvenOrOdd(word){
    if(word.length%2 ==0 ) return even
    else return odd
}

console.log(checkEvenOrOdd(11))
console.log(checkWordLenIsEvenOrOdd('reze'))