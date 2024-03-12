<template>
    <div class="main">
        <side-bar/>
        <div class="price">
            <nav-bar/>
            <div class="price_content">
                <matrix-prime />
            </div>
        </div>
    </div>
</template>

<script>

import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import MatrixComponent from '@/components/MatrixComponent';
import MatrixPrime from '@/components/MatrixPrime';

export default {
    components: {
        SideBar, NavBar, MatrixComponent, MatrixPrime
    }
}
</script>

<style scoped>

.main{
    background: #e4e4e4;
}
.price{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
}
.price_content {
    position:relative;
    margin-top:60px;
    margin-left:200px;
}

</style>