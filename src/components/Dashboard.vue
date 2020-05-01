<template>
    <div
        style="height: 97vh; padding: 7px;"
        class="pin grid gap-spacing w-screen h-screen"
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
