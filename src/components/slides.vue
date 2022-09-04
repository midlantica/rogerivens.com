<script setup>
  // import { ref } from "vue";
  import { VueperSlides, VueperSlide } from "vueperslides";
  import "../../node_modules/vueperslides/dist/vueperslides.css";

  const slides = [
    {
      // title: 'Slide #2',
      // content: 'Slide content.',
      image: "roger-pic-01.jpg",
    },
    {
      // title: 'Slide #1',
      // content: 'Slide content.',
      image: "roger_ivens_reel_still_02.jpeg",
      // video: {
      //   video: {
      //     mp4: `/roger_ivens_acting_reel_2022.mp4`,
      //     props: {
      //       autoplay: true,
      //       loop: false,
      //       controls: true,
      //       muted: false
      //     }
      //   }
      // }
    },
    {
      // title: 'Slide #2',
      // content: 'Slide content.',
      image: "roger-pic-02.jpg",
    },
    {
      // title: 'Slide #3',
      // content: 'Slide content.',
      image: "roger-pic-03.jpg",
    },
    {
      // title: 'Slide #3',
      // content: 'Slide content.',
      image: "roger-pic-04.jpg",
    },
    {
      // title: 'Slide #3',
      // content: 'Slide content.',
      image: "roger-pic-05.jpg",
    },
  ]
</script>

<template>
  <vueper-slides
    fade
    :infinite="false"
    :bullets="false"
    autoplay
    lazy
    lazy-load-on-drag
    :fixed-height="true"
    :slide-ratio="1 / 2"
  >
    <vueper-slide v-for="(slide, i) in slides"
      :key="i" :image="slide.image" :video="slide.video"
      class="rounded-lg"
    >
      <template v-slot:loader>
        <i class="icon icon-loader spinning"></i>
        <span>Loading...</span>
      </template>
    </vueper-slide>
  </vueper-slides>

</template>

<style lang="scss" scoped>

  .vueperslide {
    border: 3px solid hsla(41, 70%, 78%, 0.75);
    // box-shadow: 3px 3px 0px 0 hsla(0, 0%, 0%, 0.5);
  }

  .vueperslides--fixed-height {
    height: 90vh;

    @media screen and (max-width: 800px) {
      min-height: 30vh;
    }
  }

  .vueperslides__arrow svg {
    stroke: currentColor;
    fill: none;
    stroke-width: 1;
    box-sizing: border-box;
    padding: 1em;
    transition: .3s ease-in-out;
    vertical-align: middle;
    width: 3em !important;
  }

</style>
