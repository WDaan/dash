<template>
    <v-card
        elevation="20"
        width="55"
        style="position:fixed; top: 30%; left: 0; z-index: 1"
    >
        <v-list dense class="teal accent-4">
            <v-list-item @click="toggleModal('addmodal')" link>
                <v-icon class="white--text">add</v-icon>
            </v-list-item>
            <v-list-item @click="toggleModal('deletemodal')" link>
                <v-icon class="white--text">delete</v-icon>
            </v-list-item>
            <v-list-item @click="toggleTheme" link>
                <v-icon v-if="theme === 'Light'" class="white--text"
                    >brightness_7</v-icon
                >
                <v-icon v-else class=" white--text">brightness_2</v-icon>
            </v-list-item>
            <v-list-item @click="toggleModal('settingsmodal')" link>
                <v-icon class="pr-2 white--text">settings</v-icon>
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
