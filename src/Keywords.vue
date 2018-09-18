<template>
    <li v-if="has_keywords">
        <p class="caption">
            keywords
            <button
                tabindex="-1"
                title="Remove keywords"
                v-on:click="remove_keywords"
            >
                remove
            </button>
            <button
                class="add-button"
                tabindex="-1"
                title="Add keyword"
                v-on:click="add_keyword">
                <div class="button-spacer">
                    +
                </div>
            </button>
        </p>
        <ul>
            <Keyword
                v-for="keyword in keywords"
                v-bind:key="keyword.id"
                v-bind:keyword="keyword"
                v-on:move-keyword-down="move_keyword_down"
                v-on:move-keyword-up="move_keyword_up"
                v-on:remove-keyword="remove_keyword"
                v-on:update-keyword="update_keyword"
            />
        </ul>
    </li>
    <li v-else>
        <button
            tabindex="-1"
            title="Add keywords"
            v-on:click="add_keywords"
        >
            Add keywords
        </button>
    </li>
</template>

<script>

import {add_keyword,
        add_keywords,
        move_keyword_down,
        move_keyword_up,
        remove_keyword,
        remove_keywords,
        update_keyword} from './KeywordsEmitters.js';

import Keyword from './Keyword.vue';

export default {
    name: 'Keywords',
    components: {
        Keyword
    },
    props: {
        keywords: Array
    },
    computed: {
        has_keywords: function () {
            return this.$props.hasOwnProperty('keywords') &&
                this.$props.keywords !== undefined
        }
    },
    methods: {
        add_keyword,
        add_keywords,
        move_keyword_down,
        move_keyword_up,
        remove_keyword,
        remove_keywords,
        update_keyword
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
