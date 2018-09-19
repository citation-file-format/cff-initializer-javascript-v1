<template >
    <li v-if="has_name_suffix">
        <p class="caption">
            name-suffix
            <button
                tabindex="-1"
                title="Remove name-suffix"
                v-on:click="remove"
            >
                remove
            </button>
        </p>
        <input
            v-bind:value="name_suffix"
            v-on:input="update($event)"
        >
    </li>
    <li v-else>
        <button
            tabindex="-1"
            title="Add name-suffix"
            v-on:click="add"
        >
            Add name-suffix
        </button>
    </li>
</template>

<script>

import {add,
        remove,
        update} from './NameSuffixEmitters.js';

export default {
    name: 'NameSuffix',
    components: {
    },
    props: {
        name_suffix: String
    },
    computed: {
        has_name_suffix: function () {
            return this.$props.hasOwnProperty('name_suffix') &&
                this.$props.name_suffix !== undefined;
        }
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
