<template>
    <li>
        <p class="caption">
            title
        </p>
        <input
            type="text"
            v-bind:value="title"
            v-on:input="update($event)"
        />
    </li>
</template>

<script>
import {update} from './TitleEmitters.js';

export default {
    components: {
    },
    computed: {
    },
    methods: {
        update
    },
    name: 'Title',
    props: {
        title: String
    }
};
</script>

<style scoped>
</style>
