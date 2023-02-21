"use strict";


const num = +prompt('Введите число')
numCheck(num);
function numCheck(figure) {
    if(isNaN(figure)){
        console.log(`Значение задано не верно`)
    }else{
        console.log(`Размер заработной платы за вычетом налогов равен ${figure*0.87}`)
    }

}
