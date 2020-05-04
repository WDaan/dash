<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
                <v-list-item link v-on="on">
                    <v-icon class="pr-2 white--text">add</v-icon>
                    <v-list-item-title class="white--text" style="font-size:15px">Add Tile</v-list-item-title>
                </v-list-item>
            </template>

            <v-card>
                <v-form v-model="valid" class="pa-5 pt-10 mx-auto" style="max-width: 300px;">
                    <v-select
                        :items="options"
                        label="Tile"
                        :value="selectedTile"
                        @input="createFormSchema"
                        v-model="selectedTile"
                        solo
                    ></v-select>
                    <v-container class="pb-10">
                        <TileForm :schema="schema" :timed="timed"></TileForm>
                    </v-container>
                    <v-btn
                        :disabled="!valid"
                        @click="createComponentFromMenu"
                        color="teal accent-4 white--text"
                    >Add Tile</v-btn>
                </v-form>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import TileStore from '@/mixins/TileStore'
import { mapGetters } from 'vuex'

export default {
    name: 'AddModal',
    mixins: [TileStore],
    data() {
        return {
            dialog: false,
            options: [],
            schema: [],
            selectedTile: null,
            valid: false,
            timed: false
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
        createComponentFromMenu() {
            let props = this.formatProps()
            let { position } = props

            this.saveComponentToStore({
                id: this.selectedTile + position,
                tileName: this.selectedTile,
                props
            })

            //close dialog
            this.dialog = false

            //reset inputs
            this.schema = []
            this.createFormSchema(this.selectedTile)

            //success notification
            this.$toast.success('Tile added successfully')
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
</script>
