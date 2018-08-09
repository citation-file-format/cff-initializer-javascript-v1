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
                <p class="caption">
                    given-names
                </p>
                <input
                    v-bind:value="author.given_names"
                    v-on:keyup="update_given_names($event)"
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
                    v-on:keyup="update_name_particle($event)"
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
                    v-on:keyup="update_family_names($event)"
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
                    v-on:keyup="update_name_suffix($event)"
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
                    v-on:keyup="update_orcid($event)"
                />
                <p class="message">
                </p>
            </li>

            <li>
                <p class="caption">
                    affiliation
                </p>
                <input
                    v-bind:value="author.affiliation"
                    v-on:keyup="update_affiliation($event)"
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
