<template>
    <div>
        <HeaderPage/>
        <Speakers/>
    </div>
</template>

<script>
import HeaderPage from '~/components/HeaderPage.vue'
import Speakers from '~/components/Speakers.vue'

export default {
    components: {
        HeaderPage,
        Speakers
    }
}
</script>