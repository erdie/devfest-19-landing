<template>
    <div>
        <header id="header-page">
        <div class="container">
                <div class="header-page-group d-flex justify-content-center align-items-center">
                    <h1>Schedule</h1>
                </div>
            </div>
        </header>
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