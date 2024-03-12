<template>
    <div class="main">
        <side-bar/>
        <div class="price">
            <nav-bar/>
            <div class="analytics_content">
                
            </div>
        </div>
    </div>
</template>

<script>


import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import TreeComponent from '@/components/TreeComponent';
import MapComponent from '@/components/MapComponent';

export default {
    components: {
        SideBar, NavBar, TreeComponent, MapComponent
    }
}
</script>

<style scoped>

.main{
    background: #e4e4e4;
}
.price{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
}
.analytics_content{
    position:relative;
    margin-top:60px;
}




</style>