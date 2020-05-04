<template>
    <v-card
        elevation="20"
        width="170"
        style="position:fixed; bottom: 15px; right: 15px; "
    >
        <v-list dense rounded class="teal accent-4">
            <AddModal></AddModal>
            <DeleteModal></DeleteModal>
            <v-list-item @click="toggleTheme" link>
                <v-icon class="pr-2 white--text">brightness_7</v-icon>
                <v-list-item-title class="white--text" style="font-size:15px">{{
                    theme
                }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Menu',
    computed: {
        ...mapGetters(['getTheme']),
        theme() {
            return this.getTheme() ? 'Light' : 'Dark'
        }
    },
    methods: {
        toggleTheme() {
            this.$store.commit('TOGGLE_THEME')
        }
    }
}
</script>
