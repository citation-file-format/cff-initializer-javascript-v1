<template>
    <li>keywords <button v-on:click='add' title='Add keyword'>+</button>
        <ul>
            <Keyword
            v-for='keyword in keywords'
            v-bind:keyword="keyword"
            v-bind:key="keyword.id"
            v-on:remove-keyword="remove"
            v-on:move-keyword-up="move_up"
            v-on:move-keyword-down="move_down"/>
        </ul>
    </li>
</template>

<script>
import Keyword from './Keyword.vue';
export default {
    components: {
        Keyword
    },
    data: function () {
        return {
            keyword_id: -1,
            keywords: [],
        }
    },
    methods: {
        add: function () {
            this.keywords.push({
                id: this.keyword_id += 1,
                text: '~'
            })
        },
        move_down: function (keyword_id) {
            let position = this.keywords.findIndex(function (keyword) {
                return keyword.id == keyword_id;
            });
            if (position < this.keywords.length - 1) {
                this.keywords = [].concat(this.keywords.slice(0, position),
                                          this.keywords.slice(position, position + 2).reverse(),
                                          this.keywords.slice(position + 2))
            }
        },
        move_up: function (keyword_id) {
            let position = this.keywords.findIndex(function (keyword) {
                return keyword.id == keyword_id;
            });
            if (position > 0) {
                this.keywords = [].concat(this.keywords.slice(0, position - 1),
                                          this.keywords.slice(position - 1, position + 1).reverse(),
                                          this.keywords.slice(position + 1))
            }
        },
        remove: function (keyword_id) {
            this.keywords = this.keywords.filter(function (keyword) {
                return keyword.id !== keyword_id;
            })
        }
    },
    name: 'Keywords'
};
</script>

<style>
</style>
