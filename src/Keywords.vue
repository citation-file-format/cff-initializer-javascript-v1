<template>
    <li>keywords <button v-on:click='add' title='Add keyword'>+</button>
        <ul>
            <Keyword
                v-for='keyword in keywords'
                v-bind:keyword="keyword"
                v-bind:key="keyword.id"
                v-on:remove-keyword="remove"
                v-on:move-keyword-up="move_up"
                v-on:move-keyword-down="move_down"
            />
        </ul>
    </li>
</template>

<script>
import Keyword from './Keyword.vue';
export default {
    components: {
        Keyword
    },
    methods: {
        add: function () {
            this.$emit('add-keyword');
        },
        move_down: function (keyword_id) {
            this.$emit('move-keyword-down', keyword_id)
        },
        move_up: function (keyword_id) {
            this.$emit('move-keyword-up', keyword_id)
        },
        remove: function (keyword_id) {
            this.$emit('remove-keyword', keyword_id)
        }
    },
    name: 'Keywords',
    props: {
        keywords: Array
    }
};
</script>

<style>
</style>
