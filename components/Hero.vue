<template>
    <section id="hero">
        <div class="hero-bg"></div>
        <div class="container">
            <div class="hero-group d-flex justify-content-center align-items-center">
            </div>
        </div>
    </section>
</template>

<style lang="sass" scoped>
    .hero-bg
        height: 100vh
        background-image: url('../assets/img/devfest.svg')
        background-position: center center
        background-size: cover
    #hero
        height: 100vh
        position: relative
        .hero-group
            position: absolute
            color: white
            top: 0
</style>