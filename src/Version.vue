<template>
    <li>
        <p
            class="caption"
            v-show="has_version"
        >
            version
            <button
                class="button remove-button"
                tabindex="-1"
                title="Remove version"
                v-on:click="remove"
                v-show="has_version"
            >
                <div class="button-spacer">-</div>
            </button>
        </p>
        <button
            class="button add-button"
            tabindex="-1"
            title="Add version"
            v-on:click="add"
            v-show="!has_version"
        >Add <span style="font-family: 'Inconsolata', monospace">version</span></button>
        <input
            type="text"
            v-bind:value="version"
            v-on:input="update($event)"
            v-show="has_version"
        />
        <p class="message">
        </p>
    </li>
</template>

<script>

import {add,
        remove,
        update} from './VersionEmitters.js';

export default {
    computed: {
        has_version: function () {
            return this.$props.hasOwnProperty('version') &&
                this.$props.version !== undefined
        }
    },
    methods: {
        add,
        remove,
        update
    },
    name: 'Version',
    props: {
        version: String
    },
};
</script>

<style scoped>
.button {
    background-color: #ccc;
    border-color: #222;
    border-radius: 2px;
    border-style: solid;
    border-width: 1px;
    color: #222;
    font-size: 100%;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.8rem;
}

.button:hover {
    background-color: #ddd;
}

.button-spacer {
    min-width: 16px;
}

.add-button {
    margin-top: 1em;
    padding-bottom: 0.5em;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0.5em;
}

.remove-button {
    padding: 2px 10px;
}

</style>
