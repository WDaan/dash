<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
                <v-list-item link v-on="on">
                    <v-icon class="pr-2 white--text">add</v-icon>
                    <v-list-item-title
                        class="white--text"
                        style="font-size:15px"
                        >Add Tile</v-list-item-title
                    >
                </v-list-item>
            </template>

            <v-card>
                <v-form
                    v-model="valid"
                    class="pa-5 pt-10 mx-auto"
                    style="max-width: 300px;"
                >
                    <v-select
                        :items="options"
                        label="Tile"
                        :value="selectedTile"
                        @input="createFormSchema"
                        v-model="selectedTile"
                        solo
                    ></v-select>
                    <v-container class="pb-10">
                        <div v-for="(item, key) in schema" v-bind:key="key">
                            <v-text-field
                                v-if="item.type === 'string'"
                                v-model="item.value"
                                :rules="[
                                    v => !!v || `${item.name} is required`
                                ]"
                                required
                                :label="item.name"
                            ></v-text-field>
                            <v-checkbox
                                v-if="item.type === 'boolean'"
                                :label="item.label"
                                v-model="item.value"
                                required
                            ></v-checkbox>
                        </div>
                    </v-container>
                    <v-btn
                        :disabled="!valid"
                        @click="createAndMountComponent"
                        color="teal accent-4 white--text"
                        >Add Tile</v-btn
                    >
                </v-form>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import Vue from 'vue'
//tiles
import HelloTile from '@/components/Tiles/HelloTile'
import TimeWeatherTile from '@/components/Tiles/TimeWeatherTile'
import TrainTile from '@/components/Tiles/TrainTile'
import PlexTile from '@/components/Tiles/PlexTile'

//register all components
const files = require.context('@/components/Tiles', true, /\.vue$/i)
const components = files.keys().map(
    key =>
        key
            .split('/')
            .pop()
            .split('.')[0]
)

export default {
    data() {
        return {
            dialog: false,
            options: [],
            schema: [],
            selectedTile: null,
            valid: false
        }
    },
    created() {
        this.options = [...components]
        this.selectedTile = this.options[0]
        this.createFormSchema(this.selectedTile)
    },
    methods: {
        getProps(ComponentName) {
            const component = this.$root.$options.components[ComponentName]
            return component.options.props
        },
        createFormSchema(ComponentName) {
            this.schema = []
            let props = this.getProps(ComponentName)
            Object.keys(props).forEach(key => {
                this.schema.push({
                    name: key,
                    type: props[key].type.name.toLowerCase(),
                    label: props[key].label,
                    value: props[key].default
                })
            })
        },
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
</script>
