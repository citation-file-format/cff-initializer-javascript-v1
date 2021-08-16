<template>
    <li>
        <button
            class="remove-button"
            tabindex="-1"
            title="Remove this identifier"
            v-on:click="remove_identifier"
        >
            <div class="button-spacer">
                -
            </div>
        </button>

        <button
            class="move-up-button"
            tabindex="-1"
            title="Move this identifier up"
            v-on:click="move_identifier_up"
        >
            <div class="button-spacer">
                &#x25B2;
            </div>
        </button>

        <button
            class="move-down-button"
            tabindex="-1"
            title="Move this identifier down"
            v-on:click="move_identifier_down"
        >
            <div class="button-spacer">
                &#x25BC;
            </div>
        </button>

        <p class="caption">
            type
        </p>
        <HelpText
            text="The type of the identifier."
            url="https://github.com/citation-file-format/citation-file-format/blob/1.1.0/README.md#identifier-type-strings"
        />
        <input
            v-bind:value="identifier.type"
            v-bind:class="{error: validation_type.error }"
            placeholder="doi | swh | url | other"
            v-on:input="update_identifier_type($event)"
        >
        <p
            v-if="validation_type.error"
            class="message">
                {{ validation_type.msg }}
        </p>
        <p class="caption">
            value
        </p>
        <input
            v-bind:value="identifier.value"
            v-bind:class="{error: validation_value.error }"
            v-on:input="update_identifier_value($event)"
        >
        <p
            v-if="validation_value.error"
            class="message">
                {{ validation_value.msg }}
        </p>

    </li>
</template>

<script>

import {move_identifier_down,
        move_identifier_up,
        remove_identifier,
        update_identifier_type,
        update_identifier_value} from './IdentifierEmitters.js';

import {validate_type,
        validate_value} from './IdentifierValidators.js';

import HelpText from './HelpText.vue';

export default {
    name: 'Identifier',
    components: {
        HelpText
    },
    props: {
        identifier: Object
    },
    computed: {
        validation_type: validate_type,
        validation_value: validate_value
    },
    methods: {
        move_identifier_down,
        move_identifier_up,
        remove_identifier,
        update_identifier_type,
        update_identifier_value
    }
};
</script>

<style>

    .button-spacer {
        min-width: 16px;
    }

    .move-up-button, .move-down-button, .remove-button {
        background-color: #ccc;
        border-width: 1px;
        border-style: solid;
        border-color: #222;
        border-radius: 2px;
        font-size: 100%;
        padding: 2px 10px;
        color: #222;
        margin-bottom: 10px;
    }

    .move-up-button:hover, .move-down-button:hover, .remove-button:hover {
        background-color: #ddd;
    }

</style>
