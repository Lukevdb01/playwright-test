<!-- Button.vue -->
<template>
    <button @click="handleClick">{{ label }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        label: {
            type: String,
            required: true
        }
    },
    methods: {
        handleClick() {
            this.$emit('clicked', 'Button clicked!')
        }
    }
}
</script>

<style scoped>
button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>
