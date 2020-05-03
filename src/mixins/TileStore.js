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
        createAndMountComponent() {
            //get props
            let propsData = {}
            this.schema.forEach(el => {
                propsData[el.name] = el.value
            })

            //require component
            let ComponentClass = this.requireTile(this.selectedTile)

            //instantiate
            let instance = new ComponentClass({
                propsData
            })
            instance.$mount()
            //add to dom
            document.getElementById('dashboard').appendChild(instance.$el)

            this.saveComponentToStore(instance)

            //close dialog
            this.dialog = false

            //reset inputs
            this.schema = []
            this.createFormSchema(this.selectedTile)

            //success notification
            this.$toast.success('Tile added successfully')
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
            console.log(tile)
            let props = tile.$options.props
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
