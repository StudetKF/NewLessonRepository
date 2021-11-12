export default{
    head: Vue.component("header-comp", {
        template: `
        <header>
            <button @click="$parent.getGoods" class="head-but">Главная</button>
            <button @click="$parent.getCart" class="head-but">Корзина</button>
        </header>
        `
    })
};