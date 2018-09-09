<template>
    <li>
        <p class="caption">
            version
        </p>
        <input
            type="text"
            v-bind:value="version"
            v-on:input="update($event)"
        />
        <p class="message">
        </p>
    </li>
</template>

<script>

import {update} from './VersionEmitters.js';

export default {
    methods: {
        update
    },
    name: 'Version',
    props: {
        version: String
    },
};
</script>

<style>

</style>
