import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['getTheme']),
        theme() {
            return !this.getTheme() ? 'Light' : 'Dark'
        }
    },
    methods: {
        toggleTheme() {
            this.$store.commit('TOGGLE_THEME')
        },
        toggleModal(name) {
            this.$store.commit('TOGGLE_MODAL', name)
        }
    }
}
