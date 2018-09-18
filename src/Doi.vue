<template>
    <li>
        <p
            v-show="has_doi"
            class="caption"
        >
            doi
            <button
                v-show="has_doi"
                tabindex="-1"
                title="Remove doi"
                v-on:click="remove"
            >
                remove
            </button>
        </p>
        <button
            v-show="!has_doi"
            tabindex="-1"
            title="Add doi"
            v-on:click="add"
        >
            Add doi
        </button>
        <input
            v-show="has_doi"
            v-bind:class="{error: validation.error }"
            v-bind:value="doi"
            placeholder="doi-only, e.g. 10.0000/FIXME"
            type="text"
            v-on:input="update($event)"
        >
        <p
            v-if="validation.error"
            v-show="has_doi"
            class="message"
        >
            {{ validation.msg }}
        </p>
    </li>
</template>

<script>
import {add,
        remove,
        update} from './DoiEmitters.js';

import {validate} from './DoiValidators.js';

export default {
    name: 'Doi',
    components: {
    },
    props: {
        doi: String
    },
    computed: {
        validation: validate,
        has_doi: function () {
            return this.$props.hasOwnProperty('doi') &&
                this.$props.doi !== undefined
        }
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
