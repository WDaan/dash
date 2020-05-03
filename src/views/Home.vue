<template>
    <div>
        <Dashboard id="dashboard" theme>
            <HelloTile name="Daan" position="a1:a2"></HelloTile>
            <TimeWeatherTile
                position="b1:c1"
                date-format="ddd DD/MM"
                time-zone="Europe/Brussels"
                weather-city="gavere"
            ></TimeWeatherTile>
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
    }
}
</script>
