<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <v-card height="500" :dark="theme" style="position: relative;">
                <v-card-title>Settings</v-card-title>
                <v-form class="pa-5 pt-10 mx-auto" style="max-width: 300px;">
                    <v-select
                        :items="menuOptions"
                        :value="menutype"
                        @input="updateMenuType"
                        v-model="selectedMenu"
                        solo
                    ></v-select>
                </v-form>
                <v-card-actions
                    style="position:absolute; bottom: 10px; left: 40%"
                >
                    <v-btn
                        @click="closeSettings"
                        color="teal accent-4 white--text"
                        >Close</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DarkMode from '@/mixins/DarkMode'
import Modal from '@/mixins/Modal'
export default {
    name: 'SettingsModal',
    mixins: [DarkMode, Modal],
    computed: {
        ...mapGetters(['getMenuType']),
        menutype() {
            return this.getMenuType()
        }
    },
    data() {
        return {
            menuOptions: [
                'MenuButton',
                'MenuButtonSmall',
                'MenuCard',
                'SideMenu'
            ],
            selectedMenu: null
        }
    },
    created() {
        this.selectedMenu = this.getMenuType()
    },
    methods: {
        updateMenuType() {
            this.$store.commit('SET_MENU_TYPE', this.selectedMenu)
        },
        closeSettings() {
            this.$store.commit('TOGGLE_MODAL', 'settingsmodal')
        }
    }
}
</script>
