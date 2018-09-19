<template>
    <li v-if="has_affiliation">
        <p class="caption">
            affiliation
            <button
                tabindex="-1"
                title="Remove affiliation"
                v-on:click="remove"
            >
                remove
            </button>
        </p>
        <input
            v-bind:class="{error: validation.error }"
            v-bind:value="affiliation"
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
            title="Add affiliation"
            v-on:click="add"
        >
            Add affiliation
        </button>
    </li>
</template>


<script>

import {add,
        remove,
        update} from './AffiliationEmitters.js';

import {validate} from './AffiliationValidators.js';

export default {
    name: 'Affiliation',
    components: {
    },
    props: {
        affiliation: String
    },
    computed: {
        has_affiliation: function () {
            return this.$props.hasOwnProperty('affiliation') &&
                this.$props.affiliation !== undefined;
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
