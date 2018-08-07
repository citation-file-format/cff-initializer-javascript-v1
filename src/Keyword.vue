<template>
    <li>
        <button v-on:click='remove' title='Remove this keyword'>-</button>
        <button v-on:click='move_up' title='Move this keyword up'>&uarr;</button>
        <button v-on:click='move_down' title='Move this keyword down'>&darr;</button>
        <input v-model='keyword.text'/>
    </li>
</template>

<script>
import by_position from './sort_by_position';
export default {
    name: 'Keyword',
    methods: {
        // methods that manipulate the keywords array via $parent should be part
        // of some parent and be called via an event; also shouldn't replicate indexing
        remove: function () {
            this.$emit('remove-keyword', this.keyword.id);
        },
        move_down: function () {
            this.$emit('move-keyword-down', this.keyword.id);
        },
        move_up: function () {
            this.$emit('move-keyword-up', this.keyword.id);
        }
    },
    props: ['keyword']
};
</script>

<style>
</style>
