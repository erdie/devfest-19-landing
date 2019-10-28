<template>
  <div>
    <Header/>
    <Hero/>
    <About/>
    <VideoTeaser/>
    <PhotoHighlight/>
    <!-- <nuxt/> -->
    <Partners/>
    <my-footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import PhotoHighlight from '~/components/PhotoHighlight.vue'
import VideoTeaser from '~/components/VideoTeaser.vue'
import Partners from '~/components/Partners.vue'
import MyFooter from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Hero,
    About,
    PhotoHighlight,
    VideoTeaser,
    Partners,
    MyFooter
  }
}
</script>