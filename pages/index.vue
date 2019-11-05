<template>
  <div>
    <Hero/>
    <About/>
    <Speaker/>
    <!-- <VideoTeaser/> -->
    <CallToAction/>
    <PhotoHighlight/>
    <Maps/>
    <Partners/>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Speaker from '~/components/Speaker.vue'
import PhotoHighlight from '~/components/PhotoHighlight.vue'
import VideoTeaser from '~/components/VideoTeaser.vue'
import Partners from '~/components/Partners.vue'
import CallToAction from '~/components/CallToAction.vue'
import Maps from '~/components/Maps.vue'
import MyFooter from '~/components/Footer.vue'

export default {
  components: {
    Hero,
    About,
    Speaker,
    PhotoHighlight,
    VideoTeaser,
    Partners,
    CallToAction,
    Maps,
    MyFooter
  }
}
</script>