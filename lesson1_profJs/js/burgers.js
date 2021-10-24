class getList{
    constructor(title, price, cal, id){
        this.title = title;
        this.price = price;
        this.cal= cal;
        this.id = id;
    }
}
function getMas(array, class_name){
    let mas = [];
    for(let i=0;i<array.length;i++){
        let now = new class_name(array[i][0], array[i][1], array[i][2], array[i][3]);
        mas.push(now);
    }
    return mas;
}
let burgers = [
    ['Маленький бургер', 50, 20],
    ['Большой бургер', 100, 40]
];
let filling = [
    ['С сыром', 10, 20],
    ['С салатом', 20, 5],
    ['С картофелем', 15, 10]
];
let plus = [
    ['Посыпать приправой', 15, 0],
    ['Полить майонезом', 20, 5] 
];
const getId = (mas, mas_name) =>{
    for(let i=0;i<mas.length;i++){
        mas[i].push(mas_name + '-' + i);
    }
}
class getCart{
    constructor(burger, filling, plus){
        this.burger = burger;
        this.filling = filling;
        this.plus = plus;
    }
}
let now_cart = {
    burger: 0,
    filling: 0,
    plus: 0
}
let cart=[];
getId(burgers, "burger");
getId(filling, 'filling');
getId(plus, 'plus');
burgers = getMas(burgers, getList);
filling = getMas(filling, getList);
plus = getMas(plus, getList);

const get_elems = (class_name, title, price, cal, text_buy, id) => {
    return `<div class="${class_name}"><div class="img"></div><div class="text-cont"><h3>${title}</h3><p class="cal">Калорийность: ${cal}</p><p class="price">Цена: ${price}</p><div class="but-cont"><button class="buy" id="${id}">${text_buy}</button></div></div></div>`
}
const get_item = (list, class_name, parent, text_buy) => {
    let now_list = list.map(now => get_elems(class_name, now.title, now.price, now.cal, text_buy, now.id)).join('');
    document.querySelector(parent).innerHTML = now_list;
}
const setBurger = () => {
    now_cart = {
        burger: 0,
        filling: 0,
        plus: 0
    }
    for(let i=0;i<burgers.length;i++){
        document.getElementById('burger-'+i).onclick = () => {
            let name_in=burgers[i].title;
            let name = document.querySelector(".name");
            let count = document.querySelector(".count");
            let count_price = burgers[i].price;
            count.innerHTML = 'Цена:' + count_price;
            name.innerHTML = name_in;
            now_cart.burger = i;
            document.querySelector(".burgers").style.display = 'none';
            document.querySelector(".fillings").style.display = 'flex';
            setFilling(name_in, count_price, name, count);
        }
    }
}
const setFilling = (name_in, count_price, name, count) => {
    for(let j=0;j<filling.length;j++){
        document.getElementById('filling-'+j).onclick = () => {
            now_cart.filling = j;
            name_in+=", "+filling[j].title.toLowerCase();
            name.innerHTML = name_in;
            count_price+=filling[j].price;
            count.innerHTML = 'Цена:' + count_price;
            document.querySelector(".fillings").style.display = 'none';
            document.querySelector(".pluses").style.display = 'flex';
            setCart(name_in, count_price, name, count);
        }
    }
}
const setCart = (name_in, count_price, name, count) => {
    for(let k=0;k<plus.length;k++){
        document.getElementById('plus-'+k).onclick = () => {
            now_cart.plus = k;
            name_in+=", "+plus[k].title.toLowerCase();
            name.innerHTML = name_in;
            count_price+=plus[k].price;
            count.innerHTML = 'Цена:' + count_price;
            document.querySelector(".pluses").style.display = 'none';
            document.querySelector(".ok").style.display = 'flex';
            cart.push(now_cart);
            now_cart = {
                burger: 0,
                filling: 0,
                plus: 0
            }
            console.log(cart);
        }
    }
}
const toMain = () => {
        document.querySelector(".main").style.display = 'block';
        document.querySelector(".burgers").style.display = 'flex';
        document.querySelector(".ok").style.display = 'none';
        document.querySelector(".pluses").style.display = 'none';
        document.querySelector(".fillings").style.display = 'none';
        document.querySelector(".cart").style.display = 'none';
        document.querySelector(".name").innerHTML="";
        document.querySelector(".count").innerHTML = "";
}
const getTable = (burger, filling, plus, cal, price) => {
    return `<tr><td>${burger}</td><td>${filling}</td><td>${plus}</td><td>${cal}</td><td>${price}</td></tr>`
}
const getTableMas = (array1, array2, array3, insert) => {
    return {burger: array1[insert.burger].title, filling: array2[insert.filling].title, plus: array3[insert.plus].title, cal: array1[insert.burger].cal+array2[insert.filling].cal+array3[insert.plus].cal, price: array1[insert.burger].price+array2[insert.filling].price+array3[insert.plus].price}
}
const toCart = () => {
        document.querySelector(".main").style.display = 'none';
        document.querySelector(".cart").style.display = 'block';
        let list = [];
        for(let i=0; i<cart.length; i++){
            list.push(getTableMas(burgers, filling, plus, cart[i]));
        }
        let new_list = list.map(now => getTable(now.burger, now.filling, now.plus, now.cal, now.price)).join("");
        document.getElementById("cart-table").innerHTML = new_list;
        let cal=0;
        let price=0;
        for(let i=0; i<list.length;i++){
            cal+=list[i].cal;
            price+=list[i].price;
        }
        document.getElementById("price").innerHTML = "Общая стоимость: " + price;
        document.getElementById("cal").innerHTML = "Общая калорийность: " + cal;
}
window.onload = () =>{
    get_item(burgers, 'burger', '.burgers', 'Купить');
    get_item(filling, 'filling', '.fillings', 'Добавить');
    get_item(plus, 'plus', '.pluses', 'Добавить');
    setBurger();
    document.querySelector(".main-but").onclick = toMain;
    document.getElementById("main").onclick = toMain;
    document.querySelector(".cart-but").onclick = toCart;
    document.getElementById("Cart").onclick = toCart;
    document.querySelector(".clear").onclick = () =>{cart=[];toCart()};
}