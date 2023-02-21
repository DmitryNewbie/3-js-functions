"use strict";



const a1 = +prompt('Введите первое число ');
const a2 = +prompt('Введите второе число ');
const a3 = +prompt('Введите третье число ');

function more(n1 , n2 , n3) {
    if(n1> n2 && n1>n3){
        console.log(`Первое большее число ${n1}`)
    }else if(n2 > n1 && n2 > n3){
        console.log(`Второе большее число ${n2}`)
    }else{
        console.log(`Третье большее число ${n3}`)
    }
}
more(a1 , a2 , a3);