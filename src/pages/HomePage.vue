<template>
    <div class="page-rapper">
        <HeaderLayout/>
        <SideBarLayout/>
    </div>
</template>



<script>
    import HeaderLayout from "@/pages/untis/HeaderLayout.vue";
    import SideBarLayout from "@/pages/untis/SideBarLayout.vue";
    export default {
        name : "HomePages",
        components : {
            HeaderLayout ,
            SideBarLayout
        }
    }
</script>
