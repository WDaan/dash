<template>
    <Tile :position="position" class="markup">
        <div class="markup flex">
            <div class="m-auto h-screen">
                <h1>Hi {{ name }}!</h1>
            </div>
        </div>
    </Tile>
</template>

<script>
import Tile from '@/components/Tile'
export default {
    name: 'HelloTile',
    components: { Tile },
    props: {
        name: String,
        position: String
    }
}
</script>
<style scoped>
h1 {
    font-size: 40px;
    font-weight: 300;
    font-family: 'Inter', arial, sans-serif;
}
</style>
