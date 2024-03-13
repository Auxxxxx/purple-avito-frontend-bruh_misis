<template>
    <div class="main">
        <side-bar/>    
        <div class="profile">
            <nav-bar/>
            <div class="profile_wrapper">
                <div class="profile_content">
                    <profile-component 
                    :name="'Сова'" 
                    :last_name="'Филинский'" 
                    :surname="'Савельевич'" 
                    :dateBirthday="'13.03.2015'" 
                    :job_title="'Ночной сторож'" 
                    :gender="'Хрен его знает :)'" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>


<script>


import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import ProfileComponent from "@/components/ProfileComponent"

export default {
    components: {
        SideBar, NavBar, ProfileComponent
    }
}
</script>

<style scoped>

.main{
    display: grid;
    grid-template-columns: 300px auto;
}

.profile_wrapper{
    padding: 25px 80px;
    background: #e4e4e4;
    width: 100%;
    height: 100vh;
    border-radius: 21px 0 0 0;
}

.profile_content{
    background: white;
    width: 80%;
    height: 430px;
    border-radius: 21px;
    display: grid;
    padding: 20px 0 0 30px;
    grid-template-columns: 300px auto; 
}
</style>