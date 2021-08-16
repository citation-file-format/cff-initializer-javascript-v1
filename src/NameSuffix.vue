<template >
    <li v-if="has_name_suffix">
        <p class="caption">
            name-suffix
            <button
                tabindex="-1"
                title="Remove name-suffix"
                v-on:click="remove"
            >
                remove
            </button>
        </p>
        <HelpText
            text="Specify suffixes such as Jr. or III."
            url="https://github.com/citation-file-format/citation-file-format/blob/1.1.0/README.md#exemplary-uses-2"
        />
        <input
            v-bind:class="{error: validation.error }"
            v-bind:value="name_suffix"
            type="text"
            v-on:input="update($event)"
        >
        <p
            v-if="validation.error"
            class="message"
        >
            {{ validation.msg }}
        </p>
    </li>
    <li v-else>
        <button
            tabindex="-1"
            title="Add name-suffix"
            v-on:click="add"
        >
            Add name-suffix
        </button>
    </li>
</template>

<script>

import {add,
        remove,
        update} from './NameSuffixEmitters.js';

import {validate} from './NameSuffixValidators.js';

import HelpText from './HelpText.vue';

export default {
    name: 'NameSuffix',
    components: {
        HelpText
    },
    props: {
        name_suffix: String
    },
    computed: {
        has_name_suffix: function () {
            return this.$props.hasOwnProperty('name_suffix') &&
                this.$props.name_suffix !== undefined;
        },
        validation: validate
    },
    methods: {
        add,
        remove,
        update
    }
};
</script>

<style scoped>
    button {
        margin-bottom: 1.0em;
        margin-top: 1.0em;
    }
</style>
