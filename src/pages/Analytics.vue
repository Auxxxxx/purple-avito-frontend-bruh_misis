<template>
    <div class="main">
        <side-bar/> 
        <div class="price">
            <nav-bar/>
            <div class="analytics_content">
                <div class="calendar_content">
                    <calendar-component/>
                    <h3>Статистика</h3>
                    <!-- Используйте компонент Diagram вместо div с классом "diagram" -->
                    <Diagram/>
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
import Diagram from '@/components/Diagram.vue'; // Убедитесь, что Diagram правильно импортирован

export default {
    components: {
        SideBar, NavBar, CalendarComponent,
        TreeComponent, Diagram // Убедитесь, что Diagram зарегистрирован здесь
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
.diagram {
    /* Пример стилей */
    width: 100%;
    height: 400px; /* Настройте высоту по мере необходимости */
}
</style>
