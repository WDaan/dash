<template>
    <div
        style="padding: 7px; background-color: var(--bg-screen)"
        class="grid gap-spacing h-screen p-2"
        :class="theme"
    >
        <slot></slot>
    </div>
</template>

<style>
* {
    text-align: center;
    color: var(--text-default);
}
</style>

<script>
export default {
    name: 'Dashboard',
    props: {
        theme: String
    }
}
</script>
