<template>
    <li>
        <button v-on:click='remove' title='Remove this author'>-</button>
        <button v-on:click='move_up' title='Move this author up'>&uarr;</button>
        <button v-on:click='move_down' title='Move this author down'>&darr;</button>
        <ul>
            <li>given-names<input v-model="author.given_names"/></li>
            <li>name-particle<input v-model="author.name_particle"/></li>
            <li>family-names<input v-model="author.family_names"/></li>
            <li>name-suffix<input v-model="author.name_suffix"/></li>
            <li>orcid<input v-model="author.orcid"/></li>
            <li>affiliation<input v-model="author.affiliation"/></li>
        </ul>
    </li>
</template>

<script>
export default {
    methods: {
        remove: function () {
            this.$emit('remove-author', this.author.id)
        },
        move_down: function () {
            this.$emit('move-author-down', this.author.id)
        },
        move_up: function () {
            this.$emit('move-author-up', this.author.id)
        }
    },
    name: 'Author',
    props: {
        author: Object
    }
};
</script>

<style>
</style>
