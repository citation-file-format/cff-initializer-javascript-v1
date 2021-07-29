<template>
    <li>
        <p
            v-show="has_title"
            class="caption"
        >
            title
            <button
                v-show="has_title"
                tabindex="-1"
                title="Remove title"
                v-on:click="remove"
            >remove
            </button>
        </p>
        <HelpText
            v-show="has_title"
            text="The name of the software (may include a specific name for the software version)"
            url="https://github.com/citation-file-format/citation-file-format/blob/main/README.md#software-citation-metadata-required"
        />
        <button
            v-show="!has_title"
            tabindex="-1"
            title="Add title"
            v-on:click="add"
        >
            Add title
        </button>
        <input
            v-show="has_title"
            v-bind:value="title"
            type="text"
            v-on:input="update($event)"
        >
    </li>
</template>

<script>
import {add,
        remove,
        update} from './TitleEmitters.js';

import HelpText from './HelpText.vue';

export default {
    name: 'Title',
    components: {
        HelpText
    },
    props: {
        title: String
    },
    computed: {
        has_title: function () {
            return this.$props.hasOwnProperty('title') &&
                this.$props.title !== undefined
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
