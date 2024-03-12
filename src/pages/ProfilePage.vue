<template>
    <div class="main">
        <nav-bar/>    
        <div class="profile">
            <side-bar/>
            <div class="profile_content">
                <div class="profile_foto_title">
                    <h1>Профиль</h1>
                    <div class="profile_photo"></div>
                </div>
                <div class="profile_info">
                    <ul>
                        <li>имя: </li>
                        <li>фамилия: </li>
                        <li>отчество: </li>
                        <li>дата Рождения: </li>
                        <li>должность: </li>
                        <li>пол: </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<script>


import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';

export default {
    components: {
        SideBar, NavBar
    }
}
</script>

<style scoped>

.main{
    background: #e4e4e4;
}
.profile{
    display: grid;
    grid-template-columns: 300px auto;
}
.profile_content{
    background: white;
    width:1500px;
    height: 50%;
    margin-top:30px;
    border-radius: 21px;
    display: grid;
    padding: 20px 0 0 30px;
    grid-template-columns: 20% 80%;
    
}
.profile_photo_title{
    display: grid;
}
.h1{
    font-size:50px;
    font-weight: 700;
}
.profile_photo{
    background: #F2F2F2;
    width: 300px;
    height: 320px;
    border-radius: 8px;
}
.profile_info ul li {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 40px; /* Установка расстояния между элементами списка */
}
.profile_info{
    margin-top: 60px;
    
}
</style>