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
            <Affiliation
                v-bind:affiliation="author.affiliation"
                v-on:add="add_affiliation"
                v-on:remove="remove_affiliation"
                v-on:update="update_affiliation"
            />

            <li>
                <p class="caption">
                    given-names
                </p>
                <HelpText
                    text="Specify given and any other names."
                    url="https://github.com/citation-file-format/citation-file-format/blob/1.1.0/README.md#exemplary-uses-2"
                />
                <input
                    v-bind:value="author.given_names"
                    v-on:input="update_given_names($event)"
                >
            </li>

            <NameParticle
                v-bind:name_particle="author.name_particle"
                v-on:add="add_name_particle"
                v-on:remove="remove_name_particle"
                v-on:update="update_name_particle"
            />

            <li>
                <p class="caption">
                    family-names
                </p>
                <HelpText
                    text="Specify family names, including combinations of given and patronymic forms."
                    url="https://github.com/citation-file-format/citation-file-format/blob/1.1.0/README.md#exemplary-uses-2"
                />
                <input
                    v-bind:value="author.family_names"
                    v-on:input="update_family_names($event)"
                >
            </li>

            <NameSuffix
                v-bind:name_suffix="author.name_suffix"
                v-on:add="add_name_suffix"
                v-on:remove="remove_name_suffix"
                v-on:update="update_name_suffix"
            />

            <AuthorOrcid
                v-bind:orcid="author.orcid"
                v-on:add="add_orcid"
                v-on:remove="remove_orcid"
                v-on:update="update_orcid"
            />

        </ul>
    </li>
</template>

<script>

import Affiliation from './Affiliation.vue';
import AuthorOrcid from './Orcid.vue';
import HelpText from './HelpText.vue';
import NameParticle from './NameParticle.vue';
import NameSuffix from './NameSuffix.vue';

import {add_affiliation,
        add_orcid,
        add_name_particle,
        add_name_suffix,
        remove,
        remove_affiliation,
        remove_orcid,
        remove_name_particle,
        remove_name_suffix,
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
        Affiliation,
        AuthorOrcid,
        HelpText,
        NameParticle,
        NameSuffix
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
        add_affiliation,
        add_orcid,
        add_name_particle,
        add_name_suffix,
        remove,
        remove_affiliation,
        remove_orcid,
        remove_name_particle,
        remove_name_suffix,
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

<style scoped>

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

    ul {
        padding-bottom: 1em;
    }


</style>
