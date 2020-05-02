<template>
    <div
        style="padding: 7px;"
        class="grid gap-spacing h-screen p-2"
        :class="theme"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    props: {
        theme: String
    }
}
</script>
