<template>
    <div class="navBar">
        <nav>
            <img src='@/icons/LogoLoginForm.png' class='nav-bar-logo'>
            <a class="nav-link messages" aria-current="page" href=""><i class="pi pi-comment"></i></a>

            <a class="nav-link notification" @click="showNotifications"><i class="pi pi-bell" :style="{color:notification != none && notifications.length > 0 ? 'teal' : ''}"></i></a>
            <div v-if="showNotificationList" class="notifications">
                <p>Уведомления</p>
                <div v-for="notification in notifications" :key="notification.id">
                    <notification-item :notification="notification" @remove="removeNotification"/>
                </div>
            </div>
            <a class="nav-link profile" aria-disabled="true"  @click="$router.push('/profile')"><i class="pi pi-user"></i></a>
        </nav>
    </div>
</template>

<script>

import NotificationItem from "@/components/NotificationItem"

export default{
    components: {
        NotificationItem
    },
    data(){
        return {
            showNotificationList: false,
        }
    },
    props:{
        notifications:{
            type: Array
        }
    },
    methods: {
        showNotifications() {
            this.showNotificationList = !this.showNotificationList;
        },
        removeNotification(notification){
            const index = this.notifications.findIndex(item => item.id === notification.id);
            if (index !== -1) {
            this.notifications.splice(index, 1);
      }
        }
    }, 
    computed: {
        unreadNotificationsCount() {
            return this.notifications.length;
        }
    }
}
</script>


<style scoped>

.navBar {
    background-color: #292929;
    padding:15px;
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
}

.navBar nav{
    display: flex;
}

.nav-link {
    margin-right: 20px;
    cursor: pointer;
}

.nav-link i{
    font-size: 1.5rem;
    color:white
}
.nav-bar-logo{
    height: 40px;
    position: absolute; 
    left: 50%; /* Добавлено */
}

.notifications{
    position: fixed;
    top: 70px;
    right: 20px;
    background-color: white;
    padding: 15px;
    border-radius: 0 0 20px 20px;
    box-shadow: 4px 4px 15px gray;
}

</style>