<template>
    <footer>
        <div class="container">
            <div>

            </div>
            <div class="copyright d-flex justify-content-between">
                <div>
                    <img src="../assets/img/gdg-logo-dark.svg" alt="">
                </div>
                <p>&#9400; GDG Jogjakarta. Made with <span>&#x2665;</span> in Yogyakarta</p>
            </div>
        </div>
    </footer>
</template>

<style lang="sass" scoped>
    @import "./node_modules/bootstrap/scss/bootstrap"

    footer
        background-color: #f8f9fa
        padding: 30px 0
        span
            color: red
        .copyright
            img 
                height: 22px
            p
                font-size: 14px
                margin: 0
    
    @include media-breakpoint-down(md)
        footer
            .copyright
                flex-direction: column
                text-align: center
                p
                    margin-top: 15px
</style>