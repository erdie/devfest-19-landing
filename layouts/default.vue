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

<style>
.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
