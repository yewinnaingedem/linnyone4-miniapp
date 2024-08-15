<template>
    <router-view></router-view>
    <ProductListOne :products="products"></ProductListOne>
</template>

<script>
import ProductListOne from "./views/VueX/ProductListOne.vue";

export default {
  name: 'App',
  components: {
    ProductListOne
  },
  data () {
    return {
      products : [
          {
            name : "Banaa" , price : "2500" ,
          },
          {
            name : "Apple" , price : "3500" ,
          },
          {
            name : "Orange" , price : "4500" ,
          }
        ]
    }
  }
}
</script>

<style>

</style>
