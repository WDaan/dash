<template>
    <div>
        <Dashboard>
            <HelloTile name="Daan" position="a1"></HelloTile>
            <TimeWeatherTile
                position="b1"
                date-format="ddd DD/MM"
                time-zone="Europe/Brussels"
                weather-city="Gavere"
            ></TimeWeatherTile>
            <PlexTile position="a2:b2"></PlexTile>
            <HelloTile name="Daan" position="a3:b3"></HelloTile>
        </Dashboard>
    </div>
</template>

<script>
import Dashboard from '@/components/Dashboard'
import HelloTile from '@/components/Tiles/HelloTile'
import TimeWeatherTile from '@/components/Tiles/TimeWeatherTile'
import PlexTile from '@/components/Tiles/PlexTile'
export default {
    name: 'Home',
    components: { Dashboard, HelloTile, TimeWeatherTile, PlexTile }
}
</script>


