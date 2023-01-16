<template>
  <v-main>
    <section class="py-4">
      <div class="ct-container flex flex-wrap">
        <div class="w-full md:w-1/2 flex flex-col justify-around">
          <h2 class="xl:text-7xl text-4xl text-blue-grey-400 font-medium leading-sung">
            Talking with
            everyone and<br />
            keep secure.
          </h2>
          <template class="hidden md:block">
            <sign-in-card />
          </template>
        </div>
        <div class="block w-full md:w-1/2 py-5">
          <h3 class="text-3xl xl:text-5xl text-end text-blue-grey-400 font-bold">加密聊</h3>
          <img alt="hero" src="/hero.png" />
        </div>
      </div>
      <template class="md:hidden block">
        <sign-in-card class="mx-auto"/>
      </template>
    </section>
  </v-main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import SignInCard from '@/components/SignInCard.vue';
onMounted(() => {

})
</script>
