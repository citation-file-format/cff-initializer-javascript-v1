<template>
    <li>authors <button v-on:click='add' title='Add author'>+</button>
        <ul>
            <Author
            v-for='author in authors'
            v-bind:author="author"
            v-bind:key="author.id"
            v-on:remove-author="remove"
            v-on:move-author-up="move_up"
            v-on:move-author-down="move_down"/>
        </ul>
    </li>
</template>

<script>
import Author from './Author.vue';
export default {
    components: {
        Author
    },
    data: function () {
        return {
            author_id: -1,
            authors: []
        }
    },
    methods: {
        add: function () {
            this.authors.push({
                affiliation: '',
                family_names: '',
                given_names: '',
                id: this.author_id += 1,
                name_particle: '',
                name_suffix: '',
                orcid: ''
            })
        },
        move_down: function (author_id) {
            let position = this.authors.findIndex(function (author) {
                return author.id == author_id;
            });
            if (position < this.authors.length - 1) {
                this.authors = [].concat(this.authors.slice(0, position),
                                         this.authors.slice(position, position + 2).reverse(),
                                         this.authors.slice(position + 2))
            }
        },
        move_up: function (author_id) {
            let position = this.authors.findIndex(function (author) {
                return author.id == author_id;
            });
            if (position > 0) {
                this.authors = [].concat(this.authors.slice(0, position - 1),
                                         this.authors.slice(position - 1, position + 1).reverse(),
                                         this.authors.slice(position + 1))
            }
        },
        remove: function (author_id) {
            this.authors = this.authors.filter(function (author) {
                return author.id !== author_id;
            })
        }
    },
    name: 'Authors'
};
</script>


<style>
</style>
