<template>
    <li>
        <button
            v-on:click="remove"
            title="Remove this keyword"
        >-</button>

        <button
            v-on:click="move_up"
            title="Move this keyword up"
        >&uarr;</button>

        <button
            v-on:click="move_down"
            title="Move this keyword down"
        >&darr;</button>

        <input
            v-bind:value="keyword.text"
            v-on:keyup="update($event)"
        />
    </li>
</template>

<script>
export default {
    methods: {
        move_down: function () {
            this.$emit('move-down', this.keyword.id);
        },
        move_up: function () {
            this.$emit('move-up', this.keyword.id);
        },
        remove: function () {
            this.$emit('remove', this.keyword.id);
        },
        update: function (event) {
            this.$emit('update', {
                id: this.keyword.id,
                value: event.target.value
            })
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
