<template>
  <div class="q-pa-md">
    <q-parallax :height="300" :speed="0.5">
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax1.jpg">
      </template>

      <h1 class="text-white text-h4">The Weekly Message</h1>
    </q-parallax>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>
