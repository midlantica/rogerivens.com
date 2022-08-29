<script setup>
  // import { ref } from "vue";
  import "../../node_modules/vueperslides/dist/vueperslides.css";
  import { VueperSlides, VueperSlide } from "vueperslides";

  // let title = ref('')

  let slide = ""

  let slides = [
    // {
    //   title: "Stranger Things Shooter clip",
    //   // image: "/roger-pic-01.jpg",
    //   video: {
    //     url: "https://www.youtube.com/watch?v=CROD3BxXS9Y&t=44s",
    //     props: {
    //       allow: "autoplay"
    //     }
    //   }
    // },
    {
      title: "Roger Ivens in Stranger Things",
      image: "/roger-pic-01.jpg",
    },
    {
      title: "Roger Ivens",
      image: "/roger-pic-02.jpg",
    },
    {
      title: "Roger Ivens",
      image: "/roger-pic-03.jpg",
    },
    {
      title: "Roger Ivens",
      image: "/roger-pic-04.jpg",
    },
    {
      title: "Roger Ivens",
      image: "/roger-pic-05.jpg",
    },
  ]

</script>


<template>
  <vueper-slides
    fade
    :infinite="true"
    :bullets="true"
    :slide-ratio="16 / 10"
    autoplay
    :video="slide.video"
  >
    <vueper-slide v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
      class="aspect-auto max-h-[90vh] rounded-lg md:rounded-br-[60px] m-auto self-end"
    >
      <template v-slot:loader>
        <i class="icon icon-loader spinning"></i>
        <span>Loading...</span>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

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
    width: 2em;
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
    bottom: 2.7rem !important;
    right: 2rem !important;
    top: initial !important;
    left: initial !important;
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

  .vueperslide__content-wrapper:not(.vueperslide__content-wrapper--outside-top):not(.vueperslide__content-wrapper--outside-bottom) {
      align-items: center  !important;
      display: flex  !important;
      flex: 1 1 auto  !important;
      /* flex-direction: column; */
      /* justify-content: center; */
      text-align: center  !important;
  }
  .vueperslide__content-wrapper:not(.vueperslide__content-wrapper--outside-top):not(.vueperslide__content-wrapper--outside-bottom) {
      height: 10% !important;
      margin: 0rem 0 0 1rem !important;
      /* left: 0; */
  }
</style>
