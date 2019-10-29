<template>
    <div>
        <HeaderPage/>
        <Schedule/>
    </div>
</template>

<script>
import HeaderPage from '~/components/HeaderPage.vue'
import Schedule from '~/components/Schedule.vue'

export default {
    components: {
        HeaderPage,
        Schedule
    }
}
</script>