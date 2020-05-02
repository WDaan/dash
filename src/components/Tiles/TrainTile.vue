<template>
    <tile :position="position">
        <div v-if="fromTrains && toTrains">
            <div class=" w-10 h-10 rounded-full mx-auto">
                <div class="text-3xl -mt-1" v-html="emoji('🚃')" />
            </div>
        </div>
        <TrainTilePartial
            :from="from"
            :to="to"
            :trains="fromTrains"
        ></TrainTilePartial>
        <TrainTilePartial
            :from="to"
            :to="from"
            :trains="toTrains"
        ></TrainTilePartial>
    </tile>
</template>

<script>
import { emoji } from '@/helpers'
import Tile from '@/components/Tile'
import TrainTilePartial from '@/components/Tiles/TrainTilePartial'
import iRail from '@/services/trains/iRail'

export default {
    components: {
        Tile,
        TrainTilePartial
    },
    props: {
        position: {
            type: String
        },
        from: String,
        to: String
    },
    data() {
        return {
            fromTrains: null,
            toTrains: null,
            fromTrainsApi: null,
            toTrainsApi: null
        }
    },
    created() {
        this.fromTrainsApi = new iRail({ from: this.from, to: this.to })
        this.toTrainsApi = new iRail({ from: this.to, to: this.from })

        this.getTrainData()
    },
    methods: {
        emoji,
        async getTrainData() {
            let data = await this.fromTrainsApi.getInfo()
            this.fromTrains = data.connection

            data = await this.toTrainsApi.getInfo()
            this.toTrains = data.connection
        }
    }
}
</script>
