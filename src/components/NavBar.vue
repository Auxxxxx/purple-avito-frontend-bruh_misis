<template>
    <div class="navBar">
        <nav>
            <img src='@/icons/LogoLoginForm.png' class='nav-bar-logo' >
            <a class="nav-link messages" aria-current="page" href="#"><i class="pi pi-comment"></i></a>

            <a class="nav-link notification" href="#"><i class="pi pi-bell"></i></a>

            <a class="nav-link profile" aria-disabled="true"><i class="pi pi-user"></i></a>
        </nav>
    </div>
</template>

<style scoped>

.navBar {
    background-color: #292929;
    padding:15px;
    display: flex;
    flex-direction: row-reverse;
    position: fixed;
    width: 100%;
}

.navBar nav{
    display: flex;
    float:right;
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
    transform: translateX(-50%);

}
</style>