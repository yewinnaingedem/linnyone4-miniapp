<template>
    <SideBarLayout/>
    <div>
        this is the t & q pages
    </div>
    <router-link to="/">
        Got To the home page
    </router-link>
    <div class="right-content custom-menu-toggler">
        <img src="@/assets/icons/svg/menu.svg" class="menu_icon" alt="Menu Bar" />
    </div>
</template>


<script>
    import SideBarLayout from "@/pages/untis/SideBarLayout.vue";
    export default {
        components : {
            SideBarLayout, 
        }
    }
</script>