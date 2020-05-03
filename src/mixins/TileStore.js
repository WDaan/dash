//tiles
import Vue from 'vue'

import HelloTile from '@/components/Tiles/HelloTile'
import TimeWeatherTile from '@/components/Tiles/TimeWeatherTile'
import TrainTile from '@/components/Tiles/TrainTile'
import PlexTile from '@/components/Tiles/PlexTile'

export default {
    props: { position: String },
    data() {
        return {
            id: null,
            size: null
        }
    },
    created() {
        this.id = this._uid
    },
    mounted() {
        window.addEventListener('resize', this.resize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resize)
    },
    methods: {
        createComponent(name, props) {
            //require component
            let ComponentClass = this.requireTile(name)

            //instantiate
            return new ComponentClass({
                propsData: props
            })
        },
        mountComponent(component) {
            component.$mount()

            //add to dom
            document.getElementById('dashboard').appendChild(component.$el)
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
            //get props
            let props = tile.$options.props

            //convert tile to json object
            let state = {
                id: tile._uid,
                tileName: tile.$options.name
            }
            Object.keys(props).forEach(key => {
                state[key] = tile[key]
            })

            //add to store
            this.$store.commit('ADD_TILE', state)
        }
    }
}
