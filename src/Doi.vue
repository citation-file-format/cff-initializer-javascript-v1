<template>
    <li>
        <p
            class="caption"
            v-show="has_doi"
        >
            doi
            <button
                tabindex="-1"
                title="Remove doi"
                v-on:click="remove"
                v-show="has_doi"
            >
                remove
            </button>
        </p>
        <button
            tabindex="-1"
            title="Add doi"
            v-on:click="add"
            v-show="!has_doi"
        >
            Add doi
        </button>
        <input
            placeholder="doi-only, e.g. 10.0000/FIXME"
            type="text"
            v-bind:class="{error: validation.error }"
            v-bind:value="doi"
            v-on:input="update($event)"
            v-show="has_doi"
        />
        <p
            class="message"
            v-if="validation.error"
            v-show="has_doi"
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
    components: {
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
    },
    name: 'Doi',
    props: {
        doi: String
    }
};
</script>

<style>
</style>
