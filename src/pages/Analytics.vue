<template>
    <div class="main">
        <side-bar/> 
        <div class="price">
            <nav-bar/>
            <div class="analytics_content">
                <div class="diagram_content">
                    <h3>Статистика</h3>
                    <Diagram/>
                <div class="grafic_content">
                    <grafic/>
                </div>
                <div class="calendar_content">
                    <CalendarComponent></CalendarComponent>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import CalendarComponent from "@/components/Calendar"
import TreeComponent from '@/components/TreeComponent.vue';
import Diagram from '@/components/Diagram.vue'; 
import Grafic from '@/components/Grafic.vue';

export default {
    components: {
        SideBar, NavBar, CalendarComponent,
        TreeComponent, Diagram, Grafic,

    }
}
</script>

<style scoped>
.main{
    display: grid;
    grid-template-columns: 300px auto;
}

.analytics_content{
    background: #e4e4e4;
    width: 100%;
    height: 100vh;
    border-radius: 21px 0 0 0;
    display: grid;
    padding: 30px 60px;
    grid-template-columns: 300px 300px 300px;
}

/* Добавьте стили для компонента Diagram, если это необходимо */
.calendar_content {
  order: 2; /* Большее значение переместит элемент правее */
}

.diagram_content {
  order: 1;
}

.grafic_content {
  order: 3; /* Меньшее значение переместит элемент левее */
}
</style>
