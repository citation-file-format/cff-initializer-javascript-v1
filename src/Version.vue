<template>
    <li>
        <p
            class="caption"
            v-show="has_version"
        >
            version
        </p>
        <button
            tabindex="-1"
            title="Remove version"
            v-on:click="remove"
            v-show="has_version"
        >-</button>
        <button
            tabindex="-1"
            title="Add version"
            v-on:click="add"
            v-show="!has_version"
        >Add version</button>
        <input
            type="text"
            v-bind:value="version"
            v-on:input="update($event)"
            v-show="has_version"
        />
        <p class="message">
        </p>
    </li>
</template>

<script>

import {add,
        remove,
        update} from './VersionEmitters.js';

export default {
    computed: {
        has_version: function () {
            return this.$props.hasOwnProperty('version') &&
                this.$props.version !== undefined
        }
    },
    methods: {
        add,
        remove,
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
