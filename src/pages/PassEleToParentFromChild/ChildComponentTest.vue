<template>
    <ParentComponent>
        <h1 class="text-warning">This is the card body</h1>
    </ParentComponent>
</template>
<script>
    import ParentComponent from "./ParentCompnent.vue";
    export default {
        name  : "ChildComponent" ,
        components : {
            ParentComponent ,
        }
    }

</script>
