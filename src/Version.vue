<template>
    <li>
        <p
            v-show="has_version"
            class="caption"
        >
            version
            <button
                v-show="has_version"
                tabindex="-1"
                title="Remove version"
                v-on:click="remove"
            >
                remove
            </button>
        </p>
        <HelpText
            v-show="has_version"
            text="The version of the software."
            url="https://github.com/citation-file-format/citation-file-format/blob/main/README.md#software-citation-metadata-required"
        />
        <button
            v-show="!has_version"
            tabindex="-1"
            title="Add version"
            v-on:click="add"
        >
            Add version
        </button>
        <input
            v-show="has_version"
            v-bind:value="version"
            type="text"
            v-on:input="update($event)"
        >
        <p class="message" />
    </li>
</template>

<script>

import {add,
        remove,
        update} from './VersionEmitters.js';

import HelpText from './HelpText.vue';

export default {
    name: 'Version',
    components: {
        HelpText
    },
    props: {
        version: String
    },
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
    }
};
</script>

<style scoped>
</style>
