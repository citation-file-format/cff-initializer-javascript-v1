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
            v-bind:value="affiliation"
            v-on:input="update($event)"
        >
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
