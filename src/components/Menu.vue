<template>
    <v-card
        elevation="20"
        width="170"
        style="position:fixed; bottom: 15px; right: 15px; "
    >
        <v-list dense rounded class="teal accent-4">
            <AddModal></AddModal>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                v-on:click="item.method"
                link
            >
                <v-icon class="pr-2 white--text">{{ item.icon }}</v-icon>
                <v-list-item-title class="white--text" style="font-size:15px">{{
                    item.title
                }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
import Vue from 'vue'
import HelloTile from '@/components/Tiles/HelloTile'
import TimeWeatherTile from '@/components/Tiles/TimeWeatherTile'

export default {
    name: 'Menu',
    data() {
        return {
            items: [
                { title: 'Add Hello', icon: 'add', method: this.addHelloTile },
                {
                    title: 'Add Weather',
                    icon: 'add',
                    method: this.addWeatherTile
                },
                {
                    title: 'Remove Tile',
                    icon: 'delete',
                    method: this.removeHelloTile
                }
            ]
        }
    },
    methods: {
        addHelloTile() {
            let ComponentClass = Vue.extend(HelloTile)
            let instance = new ComponentClass({
                propsData: { name: 'Test', position: 'b2' }
            })
            instance.$mount()
            document.getElementById('dashboard').appendChild(instance.$el)
        },
        addWeatherTile() {
            let ComponentClass = Vue.extend(TimeWeatherTile)
            let instance = new ComponentClass({
                propsData: {
                    dateFormat: 'ddd DD/MM',
                    timeZone: 'Europe/Brussels',
                    weatherCity: 'gavere',
                    position: 'b2'
                }
            })
            instance.$mount()
            document.getElementById('dashboard').appendChild(instance.$el)
        },
        removeHelloTile() {
            document.getElementById('23').remove()
        }
    }
}
</script>
