<template>
  <div>
    <Hero/>
    <About/>
    <VideoTeaser/>
    <PhotoHighlight/>
    <Partners/>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import PhotoHighlight from '~/components/PhotoHighlight.vue'
import VideoTeaser from '~/components/VideoTeaser.vue'
import Partners from '~/components/Partners.vue'
import MyFooter from '~/components/Footer.vue'

export default {
  components: {
    Hero,
    About,
    PhotoHighlight,
    VideoTeaser,
    Partners,
    MyFooter
  }
}
</script>