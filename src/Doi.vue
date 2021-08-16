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
        <HelpText
            v-show="has_doi"
            text="The DOI of the work (not the resolver URL, i.e., 10.5281/zenodo.1003150, not http://doi.org/10.5281/zenodo.1003150)"
            url="https://github.com/citation-file-format/citation-file-format/blob/1.1.0/README.md#software-citation-metadata-required"
        />
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

import HelpText from './HelpText.vue';

export default {
    name: 'Doi',
    components: {
        HelpText
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
