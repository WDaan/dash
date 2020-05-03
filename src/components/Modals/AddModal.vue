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
                        <v-checkbox
                            label="Only between certain times?"
                            v-model="timed"
                        ></v-checkbox>
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
        }
    }
}
</script>
