<template>
    <div>
        <header id="header-page">
            <div class="container">
                <div class="header-page-group d-flex justify-content-center align-items-center">
                    <h1>Speakers</h1>
                </div>
            </div>
        </header>
        <Speakers/>
        <Divider/>
    </div>
</template>

<script>
import HeaderPage from '~/components/HeaderPage.vue'
import Speakers from '~/components/Speakers.vue'
import Divider from '~/components/FooterDivider.vue'

export default {
    components: {
        HeaderPage,
        Divider,
        Speakers
    }
}
</script>