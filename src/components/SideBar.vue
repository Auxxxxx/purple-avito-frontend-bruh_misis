<template>
    <div class="sideBg">
        <div class="side_search">
            <i class="pi pi-search"></i>
            <input type="text" placeholder="поиск..." class="side_search_input">
        </div>
        <aside class="side">
            <!-- SIDE MENU -->
            <div class="side_menu">
                <side-item :iconClass="'pi pi-map'" :sideText="'локации и категории'"  @click="$router.push('/admin')" />
                <side-item :iconClass="'pi pi-dollar'" :sideText="'управление ценами'"  @click="$router.push('/controlPrices')"/>
                <side-item :iconClass="'pi pi-chart-bar'" :sideText="'ценовая матрица'"  @click="$router.push('/priceMatrix')"/>
                <side-item :iconClass="'pi pi-chart-line'" :sideText="'аналитика и отчеты'"  @click="$router.push('/analytics')"/>
                <side-item :iconClass="'pi pi-moon'" :sideText="'темная тема'"/>
                <side-item :iconClass="'pi pi-bars'" :sideText="'свернуть меню'"/>
            </div>
            <Button label="← Выход" @click="$router.push('/')" class="btn_exit"></Button>
        </aside>
    </div>
</template>


<script>
//Connect components
import SideItem from "@/components/SideItem";

export default {
    components: {
        SideItem
    },
}

</script>


<style scoped>

.sideBg{
    background-color: #e4e4e4;  
}

.side_search{
    display: flex;
    gap: 15px;
    align-items: center;
    margin: 25px 0 0 59px;
}

.side_search_input{
    font-family: 'Soyuz Grotesk', sans-serif;
    font-weight: 700;
    height: 26px;
    width: 195px;
    font-size: 12px;
    border-radius: 5px;
    border: 1px solid #C6C6C6;
}

.side{
    width: 300px;
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.side-logo{
    margin: 14px 0 0 60px;
}

.side-logo a{
    font-size: 36px;
    font-weight: 500;
    color: #000;
    cursor: pointer;
}

.side-logo img{
    height: 35px;
}

.side_menu{
    margin: 15px 0;
}

.btn_exit{
    border-radius: 15px;
    width: 121px;
    margin: 0 50px;
    position: fixed;
    bottom: 40px;
}


</style>