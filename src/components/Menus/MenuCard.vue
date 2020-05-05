<template>
    <v-card
        elevation="20"
        width="170"
        style="position:fixed; bottom: 15px; right: 15px; z-index: 1"
    >
        <v-list dense rounded class="teal accent-4">
            <v-list-item @click="toggleModal('addmodal')" link>
                <v-icon class="pr-2 white--text">add</v-icon>
                <v-list-item-title class="white--text" style="font-size:15px"
                    >Add Tile</v-list-item-title
                >
            </v-list-item>
            <v-list-item @click="toggleModal('deletemodal')" link>
                <v-icon class="pr-2 white--text">delete</v-icon>
                <v-list-item-title class="white--text" style="font-size:15px"
                    >Delete Tile</v-list-item-title
                >
            </v-list-item>
            <v-list-item @click="toggleTheme" link>
                <v-icon v-if="theme === 'Light'" class="pr-2 white--text"
                    >brightness_7</v-icon
                >
                <v-icon v-else class="pr-2 white--text">brightness_2</v-icon>
                <v-list-item-title class="white--text" style="font-size:15px">{{
                    theme
                }}</v-list-item-title>
            </v-list-item>
            <v-list-item @click="toggleModal('settingsmodal')" link>
                <v-icon class="pr-2 white--text">settings</v-icon>
                <v-list-item-title class="white--text" style="font-size:15px"
                    >Settings</v-list-item-title
                >
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
import Menu from '@/mixins/Menu'
export default {
    name: 'Menu',
    mixins: [Menu]
}
</script>
