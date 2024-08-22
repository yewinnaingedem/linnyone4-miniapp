<template >
    <div>
        <router-link :to='"/counter/vue"'>
            <h1 >Product VueX Testing</h1>
        </router-link>
        <ul>
            <li v-for="(product , index) in products" :key="index">
                <router-link :to="`/${product.name}`">
                    {{ product.name }}$ {{ product.price }}
                </router-link>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name : "ProductListOne",
        props : {
            products : {
                required : true ,
            }
        },
    }
</script>