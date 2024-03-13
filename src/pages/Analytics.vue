<template>
    <div class="main">
        <nav-bar/>    
        <div class="price">
            <side-bar/>
            <div class="analytics_content">
                <calendar-component/>
                <h3>Статистика</h3>
                <diagram-vue/>
            </div>
        </div>
    </div>
</template>

<script>


import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import CalendarComponent from "@/components/Calendar"

export default {
    components: {
        SideBar, NavBar, CalendarComponent
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

.analytics_content{
    padding: 30px 60px;
}

</style>