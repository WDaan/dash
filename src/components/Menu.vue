<template>
    <v-speed-dial
        v-model="fab"
        direction="top"
        open-on-hover
        transition="slide-y-reverse-transition"
        style="position:fixed; bottom: 20px; right: 20px; z-index: 1"
    >
        <template v-slot:activator>
            <v-btn color="teal accent-4" dark fab small>
                <v-icon class="white--text" v-if="fab"
                    >keyboard_arrow_down</v-icon
                >
                <v-icon class="white--text" v-else>keyboard_arrow_up</v-icon>
            </v-btn>
        </template>
        <v-card class="teal accent-4">
            <AddModal></AddModal>
            <DeleteModal></DeleteModal>
            <v-btn small icon @click="toggleTheme" link>
                <v-icon v-if="theme === 'Light'" class="white--text"
                    >brightness_7</v-icon
                >
                <v-icon v-else class=" white--text">brightness_2</v-icon>
            </v-btn>
        </v-card>
    </v-speed-dial>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Menu',
    data() {
        return { fab: false }
    },
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
