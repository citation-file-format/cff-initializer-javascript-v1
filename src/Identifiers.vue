<template>
    <li v-if="has_identifiers">
        <p class="caption">
            identifiers
            <button
                tabindex="-1"
                title="Remove identifiers"
                v-on:click="remove_identifiers"
            >
                remove
            </button>
            <button
                class="add-button"
                tabindex="-1"
                title="Add identifier"
                v-on:click="add_identifier">
                <div class="button-spacer">
                    +
                </div>
            </button>
        </p>
        <ul>
            <Identifier
                v-for="identifier in identifiers"
                v-bind:key="identifier.id"
                v-bind:identifier="identifier"
                v-on:move-identifier-down="move_identifier_down"
                v-on:move-identifier-up="move_identifier_up"
                v-on:remove-identifier="remove_identifier"
                v-on:update-identifier-type="update_identifier_type"
                v-on:update-identifier-value="update_identifier_value"
            />
        </ul>
    </li>
    <li v-else>
        <button
            tabindex="-1"
            title="Add identifiers"
            v-on:click="add_identifiers"
        >
            Add identifiers
        </button>
    </li>
</template>

<script>

import {add_identifier,
        add_identifiers,
        move_identifier_down,
        move_identifier_up,
        remove_identifier,
        remove_identifiers,
        update_identifier_type,
        update_identifier_value} from './IdentifiersEmitters.js';

import Identifier from './Identifier.vue';

export default {
    name: 'Identifiers',
    components: {
        Identifier
    },
    props: {
        identifiers: Array
    },
    computed: {
        has_identifiers: function () {
            return this.$props.hasOwnProperty('identifiers') &&
                this.$props.identifiers !== undefined
        }
    },
    methods: {
        add_identifier,
        add_identifiers,
        move_identifier_down,
        move_identifier_up,
        remove_identifier,
        remove_identifiers,
        update_identifier_type,
        update_identifier_value
    }
};
</script>

<style>

    .button-spacer {
        min-width: 16px;
    }

    .add-button {
        background-color: #ccc;
        border-width: 1px;
        border-style: solid;
        border-color: #222;
        border-radius: 2px;
        font-size: 100%;
        padding: 2px 10px;
        color: #222;
    }

    .add-button:hover {
        background-color: #ddd;
    }

    ul {
        padding-bottom: 2em;
    }
    li {
        padding-top: 0.5em;
        padding-bottom: 0.5em;
    }

</style>
