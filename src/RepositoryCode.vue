<template>
    <li>
        <p
            v-show="has_repository_code"
            class="caption"
        >
            repository-code
            <button
                v-show="has_repository_code"
                tabindex="-1"
                title="Remove repository-code"
                v-on:click="remove"
            >
                remove
            </button>
        </p>
        <HelpText
            v-show="has_repository_code"
            text="The URL to the software version in a source code repository."
            url="https://github.com/citation-file-format/citation-file-format/blob/1.1.0/README.md#software-citation-metadata-required"
        />
        <button
            v-show="!has_repository_code"
            tabindex="-1"
            title="Add repository-code"
            v-on:click="add"
        >
            Add repository-code
        </button>
        <input
            v-show="has_repository_code"
            v-bind:value="repository_code"
            v-bind:class="{error: validate.error}"
            type="text"
            v-on:input="update($event)"
        >
        <p
            v-if="validate.error"
            v-show="has_repository_code"
            class="message"
        >
            {{ validate.msg }}
        </p>
    </li>
</template>

<script>
import {add,
        remove,
        update} from './RepositoryCodeEmitters.js';

import {validate} from './RepositoryCodeValidators.js';

import HelpText from './HelpText.vue';

export default {
    name: 'RepositoryCode',
    components: {
        HelpText
    },
    props: {
        repository_code: String
    },
    computed: {
        has_repository_code: function () {
            return this.$props.hasOwnProperty('repository_code') &&
                this.$props.repository_code !== undefined
        },
        validate
    },
    methods: {
        add,
        remove,
        update
    }
};
</script>

<style>
</style>
