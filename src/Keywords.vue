<template>
    <li>
        <p class="caption">
            keywords
            <button
                tabindex="-1"
                title="Add keyword"
                v-on:click="add">+</button>
        </p>
        <ul>
            <Keyword
                v-bind:key="keyword.id"
                v-bind:keyword="keyword"
                v-for="keyword in keywords"
                v-on:move-down="move_down"
                v-on:move-up="move_up"
                v-on:remove="remove"
                v-on:update="update"
            />
        </ul>
    </li>
</template>

<script>
import {add,
        move_down,
        move_up,
        remove,
        update} from './KeywordsEmitters.js';

import Keyword from './Keyword.vue';

export default {
    components: {
        Keyword
    },
    methods: {
        add,
        move_down,
        move_up,
        remove,
        update
    },
    name: 'Keywords',
    props: {
        keywords: Array
    }
};
</script>

<style>
</style>
