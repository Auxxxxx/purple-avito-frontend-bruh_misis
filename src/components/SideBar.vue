<template>
    <div class="sideBg">
        <div class="side_logo">
            <img src="@/icons/LogoLoginForm.png" alt="LOGO" class="side_logo_img">
        </div>
        <aside class="side">
            <!-- SIDE MENU -->
            <div class="side_menu">
                <side-item :iconClass="'pi pi-map'" :sideText="'Локации и категории'"  @click="$router.push('/admin')" />
                <side-item :iconClass="'pi pi-chart-bar'" :sideText="'Ценовая матрица'"  @click="$router.push('/priceMatrix')"/>
                <side-item :iconClass="'pi pi-chart-line'" :sideText="'Аналитика и отчеты'"  @click="$router.push('/analytics')"/>
                <side-item :iconClass="'pi pi-comment'" :sideText="'Сообщения'"  @click="$router.push('/message')"/>
                
            </div>
            <side-item :iconClass="'pi pi-sign-out'" :sideText="'Выход'" @click="$router.push('/')" />
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
    background-color: #fff;  
}

.side_logo{
    text-align: center;
    margin: 20px 0 0 0;
}

.side_logo_img{
    width: 56px;
    height: 48px;
}

.side{
    display: flex;
    flex-direction: column;
    max-height: 100%;
    margin-top: 90px;
}

.side-logo a{
    font-size: 36px;
    font-weight: 500;
    color: #000;
    cursor: pointer;
}

.side_menu{
    margin: 15px 0;
}

</style>