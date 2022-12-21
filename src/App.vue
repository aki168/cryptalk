<script setup>
import { ref, onMounted } from 'vue'
import ChatRoom from '@/components/ChatRoom.vue';

// const counter = ref(10)
// const add = () => { counter.value++ }
// onMounted(() => {
//   console.log(`初始值是${counter.value}`)
// })

// const drawer = null
</script>

<template>
  <v-app>
    <ChatRoom />
    <!-- <div class="py-3 flex flex-col">
      <p class="text-overline text-center">{{ counter }}</p>
      <v-btn @click="add" variant="flat" color="primary" class="w-50 mx-auto">
        Click Me!
      </v-btn>
    </div> -->

  </v-app>
</template>
