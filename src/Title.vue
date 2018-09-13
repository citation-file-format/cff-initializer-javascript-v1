<template>
    <li>
        <p
            class="caption"
            v-show="has_title"
        >
            title
            <button
                tabindex="-1"
                title="Remove title"
                v-on:click="remove"
                v-show="has_title"
            >remove
            </button>
        </p>
        <button
            tabindex="-1"
            title="Add title"
            v-on:click="add"
            v-show="!has_title"
        >
            Add title
        </button>
        <input
            type="text"
            v-bind:value="title"
            v-on:input="update($event)"
            v-show="has_title"
        />
    </li>
</template>

<script>
import {add,
        remove,
        update} from './TitleEmitters.js';

export default {
    components: {
    },
    computed: {
        has_title: function () {
            return this.$props.hasOwnProperty('title') &&
                this.$props.title !== undefined
        }
    },
    methods: {
        add,
        remove,
        update
    },
    name: 'Title',
    props: {
        title: String
    }
};
</script>

<style scoped>
</style>
