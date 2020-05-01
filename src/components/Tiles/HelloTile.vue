<template>
    <Tile :position="position" class="markup">
        <div
            class="grid gap-2 justify-items-center h-full"
            style="grid-template-rows: auto 1fr auto;"
        >
            <div class="markup">
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
<style></style>
