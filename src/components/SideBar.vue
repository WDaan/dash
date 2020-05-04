<template>
    <v-navigation-drawer style="background-color: var(--bg-screen);" app mini-variant permanent>
        <v-list dense class="teal accent-4">
            <AddModal></AddModal>
            <DeleteModal></DeleteModal>
            <v-list-item @click="toggleTheme" link>
                <v-icon v-if="theme === 'Light'" class="white--text">brightness_7</v-icon>
                <v-icon v-else class="white--text">brightness_2</v-icon>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Menu',
    computed: {
        ...mapGetters(['getTheme']),
        theme() {
            return !this.getTheme() ? 'Light' : 'Dark'
        }
    },
    methods: {
        toggleTheme() {
            this.$store.commit('TOGGLE_THEME')
        }
    }
}
</script>
