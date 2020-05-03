<template>
    <Tile :position="position" @resize="getSize">
        <div v-if="fromTrains && toTrains">
            <div class=" w-10 h-10 rounded-full mx-auto">
                <div class="text-3xl -mt-1" v-html="emoji('🚃')" />
            </div>
        </div>
        <div :class="size > 450 ? 'flex flex-row' : ''">
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
        </div>
    </Tile>
</template>

<script>
import { emoji } from '@/helpers'
import iRail from '@/services/trains/iRail'

export default {
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
            toTrainsApi: null,
            getTrainDataInterval: null,
            size: 500
        }
    },
    created() {
        this.fromTrainsApi = new iRail({ from: this.from, to: this.to })
        this.toTrainsApi = new iRail({ from: this.to, to: this.from })

        this.getTrainData()
        this.getTrainDataInterval = setInterval(
            this.getTrainData,
            1000 * 60 * 10
        ) //10minutes
    },
    mounted() {
        this.getSize()
    },
    methods: {
        emoji,
        async getTrainData() {
            try {
                let data = await this.fromTrainsApi.getInfo()
                this.fromTrains = data.connection

                data = await this.toTrainsApi.getInfo()
                this.toTrains = data.connection
            } catch (e) {
                clearInterval(this.getTrainDataInterval)
            }
        },
        getSize() {
            this.size = this.$el.clientWidth
        }
    }
}
</script>
