<template>

<div>{{ name }}</div>

</template>

<script>
    export default {
        name : "DetailFruit",
        props : {
            name : {
                required : true ,
            }
        } ,
    }
</script>