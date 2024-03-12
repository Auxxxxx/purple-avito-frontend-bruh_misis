<template>
    <div class="sidebar">
        <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
            <!-- SIDE MENU -->
                <side-item :iconClass="'pi pi-search'"> <input type="text" placeholder="поиск..." class="side_search_input"></side-item>
                <side-item :iconClass="'pi pi-map'" :sideText="'локации и категории'"  @click="$router.push('/admin')" />
                <side-item :iconClass="'pi pi-dollar'" :sideText="'управление ценами'" @click="$router.push('/controlPrices')"/>
                <side-item :iconClass="'pi pi-chart-bar'" :sideText="'ценовая матрица'"  @click="$router.push('/priceMatrix')"/>
                <side-item :iconClass="'pi pi-chart-line'" :sideText="'аналитика и отчеты'"  @click="$router.push('/analytics')"/>
                <side-item :iconClass="'pi pi-moon'" :sideText="'темная тема'" />
                <side-item :iconClass="'pi pi-bars'" :sideText="'свернуть меню'" @click="ToggleMenu"/>
            </aside>
            <Button label="← Выход" @click="$router.push('/')" class="btn_exit"></Button>
        
    </div>
</template>


<script>
// Подключаем компоненты
import { ref } from 'vue'
import SideItem from "@/components/SideItem";

export default {
    components: {
        SideItem
    },
    setup() {
        // Используем ref для реактивности
        const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

        // Метод для переключения состояния меню
        const ToggleMenu = () => {
            is_expanded.value = !is_expanded.value
            localStorage.setItem("is_expanded", is_expanded.value.toString())
        }

        // Возвращаем методы и свойства, чтобы они были доступны в шаблоне
        return {
            is_expanded,
            ToggleMenu
        }
    }
}
</script>


<style lang="scss" scoped>

.aside{
    display: flex;
    flex-direction: column;
    width:300px;
    overflow: hidden;
    transition: 0.2s ease-out;

    &.is-expanded {
		width: var(--sidebar-width);
    }
    @media (max-width: 300px){
        position: fixed;
        z-index:100;

    }
}

.sidebar{
    width:300px;
    min-height:100vh;
    background: #e4e4e4;
}


.btn_exit{
    border-radius: 15px;
    width: 121px;
    margin: 0 50px;
    position: fixed;
    bottom: 40px;
}
