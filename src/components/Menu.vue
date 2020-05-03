<template>
    <v-card
        elevation="20"
        width="170"
        style="position:fixed; bottom: 15px; right: 15px; "
    >
        <v-list dense rounded class="teal accent-4">
            <AddModal></AddModal>
        </v-list>
    </v-card>
</template>

<script>
export default {
    name: 'Menu'
}
</script>
