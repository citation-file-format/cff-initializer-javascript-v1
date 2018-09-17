<template>
    <li>
        <p
            class="caption"
            v-show="has_date_released"
        >
            date-released
            <button
                tabindex="-1"
                title="Remove date-released"
                v-on:click="remove"
                v-show="has_date_released"
            >
                remove
            </button>
        </p>
        <button
            tabindex="-1"
            title="Add date-released"
            v-on:click="add"
            v-show="!has_date_released"
        >
            Add date-released
        </button>
        <input
            type="text"
            v-bind:class="{error: validation.error}"
            v-bind:value="date_released"
            v-on:input="update($event)"
            v-show="has_date_released"
        />
        <p
            class="message"
            v-if="validation.error"
            v-show="has_date_released"
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

export default {
    components: {
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
    },
    name: 'DateReleased',
    props: {
        date_released: String
    }
};
</script>

<style>
</style>
