<template>
    <div class="notification-card">
        <div class="card-content">
            <span class="card-content-message">{{ notification }}</span>
            <button @click="$emit('remove', notification)" class="remove-button">X</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        notification: {
            type: String,
            required: true,
        }
    },
}
</script>

<style scoped>
.notification-card {
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 15px;
}

.remove-button {
  background-color: #ff6347; /* красный */
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>