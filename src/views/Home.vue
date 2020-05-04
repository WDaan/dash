<template>
    <div>
        <Dashboard id="dashboard" :theme="theme"> </Dashboard>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Home',
    computed: {
        ...mapGetters(['getTheme']),
        theme() {
            return this.getTheme()
        }
    }
}
</script>
