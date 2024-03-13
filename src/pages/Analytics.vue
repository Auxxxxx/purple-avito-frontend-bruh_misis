<template>
    <div class="main">
        <side-bar/> 
        <div class="analytics">
        <NavBar></NavBar>
        <div class="analytics_content">
            <div class="analytics_wrapper">
            <div class="diagram_content">
                <h3>Статистика</h3>
                <Diagram/>
            </div>
            <div class="grafic_content">
                <h3>Анализ данных</h3>
                <grafic/>
            </div>
            <div class="calendar_content">
                <div class="Calendar">
                <CalendarComponent></CalendarComponent>
            </div>
                <tree-component></tree-component>
            </div>
        </div>
        <div class="grafic_vertical">
            <VerticalGrafic></VerticalGrafic>
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
import VerticalGrafic from '@/components/VerticalGrafic.vue';
export default {
    components: {
        SideBar, NavBar, CalendarComponent,
        TreeComponent, Diagram, Grafic, VerticalGrafic
    }
}
</script>

<style scoped>
.main{
    display: grid;
    grid-template-columns: 300px auto; 
}

.analytics_content {

    background: #e4e4e4;
    border-radius: 21px;
    padding: 30px 60px;
    height: 100vh;

}

.analytics_wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    gap: 20px; 
    border-radius: 21px 0 0 0;
}
.diagram_content {
    background: white;
    height: 50%;
    border-radius: 30px; 
}

.grafic_content {
    background: white;
    height: 50%;
    border-radius: 30px;  
}

.calendar_content {
    width: 100%; 
}

.diagram_content h3, .grafic_content h3 {
    font-weight: 700;
    text-align: center;
    font-size: 32px;
}
.grafic_vertical{
    margin-top: 20px;
    width: 65%;
}
.Calendar{
    margin-left: 30px;
}
</style>
