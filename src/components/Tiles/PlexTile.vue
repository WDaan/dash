<template>
    <Tile :id="tileId" :position="position">
        <h1>
            Plex
            <span style="font-size:20px;" class="text-dimmed">{{ name }}</span>
        </h1>
        <div class="flex">
            <div class="m-auto">
                <h2>{{ count }} stream(s)</h2>
            </div>
        </div>
        <div
            v-if="!onlynumber"
            class="mt-3 flex overflow-x-scroll scrolling-touch"
        >
            <div
                class="shadow-lg rounded grid mx-2 mb-4"
                v-for="v in viewers"
                v-bind:key="v.name + v.media.name"
            >
                <img
                    onerror="this.src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'"
                    class="rounded-t"
                    :src="v.media.art"
                    style="width: 220px"
                />
                <div v-if="v.media.type == 'movie'" class="px-1 py-2">
                    <div class="text-base mb-2">{{ v.media.name }}</div>
                    <span
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2"
                        >{{ v.name }}</span
                    >
                </div>
                <div v-else class="px-1 py-2">
                    <div class="text-sm mb-2">{{ v.media.show.name }}</div>
                    <div class="text-sm mb-2">{{ v.media.show.episode }}</div>
                    <span
                        class="align-baseline bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2"
                        >{{ v.name }}</span
                    >
                </div>
            </div>
        </div>
    </Tile>
</template>

<script>
import Plex from '@/services/plex/Plex'
import Tile from '@/mixins/Tile'
export default {
    name: 'PlexTile',
    mixins: [Tile],
    props: {
        name: { type: String, default: '' },
        host: String,
        token: String,
        position: String,
        onlynumber: {
            type: Boolean,
            default: true,
            label: 'Only show number of streams?'
        }
    },
    data() {
        return {
            plex: null,
            count: 0,
            viewers: [],
            getViewersInterval: null,
            getNumberOfStreamsInternal: null
        }
    },
    async created() {
        this.plex = new Plex({
            host: this.$props.host,
            port: this.$props.port,
            token: this.$props.token
        })
        this.getNumberOfStreams()
        this.getNumberOfStreamsInternal = setInterval(
            this.getNumberOfStreams,
            10000
        )

        if (!this.onlynumber) {
            this.getViewers()
            this.getViewersInterval = setInterval(this.getViewers, 10000)
        }
    },
    methods: {
        async getNumberOfStreams() {
            try {
                this.count = await this.plex.getNumberOfStreams()
            } catch (e) {
                clearInterval(this.getNumberOfStreamsInternal)
            }
        },
        async getViewers() {
            try {
                this.viewers = await this.plex.getViewers()
            } catch (e) {
                clearInterval(this.getViewersInterval)
            }
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
