<template>
    <div class="form">
        <ul>
            <Authors
                v-bind:authors="authors"
                v-on:add="add_author"
                v-on:move-down="move_author_down"
                v-on:move-up="move_author_up"
                v-on:remove="remove_author"
                v-on:update-affiliation="update_author_affiliation"
                v-on:update-family-names="update_author_family_names"
                v-on:update-given-names="update_author_given_names"
                v-on:update-name-particle="update_author_name_particle"
                v-on:update-name-suffix="update_author_name_suffix"
                v-on:update-orcid="update_author_orcid"
            />

            <li>cff-version
                <input
                    placeholder="1.0.3"
                    type="text"
                    v-bind:value="cff_version"
                    v-on:keyup="update_cff_version($event)"
                />
            </li>

            <li>
                date-released
                <input
                    placeholder="yyyy-mm-dd without quotes"
                    type="text"
                    v-bind:value="date_released"
                    v-on:keyup="update_date_released($event)"
                />
            </li>

            <li>
                doi
                <input
                    placeholder="doi-only, e.g. 10.0000/FIXME"
                    type="text"
                    v-bind:value="doi"
                    v-on:keyup="update_doi($event)"
                />
            </li>

            <Keywords
                v-bind:keywords="keywords"
                v-on:add="add_keyword"
                v-on:move-down="move_keyword_down"
                v-on:move-up="move_keyword_up"
                v-on:remove="remove_keyword"
                v-on:update="update_keyword"
            />

            <li>
                license:
                <input
                    placeholder="e.g. Apache-2.0, MIT"
                    type="text"
                    v-bind:value="license"
                    v-on:keyup="update_license($event)"
                />
            </li>

            <li>
                message
                <textarea
                    class="msg"
                    v-bind:value="message"
                    v-on:keyup="update_message($event)"
                />
            </li>

            <li>
                repository-code
                <input
                    placeholder="https://github.com/<org>/<repo>"
                    type="text"
                    v-bind:value="repository_code"
                    v-on:keyup="update_repository_code($event)"
                />
            </li>

            <li>
                title
                <input
                    type="text"
                    v-bind:value="title"
                    v-on:keyup="update_title($event)"
                />
            </li>

            <li>
                version
                <input
                    type="text"
                    v-bind:value="version"
                    v-on:keyup="update_version($event)"
                />
            </li>

        </ul>
    </div>
</template>

<script>
import {add_author,
        add_keyword,
        move_author_down,
        move_author_up,
        move_keyword_down,
        move_keyword_up,
        remove_author,
        remove_keyword,
        update_author_given_names,
        update_author_name_particle,
        update_author_family_names,
        update_author_name_suffix,
        update_author_orcid,
        update_author_affiliation,
        update_cff_version,
        update_date_released,
        update_doi,
        update_keyword,
        update_license,
        update_repository_code,
        update_title,
        update_message,
        update_version} from './FormEmitters.js';

import Authors from './Authors.vue';
import Keywords from './Keywords.vue';

export default {
    components: {
        Authors,
        Keywords
    },
    methods: {
        add_author,
        add_keyword,
        move_author_down,
        move_author_up,
        move_keyword_down,
        move_keyword_up,
        remove_author,
        remove_keyword,
        update_author_given_names,
        update_author_name_particle,
        update_author_family_names,
        update_author_name_suffix,
        update_author_orcid,
        update_author_affiliation,
        update_cff_version,
        update_date_released,
        update_doi,
        update_keyword,
        update_license,
        update_repository_code,
        update_title,
        update_message,
        update_version
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
        height: 80vh;
        padding-bottom: 5px;  /* not sure why but without it the textarea is slightly longer than the form div; (optimized for Google Chrome browser) */
    }

    textarea.msg {
        width: 90%;
        height: 80px;
        overflow-y: auto;
        resize: vertical;
    }

    input {
        min-width: 400px;
    }

</style>
