const id_add = "but";
const find_token = 'but';
let cart=[];
let dis = 0;
class productConst{
    constructor(title, price, id){
        this.title = title,
        this.price = price,
        this.id = id;
    }
}
const cons_prod = new productConst;
const products = [
    new cons_prod.constructor('Продукт 1', 110, id_add + 1),
    new cons_prod.constructor('Продукт 2', 130, id_add + 2),
    new cons_prod.constructor('Продукт 3', 150, id_add + 3),
    new cons_prod.constructor('Продукт 4', 106, id_add + 4),
    new cons_prod.constructor('Продукт 5', 150, id_add + 5),
    new cons_prod.constructor('Продукт 6', 10, id_add + 6),
    new cons_prod.constructor('Продукт 7', 130, id_add + 7),
    new cons_prod.constructor('Продукт 8', 102, id_add + 8),
    new cons_prod.constructor('Продукт 9', 110, id_add + 9),
    new cons_prod.constructor('Продукт 10', 300, id_add + 10),
    new cons_prod.constructor('Продукт 11', 140, id_add + 11),
    new cons_prod.constructor('Продукт 12', 110, id_add + 12)
];
const products_items = (title, price, id) => {
    return `<div class="items"><div class="img"></div><div class="text-cont"><h4>${title}</h4><div class="price-cont"><p class="price">${price}$</p><button id="${id}"class="add-to">Add to cart</button></div></div></div>`;
}
const get_list = (list) => {
    let now_list = list.map(now => products_items(now.title, now.price, now.id)).join('');
    document.querySelector(".product-list").innerHTML = now_list;
}
const cart_products = (title, price, quantity) => {
    return `<div class="product-cont"><p class="title_pro">${title}</p><p class="count">Цена: ${price}</p><p class="quantity">Количество: ${quantity}</p></div>`;
}
const cart_items = (list, count) => {
    let now_list = list.map(now => cart_products(now.array.title, now.array.price, now.quantity)).join('');
    document.querySelector(".cart-list").innerHTML = now_list;
    document.querySelector(".all-price").innerHTML = `<p class="all-price-p">Общая сумма: ${count}</p>`;
}
function getDis(){
    if(dis==0){
        document.getElementsByClassName("cart")[0].style.display = "none";
        document.getElementsByClassName("shop")[0].style.display = "block";
    }
    else{
        if(cart[0]!=undefined) document.getElementsByClassName("cart-list")[0].style.opacity = "1";
        document.getElementsByClassName("shop")[0].style.display = "none";
        document.getElementsByClassName("cart")[0].style.display = "flex";
        let arr = [];
        let count = 0;
        let cont = 1;
        for(let i=0; i<cart.length;i++){
            for(let j=0;j<products.length;j++) {
                if (products[j].id == cart[i]){
                    count+=products[j].price;
                    arr.push({array: products[j], quantity: cont});
                }
            }
        }
        for (g=0;g<arr.length;g++){
            for(let i=0; i<arr.length;i++){
                for(let j=0;j<arr.length;j++){
                    if(arr[i].array == arr[j].array && i!=j){
                        arr[i].quantity += arr[j].quantity;
                        arr.splice(j,1);
                    }
                }
            }
        }
        cart_items(arr, count);
    }
}
window.onload = function(){
        get_list(products);
        for(let i=1;i<products.length+1;i++){
            let but_elem = document.getElementById("but"+i);
            but_elem.onclick = function(){
                cart.push(find_token + i);
            }
        }
    document.getElementById("main").onclick = () => {
        dis=0; 
        getDis();
    }
    document.getElementById("basket").onclick = () => {
        dis=1;
        getDis();
    }
    document.getElementsByClassName("clear")[0].onclick = () => {
        cart =[];
        dis=1;
        getDis();
        document.getElementsByClassName("cart-list")[0].style.opacity = "0";
    }
}