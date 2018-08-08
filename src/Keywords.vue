<template>
    <li>keywords <button v-on:click='add' title='Add keyword'>+</button>
        <ul>
            <Keyword
                v-for='keyword in keywords'
                v-bind:keyword="keyword"
                v-bind:key="keyword.id"
                v-on:remove="remove"
                v-on:move-up="move_up"
                v-on:move-down="move_down"
                v-on:update="update"
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
            this.$emit('add');
        },
        move_down: function (keyword_id) {
            this.$emit('move-down', keyword_id)
        },
        move_up: function (keyword_id) {
            this.$emit('move-up', keyword_id)
        },
        remove: function (keyword_id) {
            this.$emit('remove', keyword_id)
        },
        update: function (payload) {
            this.$emit('update', payload)
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
