<template>
    <div>
        <Dashboard theme>
            <HelloTile name="Daan" position="a1"></HelloTile>
            <TimeWeatherTile
                position="b1:c1"
                date-format="ddd DD/MM"
                time-zone="Europe/Brussels"
                weather-city="gavere"
            ></TimeWeatherTile>
            <TileTimer on="12:00" off="19:00">
                <TrainTile position="a2:b2" to="kortrijk" from="Gent"></TrainTile>
            </TileTimer>
        </Dashboard>
    </div>
</template>

<script>
import Dashboard from '@/components/Dashboard'

export default {
    name: 'Home',
    components: {
        Dashboard
    },
    data() {
        return {
            plex: {
                host: process.env.VUE_APP_PLEX_HOST,
                port: Number(process.env.VUE_APP_PLEX_PORT),
                token: process.env.VUE_APP_PLEX_TOKEN
            }
        }
    },
    async created() {}
}
</script>
