<script setup>
import { ref, onMounted, watch } from 'vue'
import ChatRoom from '@/components/ChatRoom.vue';
import Pusher from 'pusher-js'
import axios from 'axios'

const msgHistory = ref([])
const messages = ref([])
const textMsg = ref('')
const user = 'Aki'

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('1d293125e55c6e08c85f', {
  cluster: 'ap3'
});

var channel = pusher.subscribe('my-channel');

// channel.bind('my-event', function (data) {
//   messages.value = [ ...messages.value, data ]
//   // app.messages.value.push(JSON.stringify(data));
//   console.log('訊息', messages.value)
// });

channel.bind('msgUpdate', function (dataObj) {
  messages.value = [...messages.value, dataObj]
});



async function sendMsg() {
  if (textMsg.value === '') {
    return alert('請填寫訊息')
  }
  await axios.post('http://localhost:1688/snedMsg', { textMsg: textMsg.value, user })
    .then(res => {
      if (res.data.msg) {
        textMsg.value = ''
      }
    })
    .catch(err => {
      console.log(err)
    })
}

async function showHistory() {
  await axios.get('http://localhost:1688/MsgHistory')
    .then(res => {
      if (res?.data) {
        console.log(res.data)
        msgHistory.value = res.data
      }
    })
    .catch(err => {
      console.log(err)
    })
}

async function reRenderMsg(){
  showHistory()
  messages.value = []
}

onMounted(() => {
  showHistory()
})

</script>

<template>
  <v-app class="container p-2">
    <button class="btn rounded bg-red-500 text-white p-1 w-full my-2" @click="reRenderMsg">
      查看歷史訊息 (更新)
    </button>
    <ul>
      <li v-for="msg in msgHistory">
        {{ msg.username }} : {{ msg.msg }} （{{ new Date(msg.time).getHours() }}:{{new Date(msg.time).getMinutes()}}）
      </li>
    </ul>
    <!-- {{ messages }} -->
    <ul>
      <li v-for="message in messages">
        {{ message.user }} : {{ message.textMsg }} <span class="text-purple-200">（ 剛剛傳送 ）</span>
      </li>
    </ul>
    <input v-model="textMsg" class="bg-purple-100 mr-1 mb-1 ring-2" @keydown.enter="sendMsg" />
    <button class="btn rounded bg-purple-500 text-white p-1" @click="sendMsg">
      發送
    </button>
  </v-app>
</template>
