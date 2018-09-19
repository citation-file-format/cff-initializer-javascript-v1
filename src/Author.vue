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

        <p>
            {{ fullname }}
        </p>

        <ul>
            <!-- <li>
                <p class="caption">
                    given-names
                </p>
                <input
                    v-bind:value="author.given_names"
                    v-on:input="update_given_names($event)"
                >
            </li>

            <li>
                <p class="caption">
                    name-particle
                </p>
                <input
                    v-bind:value="author.name_particle"
                    v-on:input="update_name_particle($event)"
                >
            </li>

            <li>
                <p class="caption">
                    family-names
                </p>
                <input
                    v-bind:value="author.family_names"
                    v-on:input="update_family_names($event)"
                >
            </li>

            <li>
                <p class="caption">
                    name-suffix
                </p>
                <input
                    v-bind:value="author.name_suffix"
                    v-on:input="update_name_suffix($event)"
                >
            </li> -->

            <AuthorOrcid
                v-bind:orcid="author.orcid"
                v-on:add="add_orcid"
                v-on:remove="remove_orcid"
                v-on:update="update_orcid"
            />

            <li>
                <p class="caption">
                    affiliation
                </p>
                <input
                    v-bind:value="author.affiliation"
                    v-on:input="update_affiliation($event)"
                >
            </li>

        </ul>
    </li>
</template>

<script>
import AuthorOrcid from './AuthorOrcid.vue';

import {add_orcid,
        remove,
        remove_orcid,
        move_down,
        move_up,
        update_affiliation,
        update_family_names,
        update_given_names,
        update_name_particle,
        update_name_suffix,
        update_orcid} from './AuthorEmitters.js';

export default {
    name: 'Author',
    components: {
        AuthorOrcid
    },
    props: {
        author: Object
    },
    computed: {
        fullname: function () {
            let name_parts = [];
            if (this.author.hasOwnProperty('given_names') && this.author.given_names !== '') {
                name_parts.push(this.author.given_names);
            }
            if (this.author.hasOwnProperty('name_particle') && this.author.name_particle !== '') {
                name_parts.push(this.author.name_particle);
            }
            if (this.author.hasOwnProperty('family_names') && this.author.family_names !== '') {
                name_parts.push(this.author.family_names);
            }
            if (this.author.hasOwnProperty('name_suffix') && this.author.name_suffix !== '') {
                name_parts.push(this.author.name_suffix);
            }
            return name_parts.join(' ');
        }
    },
    methods: {
        add_orcid,
        remove,
        remove_orcid,
        move_down,
        move_up,
        update_affiliation,
        update_family_names,
        update_given_names,
        update_name_particle,
        update_name_suffix,
        update_orcid
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
