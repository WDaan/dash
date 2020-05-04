<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
                <v-list-item link v-on="on">
                    <v-icon class="pr-2">edit</v-icon>
                    <v-list-item-title style="font-size:15px">
                        Edit</v-list-item-title
                    >
                </v-list-item>
            </template>
            <v-card>
                <v-list v-if="0" dense rounded> </v-list>
                <div v-else class="pa-4">
                    <h3 class="subtitle">no tiles on dashboard</h3>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'DeleteModal',
    data() {
        return {
            dialog: false
        }
    },
    created() {},
    methods: {
        deleteTile(id) {
            // document.getElementById(id).remove()
            this.$store.commit('DELETE_TILE', id)

            this.dialog = false

            //confirmation
            this.$toast.success('Tile removed successfully!')
        }
    }
}
</script>
