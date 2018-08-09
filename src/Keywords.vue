<template>
    <li>
        <p class="caption">
            keywords <button v-on:click='add' title='Add keyword'>+</button>
        </p>
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
