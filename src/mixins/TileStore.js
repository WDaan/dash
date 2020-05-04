//tiles
import Vue from 'vue'

import HelloTile from '@/components/Tiles/HelloTile'
import TimeWeatherTile from '@/components/Tiles/TimeWeatherTile'
import TrainTile from '@/components/Tiles/TrainTile'
import PlexTile from '@/components/Tiles/PlexTile'

export default {
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
            delete props.id
            //convert tile to json object
            let state = {
                id: tile.tileId,
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
