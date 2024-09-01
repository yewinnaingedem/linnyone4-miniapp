<template>
    <div class="page-wrapper">
        <HeaderLayout/>
        <SideBarLayout/>
        <BootstrapModal/>
        <ChildComponent/>
    </div>
</template>

<script>
    /* eslint-disable */
    import HeaderLayout from "@/pages/untis/HeaderLayout.vue";
    import SideBarLayout from "@/pages/untis/SideBarLayout.vue";
    import BootstrapModal from "@/views/BootstrapModal.vue" ;
    import ChildComponent from "@/pages/PassEleToParentFromChild/ChildComponentTest.vue"
    export default {
        name : "HomePages",
        components : {
            HeaderLayout ,
            SideBarLayout,
            BootstrapModal ,
            ChildComponent
        },
    }
</script>
