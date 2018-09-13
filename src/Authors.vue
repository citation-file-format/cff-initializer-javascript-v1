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
        <ul class="authors">
            <Author
                v-bind:author="author"
                v-bind:key="author.id"
                v-for="author in authors"
                v-on:move-down="move_down"
                v-on:move-up="move_up"
                v-on:remove="remove"
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
        move_down,
        move_up,
        remove,
        update_affiliation,
        update_family_names,
        update_given_names,
        update_name_particle,
        update_name_suffix,
        update_orcid} from './AuthorsEmitters.js';

import Author from './Author.vue';

export default {
    components: {
        Author
    },
    methods: {
        add,
        move_down,
        move_up,
        remove,
        update_affiliation,
        update_family_names,
        update_given_names,
        update_name_particle,
        update_name_suffix,
        update_orcid
    },
    name: 'Authors',
    props: {
        authors: Array
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
    }

</style>
