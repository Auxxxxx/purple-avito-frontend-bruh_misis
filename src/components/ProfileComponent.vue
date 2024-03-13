<template lang="">
    <div class="profile_foto_title">
        <h1>Профиль</h1>
        <div class="profile_photo">
        <img src="@/icons/sleep.jpg" alt="Sleep Man" class="profile_photo_img">
    </div>
    </div>
        <div class="profile_info">
            <ul>
                <li><strong>имя:</strong> {{ name }}</li>
                <li><strong>фамилия</strong> {{ last_name }}</li>
                <li><strong>отчество:</strong> {{ surname }}</li>
                <li><strong>дата Рождения:</strong> {{ dateBirthday }}</li>
                <li><strong>должность:</strong> {{ job_title }}</li>
                <li><strong>пол:</strong> {{ gender }}</li>
            </ul>
        </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        dateBirthday: {
            type: String,
            required: true
        },
        job_title: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
    }
}
</script>
<style scoped>
.profile_photo_title{
    display: grid;
}

.h1{
    font-size:50px;
    font-weight: bold;
}

.profile_photo{
    background: #F2F2F2;
    width: 300px;
    height: 320px;
    border-radius: 8px;
}

.profile_photo_img{
    height: inherit;
    width: inherit;
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