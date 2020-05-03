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
                <v-form
                    @submit.prevent="submit"
                    class="pa-5 pt-10 mx-auto"
                    style="max-width: 300px;"
                >
                    <v-select
                        :items="options"
                        label="Tile"
                        :value="selectedTile"
                        @input="createFormSchema"
                        solo
                    ></v-select>
                    <v-container class="pb-10">
                        <div v-for="(item, key) in schema" v-bind:key="key">
                            <v-text-field
                                v-if="item.type === 'string'"
                                v-model="item.value"
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
                    <v-btn type="submit" color="teal accent-4 white--text">Add Tile</v-btn>
                </v-form>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: true,
            options: [],
            schema: [],
            selectedTile: null
        }
    },
    created() {
        let comps = this.getAvailableTiles()
        this.options = [...comps]
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
                    value: null
                })
            })
        },
        getAvailableTiles() {
            return require
                .context('@/components/Tiles', true, /\.vue$/i)
                .keys()
                .map(
                    key =>
                        key
                            .split('/')
                            .pop()
                            .split('.')[0]
                )
        },
        submit() {
            console.log('submitted!!')
        }
    }
}
</script>
