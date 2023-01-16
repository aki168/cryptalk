<script setup>
// import { ref, onMounted, watch } from 'vue'
// import axios from 'axios'
// const msgHistory = ref([])
// const messages = ref([])
// const textMsg = ref('')



</script>

<template>
  <v-app>
    <v-layout class="pb-4">
      <v-app-bar color="primary" app clipped-right flat >
      </v-app-bar>
      <router-view/>
    </v-layout>
    <v-footer app color="primary" inset>
    </v-footer>
  </v-app>
</template>
