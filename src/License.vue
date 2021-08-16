<template>
    <li>
        <p
            v-show="has_license"
            class="caption"
        >
            license:
            <button
                v-show="has_license"
                tabindex="-1"
                title="Remove license"
                v-on:click="remove"
            >
                remove
            </button>
        </p>
        <HelpText
            v-show="has_license"
            text="The license the software version is licensed under."
            url="https://github.com/citation-file-format/citation-file-format/blob/1.1.0/README.md#software-citation-metadata-required"
        />
        <button
            v-show="!has_license"
            tabindex="-1"
            title="Add license"
            v-on:click="add"
        >
            Add license
        </button>
        <input
            v-show="has_license"
            v-bind:value="license"
            v-bind:class="{error: license_validation.error}"
            placeholder="e.g. Apache-2.0, MIT"
            type="text"
            v-on:input="update($event)"
        >
        <p
            v-if="license_validation.error"
            v-show="has_license"
            class="message"
        >
            {{ license_validation.msg }} (See the <a href="https://github.com/spdx/license-list-data/blob/6b77c7a2840009663ee0b083523fc0ad25376b57/json/licenses.json">complete list</a>)
        </p>
    </li>
</template>

<script>
import {add,
        remove,
        update} from './LicenseEmitters.js';

import {validate_license} from './LicenseValidators.js';

import HelpText from './HelpText.vue';

export default {
    name: 'License',
    components: {
        HelpText
    },
    props: {
        license: String
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
    }
};
</script>

<style scoped>
</style>
