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
import by_position from './sort_by_position'
export default {
    name: 'author',
    data: function () {
        return {};
    },
    methods: {
        // methods that manipulate the authors array via $parent should be part
        // of some parent and be called via an event; also shouldn't replicate indexing
        remove: function () {
            let id = this.author.id;
            this.$parent.authors = this.$parent.authors.filter(function (author) {
                return author.id !== id;
            })
        },
        move_up: function () {
            let id = this.author.id;
            let position = this.$parent.authors.findIndex(function (author) {
                return author.id == id;
            });
            if (position > 0) {
                let p0 = this.$parent.authors[position].position;
                let p1 = this.$parent.authors[position - 1].position;
                this.$parent.authors[position].position = p1;
                this.$parent.authors[position - 1].position = p0;
            }
            this.$parent.authors.sort(by_position);
        },
        move_down: function () {
            let id = this.author.id;
            let position = this.$parent.authors.findIndex(function (author) {
                return author.id == id;
            });
            if (position < this.$parent.authors.length - 1) {
                let p0 = this.$parent.authors[position].position
                let p1 = this.$parent.authors[position + 1].position
                this.$parent.authors[position].position = p1;
                this.$parent.authors[position + 1].position = p0;
            }
            this.$parent.authors.sort(by_position);
        }
    },
    props: ['author']
}
</script>

<style>
</style>
