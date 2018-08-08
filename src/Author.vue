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
        },
        update_affiliation: function (event) {
            let payload = {
                id: this.author.id,
                value: event.target.value
            };
            this.$emit('update-affiliation', payload);
        },
        update_family_names: function (event) {
            let payload = {
                id: this.author.id,
                value: event.target.value
            };
            this.$emit('update-family-names', payload);
        },
        update_given_names: function (event) {
            let payload = {
                id: this.author.id,
                value: event.target.value
            };
            this.$emit('update-given-names', payload);
        },
        update_name_particle: function (event) {
            let payload = {
                id: this.author.id,
                value: event.target.value
            };
            this.$emit('update-name-particle', payload);
        },
        update_name_suffix: function (event) {
            let payload = {
                id: this.author.id,
                value: event.target.value
            };
            this.$emit('update-name-suffix', payload);
        },
        update_orcid: function (event) {
            let payload = {
                id: this.author.id,
                value: event.target.value
            };
            this.$emit('update-orcid', payload);
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
