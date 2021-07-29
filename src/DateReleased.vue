<template>
    <li>
        <p
            v-show="has_date_released"
            class="caption"
        >
            date-released
            <button
                v-show="has_date_released"
                tabindex="-1"
                title="Remove date-released"
                v-on:click="remove"
            >
                remove
            </button>
        </p>
        <HelpText
            v-show="has_date_released"
            text="The release date of the software version."
            url="https://github.com/citation-file-format/citation-file-format/blob/main/README.md#software-citation-metadata-required"
        />
        <button
            v-show="!has_date_released"
            tabindex="-1"
            title="Add date-released"
            v-on:click="add"
        >
            Add date-released
        </button>
        <input
            v-show="has_date_released"
            v-bind:class="{error: validation.error}"
            v-bind:value="date_released"
            type="text"
            v-on:input="update($event)"
        >
        <p
            v-if="validation.error"
            v-show="has_date_released"
            class="message"
        >
            {{ validation.msg }}
        </p>
    </li>

</template>

<script>
import {add,
        remove,
        update} from './DateReleasedEmitters.js';

import {validate} from './DateReleasedValidators.js';

import HelpText from './HelpText.vue';

export default {
    name: 'DateReleased',
    components: {
        HelpText
    },
    props: {
        date_released: String
    },
    computed: {
        has_date_released: function () {
            return this.$props.hasOwnProperty('date_released') &&
                this.$props.date_released !== undefined
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
</style>
