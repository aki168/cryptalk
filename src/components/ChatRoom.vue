<template>
  <v-layout>
    <v-system-bar app>
      <v-spacer></v-spacer>
      <v-icon>mdi-square</v-icon>
      <v-icon>mdi-circle</v-icon>
      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer v-model="drawer" width="60" class="py-3 bg-slate-100" absolute mini-variant>
      <v-avatar class="block text-center mx-auto pt-2 bg-slate-300" size="36"></v-avatar>
      <v-divider class="mx-3 my-5"></v-divider>
      <v-avatar v-for="n in 6" :key="n" class="block text-center mx-auto mb-9 bg-slate-300" size="28"></v-avatar>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="drawer" app width="300">
      <v-sheet class="bg-slate-100 p-1" height="128" width="100%">
        SHEET
      </v-sheet>
      <v-list class="pl-14" shaped>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-content>
            <v-list-item-title>Item {{ n }} L</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" app clipped-right flat height="72">
      <v-spacer></v-spacer>
      <v-responsive max-width="156" class="m-2">
        <v-text-field dense flat hide-details rounded solo-inverted></v-text-field>
      </v-responsive>
    </v-app-bar>

    <v-main>
      <iframe src="https://next-test-aki168.vercel.app/" width="100%" height="100%" allow="geolocation">
        chat room iframe
      </iframe>
    </v-main>
    <!-- <v-navigation-drawer app clipped location="right">
        <v-list>
          <v-list-item v-for="n in 5" :key="n" link>
            <v-list-item-content>
              <v-list-item-title>Item {{ n }} R</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer> -->

    <!-- <v-footer app color="transparent" height="72" inset>
      <v-text-field background-color="grey lighten-1" dense flat hide-details rounded solo></v-text-field>
    </v-footer> -->
  </v-layout>
</template>

<script setup>
import { onMounted, ref } from 'vue';
onMounted(() => {
})

const drawer = ref(null)

</script>
