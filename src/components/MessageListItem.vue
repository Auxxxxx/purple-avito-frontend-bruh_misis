<template>
    <div class="card">
        <img src="">
        <div class="card_text">
            <span class="card_text_title">{{ card_title }}</span>
            <span class="card_text_subtitle">{{ card_subtitle }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        card_title: {
            type: String,
            required: true
        },
        card_subtitle:{
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    
</style>