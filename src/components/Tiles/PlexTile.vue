<template>
    <Tile :position="position">
        <h1>
            Plex
            <span style="font-size:20px;" class="text-dimmed">{{ name }}</span>
        </h1>
        <div class="flex">
            <div class="m-auto">
                <h2>{{ count }} stream(s)</h2>
            </div>
        </div>
        <div class="mt-3 flex overflow-x-scroll scrolling-touch">
            <div
                class="rounded shadow-lg grid mx-1"
                v-for="v in viewers"
                v-bind:key="v.name + v.media.name"
                style="width: 220px; height: 190px;"
            >
                <img
                    style="width: 220px"
                    class="rounded-t"
                    :src="v.media.art"
                />
                <div v-if="v.media.type == 'movie'" class="px-1 py-2">
                    <div class="text-base mb-2">{{ v.media.name }}</div>
                    <p class="text-gray-700 text-xs">
                        {{ v.name }}
                    </p>
                </div>
                <div v-else class="px-1 py-2">
                    <div class="text-sm mb-2">{{ v.media.show.name }}</div>
                    <div class="text-sm mb-2">{{ v.media.show.episode }}</div>
                    <p class="text-gray-700 text-xs">
                        {{ v.name }}
                    </p>
                </div>
            </div>
        </div>
    </Tile>
</template>

<script>
import Tile from '@/components/Tile'
import Plex from '@/services/plex/Plex'
export default {
    name: 'PlexTile',
    components: { Tile },
    props: {
        name: { type: String, default: '' },
        port: Number,
        ip: String,
        token: String,
        position: String
    },
    data() {
        return {
            plex: null,
            count: 0,
            viewers: []
        }
    },
    async created() {
        this.plex = new Plex({
            ip: this.$props.ip,
            port: this.$props.port,
            token: this.$props.token
        })
        this.getNumberOfStreams()
        setInterval(this.getNumberOfStreams, 10000)

        this.getViewers()
    },
    methods: {
        async getNumberOfStreams() {
            this.count = await this.plex.getNumberOfStreams()
        },
        async getViewers() {
            this.viewers = await this.plex.getViewers()
            console.log(this.viewers)
        }
    }
}
</script>
<style scoped>
h1,
h2,
h3 {
    font-family: 'Inter', arial, sans-serif;
}

h1 {
    font-size: 35px;
    font-weight: 300;
}
h2 {
    font-size: 20px;
    font-weight: 300;
}

::-webkit-scrollbar {
    display: none;
}
</style>
