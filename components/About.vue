<template>
    <section id="about">
        <div class="container">
            <div class="about-group">
                <div class="row">
                    <div class="gdg col-12 col-md-6">
                        <h3>What is GDG?</h3>
                        <p>Google Developer Group Jogjakarta (GDG Jogjakarta) is an open group of people who are interested in having open discussion about Google technologies. There are many froms of activities like watching videos together, open discussion, or gatherings.</p>
                        <p>About different Google technologies</p>
                        <ul class="products">
                            <li><img src="../assets/img/products/android.svg" alt=""></li>
                            <li><img src="../assets/img/products/kotlin.svg" alt=""></li>
                            <li><img src="../assets/img/products/flutter.svg" alt=""></li>
                            <li><img src="../assets/img/products/google-cloud.svg" alt=""></li>
                            <li><img src="../assets/img/products/firebase.svg" alt=""></li>
                            <li><img src="../assets/img/products/angular.svg" alt=""></li>
                        </ul>
                    </div>
                    <div class="devfest col-12 col-md-6">
                        <h3>What is DevFest?</h3>
                        <p>GDG Devfest is the biggest annual event of GDG Jogjakarta. This is an event for developers and tech-enthusiasts that is led by communities and experts.</p>
                        <p>This year, GDG Jogjakarta presents experts of Android, Web, Machine Learning, Google Cloud, Flutter, Google Assistant, and other Google newest technologies. They will share knowledge and experience with developers and tech-enthusiasts in Yogyakarta in order to support innovations that are useful and empowering the developer community.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="sass" scoped>
    @import "./node_modules/bootstrap/scss/bootstrap"

    #about
        .about-group
            padding: 100px 0 50px 0
            .products
                list-style: none
                padding: 0
                li
                    display: inline-block
                    margin: 0 10px
                    img
                        height: 40px
                li:first-child
                    margin-left: 0

    @include media-breakpoint-down(md)
        #about
            .about-group
                .devfest
                    margin-top: 25px
</style>