<template>
    <v-app>
        <Menu/>
        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>
<style>
::-webkit-scrollbar {
    display: none;
}
</style>

<script>
import '@/assets/main.css'
export default {
    name: 'App',
    data: () => ({
        drawer: null
    })
}
</script>
