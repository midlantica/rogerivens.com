<template>
  <vueper-slides
    fade
    :infinite="false"
    :bullets="false"
    :slide-ratio="1 / 1.3"
    autoplay
    fractions
    progress
  >
    <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image">
      <template v-slot:loader>
        <i class="icon icon-loader spinning"></i>
        <span>Loading...</span>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

// let title = ref('')
// const imgPath = ('/public/img/portfolio/01_uiux/')
let slides = [
  {
    image: "/roger-pic.jpg",
  },
  {
    image: "https://picsum.photos/643/929",
  },
  {
    image: "https://picsum.photos/643/929",
  },
  {
    image: "https://picsum.photos/643/929",
  },
]
</script>

<style lang="scss">
  @import "../../assets/css/carousel.scss";
</style>
