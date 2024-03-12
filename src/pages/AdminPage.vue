<template>
    <div class="main">
        <nav-bar style="position: fixed; z-index: 1000; top: 0;"/>
        <div class="admin">
            <side-bar/>
            <div class="admin_content">
                <div class="admin_content_wrapper">
                    <div class="admin_content_left">
                        <tree-component :title="'выберите локацию'"/>
                    </div>
                    <div class="admin_content_right">
                        <tree-component :title="'выберите категорию'"/>
                    </div>
                </div>
                <div class="map_content">  
                    <map-component :title="'Радиус поиска'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//Connect components
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
.admin{
    margin-top: 60px;
    display: grid;
    grid-template-columns: 300px auto;
}

.admin_content_wrapper{
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 55px 75px;
}
.map_content {
    display: flex;
    justify-content: center;
    background: white;
    border-radius: 21px;
}


</style>