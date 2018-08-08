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
            this.$emit('add-author');
        },
        move_down: function (author_id) {
            this.$emit('move-author-down', author_id)
        },
        move_up: function (author_id) {
            this.$emit('move-author-up', author_id)
        },
        remove: function (author_id) {
            this.$emit('remove-author', author_id)
        }
    },
    name: 'Authors',
    props: {
        authors: Array
    }
};
</script>

<style>
</style>
