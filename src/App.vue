<template>
    <div id="app">
        <v-app>
            <v-content>
                <router-view />
            </v-content>
            <Menu />
        </v-app>
    </div>
</template>

<style>
::-webkit-scrollbar {
    display: none;
}
</style>

<script>
import '@/assets/main.css'
export default {
    name: 'App'
}
</script>
