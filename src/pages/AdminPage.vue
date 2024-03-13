<template>
    <div class="main">
        <side-bar/>
        <div class="admin">
            <nav-bar :notifications="notifications"/>
            <div class="admin_content_wrapper">
                <div class="admin_content">
                    <div class="admin_content_left">
                        <!-- <tree-component :title="'выберите локацию'" :isLocation="true"/> -->
                        <TreeVue/>
                    </div>
                    <div class="admin_content_right">
                        <tree-component :title="'выберите категорию'" :isLocation="false"/> 
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
import TreeVue from '@/components/Tree';

export default {
    components: {
        SideBar, NavBar, TreeComponent, MapComponent, TreeVue
    },
    data(){
      return {
        notifications: [],
      }  
    },
    methods: {
        addNotification(notification) {
            this.notifications.push(notification);
        },
        showNotification(message){
            this.$toast.add({ severity: 'info', summary: 'Информация', detail: message, life: 2000 })
            this.addNotification(message);
        }
    },
    mounted(){
        this.showNotification('Добро пожаловать на сервис!');
    }
}
</script>
<style scoped>
.main{
    display: grid;
    grid-template-columns: 300px auto;
}

.admin_content_wrapper{
    background: #e4e4e4;
    width: 100%;
    height: 100vh;
    border-radius: 21px 0 0 0;
}

.admin_content{
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 75px;
}

.admin_content_left{
    margin: 0px 20px 0px 0px;
}


.map_content {
    display: flex;
    justify-content: center;
    background: white;
    border-radius: 21px;
    padding-top: 20px;
}


</style>