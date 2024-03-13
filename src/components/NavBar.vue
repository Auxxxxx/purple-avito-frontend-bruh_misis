<template>
    <div class="navBar">
        <input type="search" placeholder="Поиск" class="navBar-search">
        <nav>
            <a class="nav-link notification" @click="showNotifications"><i class="pi pi-bell" :style="{color:notifications != none && notifications.length > 0 ? 'light-green' : 'black'}"></i></a>
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
    background-color: #fff;
    padding:15px;
    display: flex;
    justify-content: space-between;
}

.navBar-search{
    width: 300px;
    height: 54px;
    border-radius: 55px;
    border: none;
    background-color: #F7F8FA;
    padding: 5px;
}

.navBar-search:hover, .navBar-search:focus{
    border: 1px solid #a7f3d0;
    box-shadow: 4px 4px 5px #a7f3d0, -4px -4px 5px #a7f3d0;
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