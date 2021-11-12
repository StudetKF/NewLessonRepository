
const app = new Vue({
    el: "#app",
    data: {
        goods: [],
        filteredGoods: [],
        productsCart: [],
        cartId: 0
    },
    methods: {
        makeGETRequest(url, callback){
            let xhr;

            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) { 
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
    
                callback(JSON.parse(xhr.responseText));
                }
            }
        
            xhr.open('GET', url, true);
            xhr.send();
        },
        makePOSTRequest(url, data, callback) {
            let xhr;
        
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) { 
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            }
        
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        
            xhr.send(data);
        },
        getCart(){
            this.makeGETRequest(`/cartData`, (goods) => {
                this.productsCart = goods;
                document.querySelector(".goods-list").style.display = "none";
                document.querySelector(".cart-list").style.display = "block";
            })
        },
        getGoods(){
            this.makeGETRequest(`/catalogData`, (goods) => {
                this.goods = goods;
                this.filteredGoods = goods;
                document.querySelector(".goods-list").style.display = "flex";
                document.querySelector(".cart-list").style.display = "none";
            });
        },
        addToCart(item){
            let nowItem = item;
            nowItem.id = "cart-"+this.cartId;
            this.cartId+=1;
            this.makePOSTRequest(`/addToCart`, JSON.stringify(nowItem), (goods) => {

            });
        },
        delCartItem(item){

            this.makePOSTRequest(`/delCartItem`, JSON.stringify(item), (goods) => {
                this.getCart();
            });
        },
        clearCart(item){

            this.makePOSTRequest(`/clearCart`, JSON.stringify(item), (goods) => {
                this.getCart();
            });
        }

    },
    mounted() {
        this.makeGETRequest(`/catalogData`, (goods) => {
            this.goods = goods;
            this.filteredGoods = goods;
        });
    }
});