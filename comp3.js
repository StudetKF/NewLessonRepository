export default{
    itemCart: Vue.component('cart-items', {
        props:['clear', 'list', 'del'],
        template:`
        <div class="cart-list">
        <div class="cart-cont"><h2>Корзина</h2><button @click="clear" class="clear-cart">Очистить корзину</button></div>
        <div class="cart-list-cont">
            <cart-item v-for="good in list" :good="good" :del="del"></cart-item>
        </div>
        </div>`
    })
};