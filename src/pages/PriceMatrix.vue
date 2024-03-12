<template>
    <div class="main">
        <nav-bar/>    
        <div class="price">
            <side-bar/>
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
    display: grid;
    grid-template-columns: 300px auto;
}

</style>