<template>
  <vueper-slides
    fade
    :infinite="false"
    :bullets="false"
    :slide-ratio="16 / 10"
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

<script setup>
  // import { ref } from "vue";
  import "../../node_modules/vueperslides/dist/vueperslides.css";
  import { VueperSlides, VueperSlide } from "vueperslides";
  // import vueperslides from 'vueperslides';
  // const { VueperSlides, VueperSlide } = vueperslides;

  // let title = ref('')
  // const imgPath = ('/public/img/portfolio/01_uiux/')
  let slides = [
    {
      image: "/roger-pic.jpg",
    },
    {
      image: "/roger-pic_02.jpg",
    },
    {
      image: "/roger-pic_03.jpg",
    },
    {
      image: "/roger-pic_04.jpg",
    },
  ]
</script>

<style lang="scss" scoped>
  $mortar: .25rem;
  $modernCol: white;
  $ruby: hsla(340, 76%, 48%, 1);
  $grey: rgb(185, 185, 185);

  .vueperslides__arrow {
    color: rgb(67, 67, 67);
    // text-shadow: 2px 2px 2px red;
    // >>>>
    // fill: none;
    // stroke: red;
    // stroke-width: 10px;
    // stroke-linejoin: round;
    stroke-linejoin: round;
    filter:
      drop-shadow(-1px -1px 1px hsla(0, 0%, 100%, 0.5))
      drop-shadow(1px -1px 1px hsla(0, 0%, 100%, 0.5))
      drop-shadow(1px 1px 1px hsla(0, 0%, 100%, 0.5))
      drop-shadow(-1px 1px 1px hsla(0, 0%, 100%, 0.5));

    &:hover {
      stroke: rgb(255, 255, 255);
      stroke-width: 2px;
    }
  }

  .vueperslides__arrow svg {
    // vertical-align: middle;
    // stroke: currentColor;
    // fill: none;
    width: 3em;
    // padding: 1em;
    // -webkit-box-sizing: border-box;
    // box-sizing: border-box;
    // stroke: black;
    // stroke-width: 1px;

    &:hover {
      // color: white !important;
      // stroke-width: 2px;
    }

  }

  .vueperslides__arrow svg:hover path {
    stroke: rgb(211, 0, 0);
    stroke-width: 2px;

    &:hover {
      // stroke: greenyellow;
      stroke-width: 2px;
    }
  }

  .vueperslides__progress {
    color: hsla(98, 100%, 37%, 0.5);
    border: 1px solid hsla(0, 0%, 100%, 0.25);
    // top: initial;
    top: calc(100% - 4px);
    height: 4px;
    // border: 1px solid magenta;
  }

  .vueperslides__fractions {
    position: absolute;
    top: initial;
    left: initial;
    bottom: $mortar !important;
    right: $mortar !important;
    z-index: 2;
    padding: 0.15em 0.5em;
    border: 1px solid hsl(0deg 0% 100% / 27%);
    border-radius: 0.4em;
    background: hsl(0deg 0% 32% / 32%);
    color: hsl(0deg 0% 100%);
    font-family: Helvetica, Arial, sans-serif !important;
  }

  .fullScreen {
    cursor: pointer;
  }

  .carouselArrow {
    font-size: 0.7em;
    color: $grey;
    border: none;
    border-radius: 4px;
    border-left-width: 10px;
    background: transparentize(white, 0.95);
    padding: 0.15rem .5rem 0.16rem .4rem;
    margin: 0rem 0 0 0em;
    font-family: Helvetica, Arial, sans-serif;
    cursor: pointer;
    position: absolute;
    // z-index: 100;
    box-shadow: 2px 2px 2px white;

    &:hover {
      // background: grey;
      background: transparentize(black, .90);
      // font-weight: bold;
      // color: $accent-red
    }
  }



  .box {
    //

    &:hover {
      //
      .brickBack {
        fill: hsla(0, 100%, 57%, 0.25);
        transition: fill 10s ease-out;
      }
      .brickCircles {
        fill: hsla(0, 100%, 57%, 0.25);
        transition: fill 10s ease-out;
      }
    }
  }

</style>
