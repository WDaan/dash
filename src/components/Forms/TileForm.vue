<template>
    <div>
        <div v-for="(item, key) in schema" v-bind:key="key">
            <v-text-field
                v-if="item.type === 'string'"
                v-model="item.value"
                :rules="[v => !!v || `${item.name} is required`]"
                required
                :label="item.name"
            ></v-text-field>
            <v-checkbox
                v-if="item.type === 'boolean'"
                :label="item.label"
                v-model="item.value"
                required
            ></v-checkbox>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TileForm',
    props: {
        schema: Array
    }
}
</script>

<style></style>
