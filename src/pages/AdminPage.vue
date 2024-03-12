<template>
    <div class="main">
        <side-bar/>
        <div class="admin">
            <nav-bar/>
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
                    
                    <map-component :title="'Pадиус поиска'" />
                    
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
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
}
.admin_content {
    margin-top:60px;

}
.admin_content_wrapper{
    padding: 30px;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 30px;
    margin-bottom:auto;
}
.admin_content_left, .admin_content_right {
    display: flex;
    flex-direction: column;
    gap: 35px;
    background: white;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    padding: 20px; 
}

.map_content {
    text-align: center;
    background: white;
    height: 50%;
    width:1200px;
    border-radius: 21px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    margin-left: 65px;
}



</style>