<template>
  <div class="main">
    <side-bar/>
    <div class="chat">
      <nav-bar/>
      <div class="chat-page">
        <div class="sidebar">
          <h2 class="sidebar-title">Пользователи</h2>
          <ul class="user-list">
            <li v-for="user in users" :key="user.id" @click="selectUser(user)">
              {{ user.name }}
            </li>
          </ul>
        </div>
        <div class="chat">
          <div class="chat-content">
            <div class="chat-header">
              <h2 v-if="selectedUser">Чат с {{ selectedUser.name }}</h2>
              <h2 v-else>Выберите пользователя для начала чата</h2>
            </div>
            <div class="chat-messages" v-if="selectedUser">
              <div v-for="message in messages" :key="message.id" :class="{ 'message-from-me': message.sender === 'Вы' }">
                <p>{{ message.text }}</p>
                <small>{{ message.sender }}</small>
              </div>
            </div>
            <div class="chat-input" v-if="selectedUser">
              <input type="text" placeholder="Введите сообщение" v-model="newMessageText" @keydown.enter="sendMessage">
              <button @click="sendMessage">Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Connect components
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';

export default {
  components: {
    NavBar, SideBar
  },
  data() {
    return {
      users: [
        { id: 1, name: 'Варвара' },
        { id: 2, name: 'Надежда' }
      ],
      selectedUser: null,
      messages: [],
      newMessageText: ''
    };
  },
  methods: {
    selectUser(user) {
      this.selectedUser = user;
      this.messages = this.generateRandomMessages();
    },
    generateRandomMessages() {
      const messages = [];
      for (let i = 0; i < 10; i++) {
        messages.push({
          id: i,
          text: 'Случайное сообщение ' + i,
          sender: Math.random() < 0.5 ? 'Варвара' : 'Надежда'
        });
      }
      return messages;
    },
    sendMessage() {
      if (this.newMessageText.trim() !== '') {
        this.messages.push({
          id: this.messages.length + 1,
          text: this.newMessageText,
          sender: 'Вы'
        });
        this.newMessageText = '';
      }
    }
  }
};
</script>

<style scoped>

.main{
    display: grid;
    grid-template-columns: 300px auto;
}

.chat-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: #e4e4e4;
  padding: 20px;
  border-radius: 20px 0 0 0;
  margin: 0;
}

.sidebar {
  width: 25%;
  padding: 10px;
}

.sidebar-title {
  font-size: 20px;
  margin-bottom: 15px;
}

.user-list {
  list-style-type: none;
  padding: 0;
}

.user-list li {
  cursor: pointer;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 3px 3px 20px rgb(113, 111, 111);
  border-radius: 5px;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
  width: 200px;
}

.user-list li:hover {
  background-color: #f0f0f0;
}

.chat {
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
}

.chat-content{
  padding: 20px;
}

.chat-header h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

.chat-messages {
  max-height: 400px;
  overflow-y: auto;
}

.chat-messages .message-from-me p {
  background-color: #d0e7ff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
}

.chat-messages .message-from-me small {
  display: block;
  color: #666;
}

.chat-input {
  margin-top: 20px;
  display: flex;
}

.chat-input input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
}

.chat-input button {
  padding: 10px 20px;
  background-color: #006FEE;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
