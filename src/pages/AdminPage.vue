<template>
    <div class="main">
        <side-bar/>
        <div class="admin">
            <nav-bar :notifications="notifications"/>
            <div class="admin_content_wrapper">
                <div class="admin_content">
                    <div class="admin_content_left">
                        <h3>Выберите локацию</h3>
                        <tree-component/>
                    </div>
                    <div class="admin_content_right">
                        <h3>Выберите категорию</h3>
                        <tree-component/> 
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
    height: 100%;
    border-radius: 21px 0 0 0;
}

.admin_content{
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 75px;
}

.admin_content_left, .admin_content_right{
    margin: 0px 20px 0px 0px;
    background-color: #fff;
    border-radius: 14.3px;
    box-shadow: 4px 0px 11px #E6E6E6, -4px 0px 8px #E6E6E6;
    display: flex; 
    flex-direction: column;
    justify-content: center;
}
.admin_content_left h3{
    font-weight: 700;
    text-align: center;
    margin-top:20px;
}
.admin_content_right h3{
    font-weight: 700;
    text-align: center;
    margin-top:20px;
}
.map_content {
  display: flex;
  justify-content: center; 
  align-items: center; 
  background: white;
  border-radius: 21px;
  padding-top: 20px;
  width: 90%;
  margin: 0 auto;
  padding-bottom:20px; 
}


</style>