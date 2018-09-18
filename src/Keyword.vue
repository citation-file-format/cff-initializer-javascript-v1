<template>
    <li>
        <button
            class="remove-button"
            tabindex="-1"
            title="Remove this keyword"
            v-on:click="remove_keyword"
        >
            <div class="button-spacer">
                -
            </div>
        </button>

        <button
            class="move-up-button"
            tabindex="-1"
            title="Move this keyword up"
            v-on:click="move_keyword_up"
        >
            <div class="button-spacer">
                &#x25B2;
            </div>
        </button>

        <button
            class="move-down-button"
            tabindex="-1"
            title="Move this keyword down"
            v-on:click="move_keyword_down"
        >
            <div class="button-spacer">
                &#x25BC;
            </div>
        </button>

        <input
            v-bind:value="keyword.text"
<<<<<<< HEAD
            v-on:input="update_keyword($event)"
        />
=======
            v-on:input="update($event)"
        >
>>>>>>> c8747785da7ef681efe5369e5fc677d8c66c3861
    </li>
</template>

<script>

import {move_keyword_down,
        move_keyword_up,
        remove_keyword,
        update_keyword} from './KeywordEmitters.js';

export default {
    name: 'Keyword',
    props: {
        keyword: Object
    },
    methods: {
<<<<<<< HEAD
        move_keyword_down,
        move_keyword_up,
        remove_keyword,
        update_keyword
    },
    name: 'Keyword',
    props: {
        keyword: Object
    },
=======
        move_down,
        move_up,
        remove,
        update
    }
>>>>>>> c8747785da7ef681efe5369e5fc677d8c66c3861
};
</script>

<style>

    .button-spacer {
        min-width: 16px;
    }

    .move-up-button, .move-down-button, .remove-button {
        background-color: #ccc;
        border-width: 1px;
        border-style: solid;
        border-color: #222;
        border-radius: 2px;
        font-size: 100%;
        padding: 2px 10px;
        color: #222;
        margin-bottom: 10px;
    }

    .move-up-button:hover, .move-down-button:hover, .remove-button:hover {
        background-color: #ddd;
    }

</style>
