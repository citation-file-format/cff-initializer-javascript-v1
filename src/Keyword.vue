<template>
    <li>
        <button v-on:click='remove' title='Remove this keyword'>-</button>
        <button v-on:click='move_up' title='Move this keyword up'>&uarr;</button>
        <button v-on:click='move_down' title='Move this keyword down'>&darr;</button>
        <input v-bind:value='keyword.text'/>
    </li>
</template>

<script>
export default {
    methods: {
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
    name: 'Keyword',
    props: {
        keyword: Object
    },
};
</script>

<style>
</style>
