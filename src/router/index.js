import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
import Chat from '@/views/Chat.vue'
import Market from '@/views/Market.vue'
import Member from '@/views/Member.vue'

let history = createWebHistory()
let routes = [
  {
    path: `/`,
    name: 'home',
    component: Home
  },
  {
    path: `/chat`,
    name: 'chat',
    component: Chat
  },
  {
    path: `/market`,
    name: 'market',
    component: Market
  },
  {
    path: `/member`,
    name: 'member',
    component: Member
  }
]


export default createRouter({ history, routes })