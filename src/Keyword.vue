<template>
    <li>
        <button
            tabindex="-1"
            title="Remove this keyword"
            v-on:click="remove"
        >-</button>

        <button
            tabindex="-1"
            title="Move this keyword up"
            v-on:click="move_up"
        >&uarr;</button>

        <button
            tabindex="-1"
            title="Move this keyword down"
            v-on:click="move_down"
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
