import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
import Chat from '@/views/Chat.vue'
import Market from '@/views/Market.vue'
import Member from '@/views/Member.vue'

const base = ''

let history = createWebHistory()
let routes = [
  {
    path: `${base}/`,
    name: 'home',
    component: Home
  },
  {
    path: `${base}/chat`,
    name: 'chat',
    component: Chat
  },
  {
    path: `${base}/market`,
    name: 'market',
    component: Market
  },
  {
    path: `${base}/member`,
    name: 'member',
    component: Member
  }
]


export default createRouter({ history, routes })