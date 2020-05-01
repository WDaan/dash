<template>
    <div
        style="height: 100vh;"
        class="fixed pin grid gap-spacing w-screen h-screen p-spacing font-normal leading-normal text-default bg-screen"
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
