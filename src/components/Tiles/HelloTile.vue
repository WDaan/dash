<template>
    <Tile :position="position">
        <div class="flex text-2xl h-full">
            <div class="text-center m-auto">
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
        name: {
            type: String,
            default: 'stranger'
        },
        position: String
    }
}
</script>
<style scoped>
h1 {
    font-weight: 300;
    font-family: 'Inter', arial, sans-serif;
}
</style>
