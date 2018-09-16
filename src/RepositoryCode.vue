<template>
    <li>
        <p
            class="caption"
            v-show="has_repository_code"
        >
            repository-code
            <button
                tabindex="-1"
                title="Remove repository-code"
                v-on:click="remove"
                v-show="has_repository_code"
            >
                remove
            </button>
        </p>
        <button
            tabindex="-1"
            title="Add repository-code"
            v-on:click="add"
            v-show="!has_repository_code"
        >
            Add repository-code
        </button>
        <input
            type="text"
            v-bind:class="{error: validate.error}"
            v-bind:value="repository_code"
            v-on:input="update($event)"
            v-show="has_repository_code"
        />
        <p
            class="message"
            v-if="validate.error"
            v-show="has_repository_code"
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

export default {
    components: {
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
    },
    name: 'RepositoryCode',
    props: {
        repository_code: String
    }
};
</script>

<style>
</style>
