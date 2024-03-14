<template>
    <div class="card">
        <Calendar 
        placeholder="Выберите дату"   
        v-model="dates" 
        selectionMode="range" 
        :manualInput="false" 
        :style="'height: 30px;'" 
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            dates: null
        };
    }
};
</script>

<style scoped>

.card{
    width: 300px;
}

</style>