Vue.component('goods-list', {
    props: ['goods'],
    template: `
      <div class="goods-list">
        <p class="false-search">Ничего не найдено</p>
        <goods-item v-for="good in goods" :good="good"></goods-item>
      </div>
    `
  });
  Vue.component('goods-item', {
    props: ['good'],
    template: `
      <div class="goods-item">
        <h3>{{ good.product_name }}</h3>
        <p>{{ good.price }}</p>
      </div>
    `
  });
  Vue.component('search', {
    props: ['list'],
    template:`
    <form @submit.prevent='$parent.filterGoods'>
      <input type="text" class="goods-search" v-model="$parent.searchLine" />
      <button class="search-button" type="submit">Искать</button>
    </form>
    `
  });

  Vue.component('cart-list', {
    props: ['goods'],
    template: `
    <div class="cart">
        <h1>Корзина</h1>
        <h2>Итоговая сумма: {{ cartAmount }} </h2>
        <div class="cart-cont">
        <cart-item v-for="good in goods" :good="good"></cart-item>
        </div>
    </div>
    `
  });
  Vue.component('cart-item', {
    props: ['good'],
    template: `
      <div class="goods-item">
        <h3>{{ good.product_name }}</h3>
        <p>{{ good.price }}</p>
      </div>
    `
  });