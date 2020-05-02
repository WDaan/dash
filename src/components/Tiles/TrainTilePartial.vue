<template>
    <div class="mx-auto mt-10">
        <h2
            class="uppercase inline-flex"
            style="font-size: 15px; font-weight: 200"
        >
            {{ from }}
            <img
                class="mx-2"
                style="width: 12px"
                src="@/assets/icons/arrow-thin-right.svg"
            />
            {{ to }}
        </h2>
        <ul class="mt-3">
            <li
                v-for="(train, index) in trains"
                v-bind:key="train.id"
                :class="{
                    'line-through': train.departure.canceled === 1,

                    'text-red-700': train.departure.canceled === 1
                }"
            >
                <div
                    class="inline-grid grid-cols-2 col-gap-24"
                    style="font-size:16px;"
                    :class="{
                        TrainTimesBorder: index !== trains.length - 1
                    }"
                >
                    <div>
                        <span
                            v-if="
                                !train.departure.canceled &&
                                    train.departure.delay > 0
                            "
                            class="ml-auto mr-2 font-bold"
                            :class="{
                                'text-danger': train.departure.delay > 0
                            }"
                            v-html="`+${train.departure.delay}m`"
                        />
                        <span
                            class="font-bold text-right variant-tabular"
                            v-html="formatTime(train.departure.time)"
                        />
                    </div>
                    <div>
                        <span
                            v-if="
                                !train.arrival.canceled &&
                                    train.arrival.delay > 0
                            "
                            class="ml-auto mr-2 font-bold variant-tabular"
                            :class="{
                                'text-danger': train.arrival.delay > 0
                            }"
                            v-html="`+${train.arrival.delay / 60}m`"
                        />
                        <span
                            class="font-bold text-left variant-tabular"
                            v-html="formatTime(train.arrival.time)"
                        />
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { formatTime } from '@/helpers'
export default {
    name: 'TrainTilePartial',
    props: {
        trains: Array,
        from: String,
        to: String
    },
    methods: {
        formatTime
    }
}
</script>

<style scoped>
.TrainTimesBorder {
    border-bottom: 1px solid rgb(240, 240, 240);
}
</style>
