export default{
    good: Vue.component("good-list",{
        props:['good', 'add'],
        template:`
        <div class="goods-item">
            <div class="image"></div>
            <h3>{{ good.product_name }}</h3>
            <div class="goods-item-cont"><p class="goods-price">{{ good.price }}</p><button @click="add(good)" class="goods-item-but">Купить</button></div>
        </div>`
    })
};