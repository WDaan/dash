<template>
    <div>
        <Dashboard theme="">
            <HelloTile name="Daan" position="a1"></HelloTile>
            <TimeWeatherTile
                position="b1:c1"
                date-format="ddd DD/MM"
                time-zone="Europe/Brussels"
                weather-city="Gavere"
            ></TimeWeatherTile>
            <PlexTile
                :host="plex.host"
                :port="plex.port"
                :token="plex.token"
                position="a2"
            ></PlexTile>
            <TileTimer on="12:00" off="19:00">
                <TrainTile
                    position="a3:a4"
                    to="kortrijk"
                    from="munkzwalm"
                ></TrainTile>
            </TileTimer>
            <TrainTile
                position="b3:c3"
                to="kortrijk"
                from="munkzwalm"
            ></TrainTile>
        </Dashboard>
    </div>
</template>

<script>
import Dashboard from '@/components/Dashboard'
import TileTimer from '@/components/TileTimer'
import HelloTile from '@/components/Tiles/HelloTile'
import TimeWeatherTile from '@/components/Tiles/TimeWeatherTile'
import PlexTile from '@/components/Tiles/PlexTile'
import TrainTile from '@/components/Tiles/TrainTile'

export default {
    name: 'Home',
    components: {
        Dashboard,
        TileTimer,
        HelloTile,
        TimeWeatherTile,
        TrainTile,
        PlexTile
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
