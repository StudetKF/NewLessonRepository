export default{
    cart: Vue.component('cart-item', {
        props: ['good', 'del'],
        template:`<div class="goods-item">
        <div class="image"></div>
        <h3>{{ good.product_name }}</h3>
        <div class="goods-item-cont"><p class="goods-price">{{ good.price }}</p><button @click="del(good)" class="goods-item-but">Убрать</button></div>
    </div>`
    })
};