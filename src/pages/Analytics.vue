<template>
    <div class="main">
        <side-bar/> 
        <div class="analytics">
        <NavBar></NavBar>
        <div class="analytics_content">
            <div class="diagram_content">
                <h3>Статистика</h3>
                <Diagram/>
            </div>
            <div class="grafic_content">
                <h3>Анализ данных</h3>
                <grafic/>
            </div>
            <div class="calendar_content">
                <CalendarComponent></CalendarComponent>
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
    grid-template-columns: 300px auto; /* Четыре колонки: боковая панель и три для компонентов */
}

.analytics_content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* Три колонки для компонентов */
    gap: 20px; /* Отступы между колонками */
    padding: 30px 60px;
    background: #e4e4e4;
    height: 100vh;
    border-radius: 21px 0 0 0;
}

/* Стили для компонентов */
.diagram_content {
    background: white;
    height: 30%;
    border-radius: 30px; /* Уменьшенная высота для диаграммы */
}

.grafic_content {
    background: white;
    height: 50%;
    border-radius: 30px;  /* Высота для графика остается прежней */
}

.calendar_content {
    width: 100%; 
}

.diagram_content h3, .grafic_content h3 {
    font-weight: 700;
    text-align: center;
    font-size: 32px;
}
</style>
