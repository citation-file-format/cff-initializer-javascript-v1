<template>
    <li>authors <button v-on:click='add' title='Add author'>+</button>
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
import Author from './Author.vue';
export default {
    components: {
        Author
    },
    methods: {
        add: function () {
            this.$emit('add');
        },
        move_down: function (author_id) {
            this.$emit('move-down', author_id)
        },
        move_up: function (author_id) {
            this.$emit('move-up', author_id)
        },
        remove: function (author_id) {
            this.$emit('remove', author_id)
        },
        update_affiliation: function (payload) {
            this.$emit('update-affiliation', payload)
        },
        update_family_names: function (payload) {
            this.$emit('update-family-names', payload)
        },
        update_given_names: function (payload) {
            this.$emit('update-given-names', payload)
        },
        update_name_particle: function (payload) {
            this.$emit('update-name-particle', payload)
        },
        update_name_suffix: function (payload) {
            this.$emit('update-name-suffix', payload)
        },
        update_orcid: function (payload) {
            this.$emit('update-orcid', payload)
        },
    },
    name: 'Authors',
    props: {
        authors: Array
    }
};
</script>

<style>
</style>
