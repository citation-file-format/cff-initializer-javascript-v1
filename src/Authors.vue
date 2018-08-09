<template>
    <li>
        <p class="caption">
            authors <button v-on:click='add' title='Add author'>+</button>
        </p>
        <ul>
            <Author
                v-for='author in authors'
                v-bind:author="author"
                v-bind:key="author.id"
                v-on:move-down="move_down"
                v-on:move-up="move_up"
                v-on:remove="remove"
                v-on:update-given-names="update_given_names"
                v-on:update-name-particle="update_name_particle"
                v-on:update-family-names="update_family_names"
                v-on:update-name-suffix="update_name_suffix"
                v-on:update-orcid="update_orcid"
                v-on:update-affiliation="update_affiliation"
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

<style>
</style>
