<!-- App.vue -->
<template>
    <div>
        <Button label="Click Me" @clicked="handleClick" />
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script>
import Button from './components/Button.vue'

export default {
    name: 'App',
    components: {
        Button
    },
    data() {
        return {
            message: ''
        }
    },
    methods: {
        handleClick(payload) {
            this.message = payload
        }
    }
}
</script>

<style>
/* Add your global styles here */
div {
    text-align: center;
    padding: 20px;
}

p {
    font-size: 18px;
    color: #333;
}
</style>
