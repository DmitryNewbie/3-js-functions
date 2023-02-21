"use strict";



const b1 = +prompt('Введите первое число ');
const b2 = +prompt('Введите второе число ');

function sum (n1 , n2) {
    return n1 + n2;
}
console.log(`Cумма `+ sum(b1 , b2));

function difference(n1 , n2) {
    if(n1 > n2){
        console.log(`Разность ${n1 - n2}`)
    }else{
        console.log(`Разность ${ n2 - n1}`)
    }
}
difference(b1 , b2);

function multiplication (n1 , n2){
    return n1 * n2;
}
console.log(`Умножение ` + multiplication( b1 , b2));

function division(n1 , n2) {
    return n1 / n2;
}
console.log(`Деление` + division(b1 , b2));