<template>
    <li>
        <button
            class="remove-button"
            tabindex="-1"
            title="Remove this author"
            v-on:click="remove"
        >
            <div class="button-spacer">
            -
            </div>
        </button>

        <button
            class="move-up-button"
            tabindex="-1"
            title="Move this author up"
            v-on:click="move_up"
        >
            <div class="button-spacer">
                &#x25B2;
            </div>
        </button>

        <button
            class="move-down-button"
            tabindex="-1"
            title="Move this author down"
            v-on:click="move_down"
        >
            <div class="button-spacer">
                &#x25BC;
            </div>
        </button>

        <ul>
            <li>
                <p class="caption">
                    given-names
                </p>
                <input
                    v-bind:value="author.given_names"
                    v-on:input="update_given_names($event)"
                />
                <p class="message">
                </p>
            </li>

            <li>
                <p class="caption">
                    name-particle
                </p>
                <input
                    v-bind:value="author.name_particle"
                    v-on:input="update_name_particle($event)"
                />
                <p class="message">
                </p>
            </li>

            <li>
                <p class="caption">
                    family-names
                </p>
                <input
                    v-bind:value="author.family_names"
                    v-on:input="update_family_names($event)"
                />
                <p class="message">
                </p>
            </li>

            <li>
                <p class="caption">
                    name-suffix
                </p>
                <input
                    v-bind:value="author.name_suffix"
                    v-on:input="update_name_suffix($event)"
                />
                <p class="message">
                </p>
            </li>

            <li>
                <p class="caption">
                    orcid
                </p>
                <input
                    v-bind:value="author.orcid"
                    v-bind:class="{error: orcid_validation.error }"
                    v-on:input="update_orcid($event)"
                />
                <p class="message" v-if="orcid_validation.error">
                    {{orcid_validation.msg}}
                </p>
            </li>

            <li>
                <p class="caption">
                    affiliation
                </p>
                <input
                    v-bind:value="author.affiliation"
                    v-on:input="update_affiliation($event)"
                />
                <p class="message">
                </p>
            </li>

        </ul>
    </li>
</template>

<script>
import {remove,
        move_down,
        move_up,
        update_affiliation,
        update_family_names,
        update_given_names,
        update_name_particle,
        update_name_suffix,
        update_orcid} from './AuthorEmitters.js';

import {validate_orcid} from './AuthorValidators.js';

export default {
    computed: {
        orcid_validation: validate_orcid
    },
    methods: {
        remove,
        move_down,
        move_up,
        update_affiliation,
        update_family_names,
        update_given_names,
        update_name_particle,
        update_name_suffix,
        update_orcid
    },
    name: 'Author',
    props: {
        author: Object
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

    }

    .move-up-button:hover, .move-down-button:hover, .remove-button:hover {
        background-color: #ddd;
    }
</style>
