<template>
    <li v-if="has_orcid">
        <p class="caption">
            orcid
            <button
                tabindex="-1"
                title="Remove orcid"
                v-on:click="remove"
            >
                remove
            </button>
        </p>
        <HelpText
            text="The person's ORCID iD."
            url="https://github.com/citation-file-format/citation-file-format/blob/main/README.md#exemplary-uses-1"
        />
        <input
            v-bind:value="orcid"
            v-bind:class="{error: validation.error }"
            v-on:input="update($event)"
        >
        <p
            v-if="validation.error"
            class="message">
                {{ validation.msg }}
        </p>
    </li>
    <li v-else>
        <button
            tabindex="-1"
            title="Add orcid"
            v-on:click="add"
        >
            Add orcid
        </button>
    </li>
</template>

<script>
import {add,
        remove,
        update} from './OrcidEmitters.js';

import {validate} from './OrcidValidators.js';

import HelpText from './HelpText.vue';

export default {
    name: 'Orcid',
    components: {
        HelpText
    },
    props: {
        orcid: String
    },
    computed: {
        has_orcid: function () {
            return this.$props.hasOwnProperty('orcid') &&
                this.$props.orcid !== undefined
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

<style>
</style>
