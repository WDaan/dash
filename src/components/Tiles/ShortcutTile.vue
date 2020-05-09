<template>
    <Tile :id="tileId" :position="position">
        <a :href="formattedLink" target="_blank">
            <div class="flex text-2xl h-full">
                <div class="text-center m-auto">
                    <img
                        style="height:10%;"
                        class="mx-auto"
                        :src="formattedLink + '/favicon.ico'"
                    />
                    <h1>{{ lowerCaseLink }}</h1>
                </div>
            </div>
        </a>
    </Tile>
</template>

<script>
import Tile from '@/mixins/Tile'
export default {
    name: 'ShortcutTile',
    mixins: [Tile],
    props: {
        link: {
            type: String,
            default: 'google.com'
        }
    },
    computed: {
        formattedLink() {
            return 'https://' + this.link.toLowerCase()
        },
        lowerCaseLink() {
            return this.link.toLowerCase()
        }
    }
}
</script>
<style scoped>
h1 {
    font-weight: 300;
    font-family: 'Inter', arial, sans-serif;
}
</style>
