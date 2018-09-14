<template>
    <li>
        <p
            class="caption"
            v-show="has_license"
        >
            license:
            <button
                tabindex="-1"
                title="Remove license"
                v-on:click="remove"
                v-show="has_license"
            >
                remove
            </button>
        </p>
        <button
            tabindex="-1"
            title="Add license"
            v-on:click="add"
            v-show="!has_license"
        >
            Add license
        </button>
        <input
            placeholder="e.g. Apache-2.0, MIT"
            type="text"
            v-bind:class="{error: license_validation.error}"
            v-bind:value="license"
            v-on:input="update($event)"
            v-show="has_license"
        />
        <p
            class="message"
            v-if="license_validation.error"
            v-show="has_license"
        >
            {{ license_validation.msg }}
        </p>

    </li>
</template>

<script>
import {add,
        remove,
        update} from './LicenseEmitters.js';

import {validate_license} from './LicenseValidators.js';

export default {
    components: {
    },
    computed: {
        has_license: function () {
            return this.$props.hasOwnProperty('license') &&
                this.$props.license !== undefined
        },
        license_validation: validate_license
    },
    methods: {
        add,
        remove,
        update
    },
    name: 'License',
    props: {
        license: String
    }
};
</script>

<style scoped>
</style>
