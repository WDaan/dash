<template>
    <v-speed-dial
        v-model="fab"
        direction="top"
        open-on-hover
        transition="slide-y-reverse-transition"
        style="position:fixed; bottom: 20px; right: 20px; z-index: 1"
    >
        <template v-slot:activator>
            <v-btn color="teal accent-4" dark fab small>
                <v-icon class="white--text">keyboard_arrow_up</v-icon>
            </v-btn>
        </template>
        <MenuCard style="margin-bottom: 50px " />
    </v-speed-dial>
</template>

<script>
export default {
    name: 'Menu',
    data() {
        return { fab: false }
    }
}
</script>
