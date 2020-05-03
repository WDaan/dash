<template>
    <v-card
        elevation="20"
        width="170"
        style="position:fixed; bottom: 15px; right: 15px; "
    >
        <v-list dense rounded class="teal accent-4">
            <v-list-item v-for="item in items" :key="item.title" link>
                <v-icon class="pr-2 white--text">{{ item.icon }}</v-icon>
                <v-list-item-title class="white--text" style="font-size:15px">{{
                    item.title
                }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {
    name: 'Menu',
    data() {
        return {
            items: [
                { title: 'Add Tile', icon: 'add' },
                { title: 'Remove Tile', icon: 'delete' }
            ]
        }
    }
}
</script>
