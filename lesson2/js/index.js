/*Задание 1
    Строка 1 - префикс даёт прибавку в 1 
    Строка 2 - постфикс возвращенает значение, а потом уже выполняется инкрементирование
    Строка 3 - разбор: c = 2 + a + 1, a = 2 (прибавка в строке 1), c=5
    Строка 4 - разбор: d = 2 + b (постфикс), b=2 (прибавка в строке 2), d=4
    Строка 5 - прибавка со строк 1, 3; a=3
    Строка 6 - прибавка со строк 2, 4; b=3
/* Задание 2
    x = 5
*/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
//Задание 3
console.log("Задание 3");
let a = getRandomInt(-500,500), b =getRandomInt(-500,500), x;
if (a >= 0 && b>=0){
    x = a - b;
}
else if (a < 0 && b < 0){
    x = a * b;
}
else{
    x = a + b;
}
console.log("Значение a:",a);
console.log("Значение b:",b);
console.log(x);
//Задание 4
a = getRandomInt(0,16);
console.log("Задание 4");
console.log("Значение a:", a);
let str = "";
switch (a){
    case 0:
        str += a + ", ";
        a+=1;
    case 1:
        str += a + ", ";
        a+=1;
    case 2:
        str += a + ", ";
        a+=1;
    case 3:
        str += a + ", ";
        a+=1;
    case 4:
        str += a + ", ";
        a+=1;
    case 5:
        str += a + ", ";
        a+=1;
    case 6:
        str += a + ", ";
        a+=1;
    case 7:
        str += a + ", ";
        a+=1;
    case 8:
        str += a + ", ";
        a+=1;
    case 9:
        str += a + ", ";
        a+=1;
    case 10:
        str += a + ", ";
        a+=1;
    case 11:
        str += a + ", ";
        a+=1;
    case 12:
        str += a + ", ";
        a+=1;
    case 13:
        str += a + ", ";
        a+=1;
    case 14:
        str += a + ", ";
        a+=1;

    case 15:
        str += a + " ";
        a+=1;
        console.log(str);
        break;
}
//Задание 5
function plus(one, two) {return one + two;}
function minus(one, two) {return one - two;}
function pro(one, two) {return one * two;}
function del(one, two) {return one / two;}
console.log("Задание 5")
console.log("Сложение: 5 + 6", plus(5,6));
console.log("Вычитание: 6 - 5", minus(6,5));
console.log("Произведение: 5 * 6", pro(5,6));
console.log("Деление: 30 / 5", del(30,5));
//Задание 6
function mathOperation(arg1, arg2, operation){
    switch (operation){
        case '+':
            return arg1+arg2;
            break;
        case '-':
            return arg1-arg2;
            break;
        case '*':
            return arg1*arg2;
            break;
    }
}
console.log("Задание 6");
console.log(mathOperation(1,2,'+'));
console.log(mathOperation(1,2,'-'));
console.log(mathOperation(1,2,'*'));
/*Задание 7
    null - пустая ячейка, не содержит значений
    0 - заполненная ячейка со значением 0
*/
function power(val, pow){
    let n=1;
    if (pow>1){
        for (let i=0;i < pow;i++){
            n*=val;
        }
        return n;
    }
    else if (pow == 0){
        return 1;
    }
    else if (pow == 1){
        return val;
    }
    else{
        for (let i=0;i > pow;i--){
            n/=val;
        }
        return n;
    }
}
window.onload = function(){
    document.forms.temp.onsubmit = function() {
        let message1 = this.message1.value;
        let message2 = this.message2.value;
        alert(power(message1, message2));
        return false;
    };
}