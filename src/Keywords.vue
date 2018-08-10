<template>
    <li>
        <p class="caption">
            keywords
            <button
                class="add-button"
                tabindex="-1"
                title="Add keyword"
                v-on:click="add">
                <div class="button-spacer">
                    +
                </div>
            </button>
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

    .button-spacer {
        min-width: 16px;
    }

    .add-button {
        background-color: #ccc;
        border-width: 1px;
        border-style: solid;
        border-color: #222;
        border-radius: 2px;
        font-size: 100%;
        padding: 2px 10px;
        color: #222;
    }

    .add-button:hover {
        background-color: #ddd;
    }

</style>
