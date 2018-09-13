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

            <li>
                <p class="caption">
                    cff-version
                </p>
                <input
                    placeholder="1.0.3"
                    type="text"
                    v-bind:value="cff_version"
                    v-on:input="update_cff_version($event)"
                />
                <p class="message">
                </p>
            </li>

            <li>
                <p class="caption">
                    date-released
                </p>
                <input
                    type="text"
                    v-bind:class="{error: date_released_validation.error }"
                    v-bind:value="date_released"
                    v-on:input="update_date_released($event)"
                />
                <p class="message" v-if="date_released_validation.error">
                    {{ date_released_validation.msg }}
                </p>
            </li>

            <li>
                <p class="caption">
                    doi
                </p>
                <input
                    placeholder="doi-only, e.g. 10.0000/FIXME"
                    type="text"
                    v-bind:class="{error: doi_validation.error }"
                    v-bind:value="doi"
                    v-on:input="update_doi($event)"
                />
                <p class="message" v-if="doi_validation.error">
                    {{ doi_validation.msg }}
                </p>
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
                <p class="caption">
                    license:
                </p>
                <input
                    placeholder="e.g. Apache-2.0, MIT"
                    type="text"
                    v-bind:value="license"
                    v-on:input="update_license($event)"
                />
                <p class="message">
                </p>
            </li>

            <li>
                <p class="caption">
                    message
                </p>
                <textarea
                    class="msg"
                    v-bind:class="{error: message_validation.error }"
                    v-bind:value="message"
                    v-on:input="update_message($event)"
                />
                <p class="message" v-if="message_validation.error">
                    {{ message_validation.msg }}
                </p>
            </li>

            <li>
                <p class="caption">
                    repository-code
                </p>
                <input
                    type="text"
                    v-bind:class="{error: repository_code_validation.error }"
                    v-bind:value="repository_code"
                    v-on:input="update_repository_code($event)"
                />
                <p class="message" v-if="repository_code_validation.error">
                    {{ repository_code_validation.msg }}
                </p>
            </li>

            <li>
                <p class="caption">
                    title
                </p>
                <input
                    type="text"
                    v-bind:value="title"
                    v-on:input="update_title($event)"
                />
                <p class="message">
                </p>
            </li>

            <Version
                v-bind:value="version"
                v-bind:version="version"
                v-on:add="add_version"
                v-on:remove="remove_version"
                v-on:update="update_version"
            />

        </ul>
    </div>
</template>

<script>
import {add_author,
        add_keyword,
        add_version,
        move_author_down,
        move_author_up,
        move_keyword_down,
        move_keyword_up,
        remove_author,
        remove_keyword,
        remove_version,
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

import {validate_date_released,
        validate_doi,
        validate_message,
        validate_repository_code} from './FormValidators.js';

import Authors from './Authors.vue';
import Keywords from './Keywords.vue';
import Version from './Version.vue';

export default {
    components: {
        Authors,
        Keywords,
        Version
    },
    computed: {
        date_released_validation: validate_date_released,
        doi_validation: validate_doi,
        message_validation: validate_message,
        repository_code_validation: validate_repository_code
    },
    methods: {
        add_author,
        add_keyword,
        add_version,
        move_author_down,
        move_author_up,
        move_keyword_down,
        move_keyword_up,
        remove_author,
        remove_keyword,
        remove_version,
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
        background-color: #a7bcaf;
        flex-basis: 0.0;
        flex-grow: 1.0;
        height: 86vh;
        margin-left: 1%;
        margin-right: 1%;
        overflow-y: auto;
    }

    .form input {
        background-color: #ffffff;
        border-color: #a7bcaf;
        border-style: solid;
        border-width: 2px;
        color: #000000;
        min-width: 400px;
        padding: 6px;
    }

    .form textarea {
        border-color: #a7bcaf;
        border-style: solid;
        border-width: 2px;
        height: 80px;
        overflow-y: auto;
        resize: vertical;
        white-space: pre-line;
        width: 90%;
    }

    .form input:focus, .form textarea:focus {
        background-color: #ffff93;
    }

    .form input.error, .form textarea.error {
        border-color: red;
    }

    p.caption {
        font-family: monospace;
    }

    p.message {
        font-family: sans-serif;
        font-size: 80%;
    }

    .form ul {
        list-style-type: none;
    }

</style>
