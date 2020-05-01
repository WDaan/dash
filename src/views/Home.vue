<template>
    <div>
        <Dashboard>
            <HelloTile name="Daan" position="a1"></HelloTile>
            <HelloTile name="Daan" position="b1"></HelloTile>
            <HelloTile name="Daan" position="a2:b2"></HelloTile>
        </Dashboard>
    </div>
</template>

<script>
import Dashboard from '@/components/Dashboard'
import HelloTile from '@/components/Tiles/HelloTile'
// import TimeWeatherTile from '@/components/Tiles/TimeWeatherTile'
export default {
    name: 'Home',
    components: { Dashboard, HelloTile }
}
</script>
