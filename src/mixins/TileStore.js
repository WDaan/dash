export default {
    data() {
        return {
            schema: [],
            valid: false
        }
    },
    methods: {
        saveComponentToStore(tile) {
            //add to store
            this.$store.commit('ADD_TILE', tile)
        },
        getProps(ComponentName) {
            const component = this.$root.$options.components[ComponentName]
            return component.options.props
        },
        createFormSchema(ComponentName, tile) {
            this.schema = []
            let props = this.getProps(ComponentName)
            Object.keys(props).forEach(key => {
                this.schema.push({
                    name: key,
                    type: props[key].type.name.toLowerCase(),
                    label: props[key].label,
                    value: tile?.props[key] ?? props[key].default
                })
            })
        },
        formatProps() {
            let propsData = {}
            this.schema.forEach(el => {
                propsData[el.name] = el.value
            })

            return propsData
        }
    }
}
