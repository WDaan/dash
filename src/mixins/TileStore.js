//tiles
import Vue from 'vue'

/** TODO: this should happen dynamically or not at all */
import HelloTile from '@/components/Tiles/HelloTile'
import TimeWeatherTile from '@/components/Tiles/TimeWeatherTile'
import TrainTile from '@/components/Tiles/TrainTile'
import PlexTile from '@/components/Tiles/PlexTile'

export default {
    data() {
        return {
            schema: [],
            valid: false
        }
    },
    methods: {
        createComponent(name, props, store) {
            //require component
            let ComponentClass = this.requireTile(name)

            //instantiate
            return new ComponentClass({
                propsData: props,
                store
            })
        },
        requireTile(name) {
            switch (name) {
                case 'HelloTile':
                    return Vue.extend(HelloTile)
                case 'TimeWeatherTile':
                    return Vue.extend(TimeWeatherTile)
                case 'TrainTile':
                    return Vue.extend(TrainTile)
                case 'PlexTile':
                    return Vue.extend(PlexTile)
                default:
                    return
            }
        },
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
