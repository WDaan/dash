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
            <HelloTile name="Daan" position="a2:b2"></HelloTile>
        </Dashboard>
    </div>
</template>

<script>
import Dashboard from '@/components/Dashboard'
import HelloTile from '@/components/Tiles/HelloTile'
import TimeWeatherTile from '@/components/Tiles/TimeWeatherTile'
export default {
    name: 'Home',
    components: { Dashboard, HelloTile, TimeWeatherTile }
}
</script>
