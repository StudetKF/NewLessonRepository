const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const name1='hhh';
const app = new Vue({
    el: '#app',
    data: {
      goods: [],
      filteredGoods: [],
      searchLine: '',
      productCart: [],
      isVisibleCart: false,
      cartAmount: 0,
      searchIs: false
    },
    methods: {
        makeGETRequest(url, callback) {
          var xhr;
    
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
        filterGoods(){
          searchIs = false;
            this.filteredGoods=this.goods;
            for(let i=0;i<this.filteredGoods.length;i++){
                if(this.filteredGoods[i].product_name==this.searchLine || this.filteredGoods[i].product_name.toLowerCase()==this.searchLine.toLowerCase()){
                    let now_array = [this.filteredGoods[i]];
                    this.filteredGoods=now_array;
                    document.querySelector('.false-search').style.display = 'none'
                    searchIs = true;
                }
              }
                if(this.searchLine!="" && !searchIs){
                  this.filteredGoods="";
                  document.querySelector('.false-search').style.display = 'block';
                  searchIs = false;
                }
                else{
                  document.querySelector('.false-search').style.display = 'none';
                }
        },
        getCart(){
          if (!this.cartState){
              this.makeGETRequest(`${API_URL}/getBasket.json`, (goods) => {
                  this.productCart = goods.contents;
                  this.cartAmount = goods.amount;
                  document.querySelector('.cart').style.display = 'block';
                  this.cartState = true;
              });
          }
          else {
            document.querySelector('.cart').style.display = 'none';
            this.cartState = false;
          }
        }
    },
    mounted() {
        this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
          this.goods = goods;
          this.filteredGoods = goods;
        });
      }
    
});  