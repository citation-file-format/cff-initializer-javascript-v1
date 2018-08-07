<template>
    <li>
        <button v-on:click='remove' title='Remove this keyword'>-</button>
        <button v-on:click='move_up' title='Move this keyword up'>&uarr;</button>
        <button v-on:click='move_down' title='Move this keyword down'>&darr;</button>
        <input v-model='keyword.text'/>
    </li>
</template>

<script>
import by_position from './sort_by_position';
export default {
    name: 'Keyword',
    methods: {
        // methods that manipulate the keywords array via $parent should be part
        // of some parent and be called via an event; also shouldn't replicate indexing
        remove: function () {
            console.log("I want to remove keyword with id " + this.keyword.id);
            this.$emit('remove-keyword-by-id', this.keyword.id);
        },
        move_up: function () {
            let id = this.keyword.id;
            let position = this.$parent.keywords.findIndex(function (keyword) {
                return keyword.id == id;
            });
            if (position > 0) {
                let p0 = this.$parent.keywords[position].position;
                let p1 = this.$parent.keywords[position - 1].position;
                this.$parent.keywords[position].position = p1;
                this.$parent.keywords[position - 1].position = p0;
            }
            this.$parent.keywords.sort(by_position);
        },
        move_down: function () {
            let id = this.keyword.id;
            let position = this.$parent.keywords.findIndex(function (keyword) {
                return keyword.id == id;
            });
            if (position < this.$parent.keywords.length - 1) {
                let p0 = this.$parent.keywords[position].position;
                let p1 = this.$parent.keywords[position + 1].position;
                this.$parent.keywords[position].position = p1;
                this.$parent.keywords[position + 1].position = p0;
            }
            this.$parent.keywords.sort(by_position);
        }
    },
    props: ['keyword']
};
</script>

<style>
</style>
