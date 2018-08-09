<template>
    <li>
        <button
            v-on:click='remove'
            title='Remove this author'
        >-</button>

        <button
            v-on:click='move_up'
            title='Move this author up'
        >&uarr;</button>

        <button
            v-on:click='move_down'
            title='Move this author down'
        >&darr;</button>

        <ul>
            <li>
                given-names
                <input
                    v-bind:value="author.given_names"
                    v-on:keyup="update_given_names($event)"
                />
            </li>

            <li>
                name-particle
                <input
                    v-bind:value="author.name_particle"
                    v-on:keyup="update_name_particle($event)"
                />
            </li>

            <li>
                family-names
                <input
                    v-bind:value="author.family_names"
                    v-on:keyup="update_family_names($event)"
                />
            </li>

            <li>
                name-suffix
                <input
                    v-bind:value="author.name_suffix"
                    v-on:keyup="update_name_suffix($event)"
                />
            </li>

            <li>
                orcid
                <input
                    v-bind:value="author.orcid"
                    v-on:keyup="update_orcid($event)"
                />
            </li>

            <li>
                affiliation
                <input
                    v-bind:value="author.affiliation"
                    v-on:keyup="update_affiliation($event)"
                />
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

export default {
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
</style>
