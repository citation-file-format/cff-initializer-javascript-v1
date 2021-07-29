<template>
    <li>
        <p class="caption">
            authors
            <button
                class="add-button"
                tabindex="-1"
                title="Add author"
                v-on:click="add">
                <div class="button-spacer">
                    +
                </div>
            </button>
        </p>
        <HelpText
            text="The author(s) of the software"
            url="https://github.com/citation-file-format/citation-file-format/blob/main/README.md#software-citation-metadata-required"
        />
        <ul class="authors">
            <Author
                v-for="author in authors"
                v-bind:author="author"
                v-bind:key="author.id"
                v-on:add-affiliation="add_affiliation"
                v-on:add-name-particle="add_name_particle"
                v-on:add-name-suffix="add_name_suffix"
                v-on:add-orcid="add_orcid"
                v-on:move-down="move_down"
                v-on:move-up="move_up"
                v-on:remove="remove"
                v-on:remove-affiliation="remove_affiliation"
                v-on:remove-name-particle="remove_name_particle"
                v-on:remove-name-suffix="remove_name_suffix"
                v-on:remove-orcid="remove_orcid"
                v-on:update-affiliation="update_affiliation"
                v-on:update-family-names="update_family_names"
                v-on:update-given-names="update_given_names"
                v-on:update-name-particle="update_name_particle"
                v-on:update-name-suffix="update_name_suffix"
                v-on:update-orcid="update_orcid"
            />
        </ul>
    </li>
</template>

<script>
import {add,
        add_affiliation,
        add_name_suffix,
        add_name_particle,
        add_orcid,
        move_down,
        move_up,
        remove,
        remove_affiliation,
        remove_name_particle,
        remove_name_suffix,
        remove_orcid,
        update_affiliation,
        update_family_names,
        update_given_names,
        update_name_particle,
        update_name_suffix,
        update_orcid} from './AuthorsEmitters.js';

import Author from './Author.vue';
import HelpText from './HelpText.vue';

export default {
    name: 'Authors',
    components: {
        Author,
        HelpText
    },
    props: {
        authors: Array
    },
    methods: {
        add,
        add_affiliation,
        add_name_particle,
        add_name_suffix,
        add_orcid,
        move_down,
        move_up,
        remove,
        remove_affiliation,
        remove_name_particle,
        remove_name_suffix,
        remove_orcid,
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

    .add-button {
        background-color: #ccc;
        border-width: 1px;
        border-style: solid;
        border-color: #222;
        border-radius: 2px;
        font-size: 100%;
        padding: 2px 10px;
        color: #222;
    }

    .add-button:hover {
        background-color: #ddd;
    }

    .authors {
        padding-left:0px;
        padding-bottom: 2em;
    }

</style>
