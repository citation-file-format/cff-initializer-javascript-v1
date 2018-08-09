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

import {move_down,
        move_up,
        remove,
        update} from './KeywordEmitters.js';

export default {
    methods: {
        move_down,
        move_up,
        remove,
        update
    },
    name: 'Keyword',
    props: {
        keyword: Object
    },
};
</script>

<style>
</style>
