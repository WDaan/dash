<template>
    <v-card
        elevation="20"
        width="170"
        style="position:fixed; bottom: 15px; right: 15px; "
    >
        <v-list dense rounded class="teal accent-4">
            <AddModal></AddModal>
            <DeleteModal></DeleteModal>
            <v-list-item link>
                <v-icon class="pr-2 white--text">save</v-icon>
                <v-list-item-title class="white--text" style="font-size:15px"
                    >Save Layout</v-list-item-title
                >
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {
    name: 'Menu'
}
</script>
