<template>
    <div>
        <Dashboard id="dashboard" :theme="theme"> </Dashboard>
    </div>
</template>

<script>
import Dashboard from '@/components/Dashboard'
import { mapGetters } from 'vuex'

export default {
    name: 'Home',
    computed: {
        ...mapGetters(['getTheme']),
        theme() {
            return this.getTheme()
        }
    },
    components: {
        Dashboard
    }
}
</script>
