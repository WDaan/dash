<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
                <v-list-item link v-on="on">
                    <v-icon class="pr-2 white--text">delete</v-icon>
                    <v-list-item-title
                        class="white--text"
                        style="font-size:15px"
                        >Delete Tile</v-list-item-title
                    >
                </v-list-item>
            </template>
            <v-card>
                <v-list dense rounded>
                    <v-list-item
                        style="display: block; margin: auto;"
                        class="pt-2"
                        link
                        v-for="c in components"
                        v-bind:key="c.id"
                        @click="deleteTile(c.id)"
                    >
                        {{ c.tileName }} - {{ c.position }}
                    </v-list-item>
                </v-list>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'DeleteModal',
    data() {
        return {
            dialog: false
        }
    },
    computed: {
        ...mapGetters(['getAllTiles']),
        components() {
            return this.getAllTiles()
        }
    },
    created() {},
    methods: {
        deleteTile(id) {
            document.getElementById(id).remove()
            this.$store.commit('DELETE_TILE', { vue: this, tileId: id })

            this.dialog = false
        }
    }
}
</script>
