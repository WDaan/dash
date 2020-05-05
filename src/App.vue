<template>
    <v-app>
        <SideMenu v-if="menuType === 'SideMenu'" />
        <MenuButton v-if="menuType === 'MenuButton'" />
        <MenuButtonSmall v-if="menuType === 'MenuButtonSmall'" />
        <MenuCard v-if="menuType === 'MenuCard'" />
        <v-content>
            <AddModal />
            <DeleteModal />
            <SettingsModal />
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
import { mapGetters } from 'vuex'
export default {
    name: 'App',
    computed: {
        ...mapGetters(['getMenuType']),
        menuType() {
            return this.getMenuType()
        }
    }
}
</script>
