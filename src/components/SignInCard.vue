<template>
  <v-card class="bg-stone-100" width="400px">
    <v-card-title class="my-2">
      <v-icon color="primary" icon="mdi-gift" />
      Trade Bitcoin for free
      <v-icon color="accent" icon="mdi-chevron-right" />
    </v-card-title>
    <v-card-item>
      <v-btn color="primary" class="mb-2 w-full">
        <v-icon icon="mdi-account" />
        sign up with Email or Phone
      </v-btn>
    </v-card-item>
    <v-card-subtitle class="text-center">
      or continue with
    </v-card-subtitle>
    <v-divider class="mx-2" />
    <v-card-item>
      <div class="grid grid-cols-2 gap-2 mb-2">
        <v-btn variant="tonal" class="block my-1 text-slate-600 bg-slate-200">
          <v-icon color="success" icon="mdi-google" />
          Google
        </v-btn>
        <v-btn variant="tonal" class="block my-1 text-slate-600 bg-slate-200">
          <v-icon color="info" icon="mdi-apple" />
          Apple
        </v-btn>
      </div>
    </v-card-item>
  </v-card>
</template>

<script>
export default{
  setup(){

  }
}
</script>