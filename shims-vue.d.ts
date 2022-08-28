declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string,unknown>, Record<string,unknown>, unknown>
  export default component
}

// declare module 'vueperslides' {
//   import type { DefineComponent } from 'vue'
//   class VueperSlides extends DefineComponent {}
//   class VueperSlide extends DefineComponent {}
// }