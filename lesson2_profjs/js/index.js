const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
catalog_url = '/catalogData.json',
cart_url = '/getBasket.json',
add_cart = '/addToBasket.json',
del_cart = '/deleteFromBasket.json',
cart_class_name = 'cart-list',
product_class_name = 'product-list';
const serverOpen = (url) => {
    return new Promise((resolve, reject) =>{
        let xhr;
        if (window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }
        else if (window.ActiveXObject){
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.onreadystatechange = function(){
            if(xhr.readyState==4){
                resolve(xhr.responseText)
            }
        }

        xhr.open('GET', url, true);
        xhr.send();
    });
}

class GoodsItem {
      render(name, price) {
        return `<div class="goods-item"><h3>${name}</h3><p>${price}</p></div>`;
      }
}

class GoodList{
    fetchGoods(plus_url){
        return new Promise((resolve, reject) =>{
            serverOpen(API_URL+plus_url).then((goods) => {
                resolve(this.goods = JSON.parse(goods));
            });
        });
    }
    render(list, class_name) {
        let listHtml = '';
        list.forEach(good => {
            const goodItem = new GoodsItem();
            listHtml += goodItem.render(good.product_name, good.price);
        });
        document.querySelector("."+class_name).innerHTML = listHtml;
    }
}
class changeList{
    add(){
        return new Promise((resolve, reject) =>{
            serverOpen(API_URL+'/addToBasket.json').then((goods) => {
                resolve(this.goods = JSON.parse(goods));
            });
        });
    }
    del(plus_url){
        return new Promise((resolve, reject) => {
            serverOpen(API_URL+'/deleteFromBasket.json').then((goods) => {
                resolve(this.goods = JSON.parse(goods));
            });
        });
    }
}
const new_product_list = new GoodList();
new_product_list.fetchGoods(catalog_url).then((list) => {
    new_product_list.render(list, product_class_name);
})
new_product_list.fetchGoods(cart_url).then((list) =>{
    new_product_list.render(list.contents, cart_class_name);
});