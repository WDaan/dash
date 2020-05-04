export default {
    props: { position: String, id: Number },
    data() {
        return {
            size: {
                height: 200,
                width: 200
            }
        }
    },
    computed: {
        tileId() {
            return this.id ?? this._uid
        }
    },
    mounted() {
        window.addEventListener('resize', this.resize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resize)
    },
    methods: {
        resize() {
            this.size = {
                height: this.$el.clientHeight,
                width: this.$el.clientWidth
            }
        }
    }
}
