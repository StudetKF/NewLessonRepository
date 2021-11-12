export default{
    goods: Vue.component("goods-comp", {
        props: ['goods', 'add'],
        template: `
        <div class="goods-list">
            <good-list  v-for="good in goods" :good="good" :add='add'></good-list>
        </div>`
    })
};