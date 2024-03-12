<template>
    <div class="main">
        <nav-bar/>    
        <div class="price">
            <side-bar/>
            <div class="analytics_content">
                
            </div>
        </div>
    </div>
</template>

<script>


import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';

export default {
    components: {
        SideBar, NavBar
    }
}
</script>

<style scoped>

.main{
    background: #e4e4e4;
}
.price{
    display: grid;
    grid-template-columns: 300px auto;
}

</style>