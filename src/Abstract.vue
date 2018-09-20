<template>
    <li v-if="has_abstract">
        <p class="caption">
            abstract
            <button
                tabindex="-1"
                title="Remove abstract"
                v-on:click="remove"
            >
                remove
            </button>
        </p>
        <textarea
            v-bind:class="{error: validation.error }"
            v-bind:value="abstract"
            v-on:input="update($event)"
        />
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
            title="Add abstract"
            v-on:click="add"
        >
            Add abstract
        </button>
    </li>
</template>

<script>

import {add,
        remove,
        update} from './AbstractEmitters.js';

import {validate} from './AbstractValidators.js';

export default {
    name: 'Abstract',
    components: {
    },
    props: {
        abstract: String
    },
    computed: {
        has_abstract: function () {
            return this.$props.hasOwnProperty('abstract') &&
                this.$props.abstract !== undefined;
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
