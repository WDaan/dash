export default {
    props: { position: String, TileId: Number },
    data() {
        return {
            id: null,
            size: null
        }
    },
    created() {
        this.id = this.TileId ?? this._uid
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
