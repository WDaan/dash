<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <v-card :dark="theme">
                <v-form
                    v-model="valid"
                    class="pa-5 pt-10 mx-auto"
                    style="max-width: 300px;"
                    @keyup.enter.native="createTileFromMenu"
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
                        <TileForm :schema="schema"></TileForm>
                    </v-container>
                    <v-btn
                        :disabled="!valid"
                        @click="createTileFromMenu"
                        color="teal accent-4 white--text"
                        >Add Tile</v-btn
                    >
                </v-form>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import TileStore from '@/mixins/TileStore'
import DarkMode from '@/mixins/DarkMode'
import Modal from '@/mixins/Modal'
import { mapGetters } from 'vuex'
import { getRandomNumber } from '@/helpers'

export default {
    name: 'AddModal',
    mixins: [TileStore, DarkMode, Modal],
    data() {
        return {
            options: [],
            schema: [],
            selectedTile: null
        }
    },
    computed: {
        ...mapGetters(['getAvailableTiles']),
        availableTiles() {
            return this.getAvailableTiles()
        }
    },
    created() {
        this.options = [...this.availableTiles]
        this.selectedTile = this.options[0]
        this.createFormSchema(this.selectedTile)
    },
    methods: {
        createTileFromMenu() {
            let props = this.formatProps()

            this.saveComponentToStore({
                id: this.selectedTile + getRandomNumber(),
                tileName: this.selectedTile,
                props
            })

            //close dialog
            this.dialog = false

            //reset inputs
            this.schema = []
            this.selectedTile = this.options[0]
            this.createFormSchema(this.selectedTile)

            //success notification
            this.$toast.success('Tile added successfully')
        }
    }
}
</script>
