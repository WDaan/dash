import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['getTheme']),
        theme() {
            return !this.getTheme()
        }
    }
}
