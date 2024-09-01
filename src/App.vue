<template>
    <router-view></router-view>
</template>

<script>
    
    export default {
        mounted () {
            console.log(process.env.VUE_APP_KBZ_APP_ID);
        }
    }
</script>
