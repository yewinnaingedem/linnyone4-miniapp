<template >

    <div>
        <h1>Product VueX Testing</h1>
        <ul>
            <li v-for="(product , index) in products" :key="index">{{ product.name }}$ {{ product.price }}</li>
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