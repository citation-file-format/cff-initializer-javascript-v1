<template>
    <li v-if="has_name_particle">
        <p class="caption">
            name-particle
            <button
                tabindex="-1"
                title="Remove name-particle"
                v-on:click="remove"
            >
                remove
            </button>
        </p>
        <HelpText
            text="Specify nobiliary particles and prepositions, such as in Ludwig van Beethoven or Rafael van der Vaart."
            url="https://github.com/citation-file-format/citation-file-format/blob/1.1.0/README.md#exemplary-uses-2"
        />
        <input
            v-bind:class="{error: validation.error }"
            v-bind:value="name_particle"
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
            title="Add name-particle"
            v-on:click="add"
        >
            Add name-particle
        </button>
    </li>
</template>

<script>

import {add,
        remove,
        update} from './NameParticleEmitters.js';

import {validate} from './NameParticleValidators.js';

import HelpText from './HelpText.vue';

export default {
    name: 'NameParticle',
    components: {
        HelpText
    },
    props: {
        name_particle: String
    },
    computed: {
        has_name_particle: function () {
            return this.$props.hasOwnProperty('name_particle') &&
                this.$props.name_particle !== undefined;
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
