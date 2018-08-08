<template>
    <div class="form">
        <ul>
            <Authors
                v-bind:authors="authors"
                v-on:add-author="add_author"
                v-on:move-author-down="move_author_down"
                v-on:move-author-up="move_author_up"
                v-on:remove-author="remove_author"
            />

            <li>cff-version
                <input
                    placeholder="1.0.3"
                    type="text"
                    v-bind:cff_version="cff_version"
                />
            </li>

            <li>
                date-released
                <input
                    placeholder="dd-mm-yyyy without quotes"
                    type="text"
                    v-bind:date_released="date_released"
                />
            </li>

            <li>
                doi
                <input
                    placeholder="doi-only, e.g. 10.0000/FIXME"
                    type="text"
                    v-bind:doi="doi"
                />
            </li>

            <Keywords
                v-bind:keywords="keywords"
                v-on:add-keyword="add_keyword"
                v-on:move-keyword-down="move_keyword_down"
                v-on:move-keyword-up="move_keyword_up"
                v-on:remove-keyword="remove_keyword"
            />

            <li>
                license:
                <input
                    placeholder="e.g. Apache-2.0, MIT"
                    type="text"
                    v-bind:license="license"
                />
            </li>

            <li>
                message
                <textarea
                    class="msg"
                    v-bind:message="message"
                />
            </li>

            <li>
                repository-code
                <input
                    placeholder="https://github.com/<org>/<repo>"
                    type="text"
                    v-bind:repository_code="repository_code"
                />
            </li>

            <li>
                title
                <input
                    type="text"
                    v-bind:title="title"
                />
            </li>

            <li>
                version
                <input
                    type="text"
                    v-bind:version="version"
                />
            </li>

        </ul>
    </div>
</template>

<script>
import Authors from './Authors.vue';
import Keywords from './Keywords.vue';

export default {
    components: {
        Authors,
        Keywords
    },
    methods: {
        add_author: function () {
            this.$emit('add-author');
        },
        move_author_down: function (author_id) {
            this.$emit('move-author-down', author_id)
        },
        move_author_up: function (author_id) {
            this.$emit('move-author-up', author_id)
        },
        remove_author: function (author_id) {
            this.$emit('remove-author', author_id)
        },
        add_keyword: function () {
            this.$emit('add-keyword');
        },
        move_keyword_down: function (keyword_id) {
            this.$emit('move-keyword-down', keyword_id)
        },
        move_keyword_up: function (keyword_id) {
            this.$emit('move-keyword-up', keyword_id)
        },
        remove_keyword: function (keyword_id) {
            this.$emit('remove-keyword', keyword_id)
        }
    },
    name: 'Form',
    props: {
        author_id: Number,
        authors: Array,
        cff_version: String,
        date_released: String,
        doi: String,
        keyword_id: Number,
        keywords: Array,
        license: String,
        message: String,
        repository_code: String,
        title: String,
        version: String
    }
};
</script>

<style>
    .form {
        margin-left: 1%;
        margin-right: 1%;
        background-color: #a7bcaf;
        flex-grow: 1.0;
        flex-basis: 0.0;
        overflow-y: auto;
        height: '80vh';
        padding-bottom: '5px';  /* not sure why but without it the textarea is slightly longer than the form div; (optimized for Google Chrome browser) */
    }

    textarea.msg {
        width: 90%;
        height: '80px';
        overflow-y: auto;
        resize: vertical;
    }

</style>
