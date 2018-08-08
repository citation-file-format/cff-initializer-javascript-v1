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
                <input v-bind:value="author.given_names" />
            </li>

            <li>
                name-particle
                <input v-bind:value="author.name_particle" />
            </li>

            <li>
                family-names
                <input v-bind:value="author.family_names" />
            </li>

            <li>
                name-suffix
                <input v-bind:value="author.name_suffix" />
            </li>

            <li>
                orcid
                <input v-bind:value="author.orcid" />
            </li>

            <li>
                affiliation
                <input v-bind:value="author.affiliation" />
            </li>

        </ul>
    </li>
</template>

<script>
export default {
    methods: {
        remove: function () {
            this.$emit('remove', this.author.id)
        },
        move_down: function () {
            this.$emit('move-down', this.author.id)
        },
        move_up: function () {
            this.$emit('move-up', this.author.id)
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
