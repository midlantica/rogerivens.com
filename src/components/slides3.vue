<template>
  <Flicking :options="{
    align: 'prev',
    circular: true,
    resizeOnContentsReady: true,
    useFractionalSize: true,
    autoplay: true,
    duration: 1000,
    fade: true,
    }" :plugins="plugins"
  >
    <div class="slideWrap">
      <img src="/roger-pic-01.jpg" alt="">
    </div>
    <div class="slideWrap">
      <img src="/roger-pic-06.jpg" alt="">
    </div>
    <div class="slideWrap">
      <img src="/roger-pic-02.jpg" alt="">
    </div>
    <div class="slideWrap">
      <img src="/roger-pic-03.jpg" alt="">
    </div>
    <div class="slideWrap">
      <img src="/roger-pic-04.jpg" alt="">
    </div>
    <div class="slideWrap">
      <img src="/roger-pic-05.jpg" alt="">
    </div>
    <template #viewport>
      <span class="flicking-arrow-prev"></span>
      <span class="flicking-arrow-next"></span>
    </template>
  </Flicking>
</template>

<script setup>
  import Flicking from "@egjs/vue3-flicking";
  import "@egjs/flicking/dist/flicking.css";
  import { Arrow } from "@egjs/flicking-plugins";
  import "@egjs/flicking-plugins/dist/arrow.css";
  import { AutoPlay } from "@egjs/flicking-plugins";

  const plugins = [new Arrow(), new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true, fade: true })];

</script>

<style lang="scss">
  .slideWrap {
    width: 100%;
    // max-height: 75vh;
    // z-index: 25;
    // margin: auto;

    @media screen and (max-width: 800px) {
      // max-height: 600px;
    }

    img {
      border-radius: 0rem;
      border: 2px solid hsla(0, 0%, 100%, 0.85);
    }
  }

  .flicking-arrow-next:after,
  .flicking-arrow-next:before,
  .flicking-arrow-prev:after,
  .flicking-arrow-prev:before {
    background-color: rgb(116, 0, 0);
    content: "";
    height: 6px;
    position: absolute;
    width: 24px;
}
.flicking-camera {
  // justify-content: center !important;
}
</style>