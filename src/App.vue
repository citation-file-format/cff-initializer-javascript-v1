<template>
    <div id="app">
        <div class="container">
            <Form
                v-bind:author_id="author_id"
                v-bind:authors="authors"
                v-bind:cff_version="cff_version"
                v-bind:date_released="date_released"
                v-bind:doi="doi"
                v-bind:keyword_id="keyword_id"
                v-bind:keywords="keywords"
                v-bind:license="license"
                v-bind:message="message"
                v-bind:repository_code="repository_code"
                v-bind:title="title"
                v-bind:version="version"
                v-on:add-author="add_author"
                v-on:add-keyword="add_keyword"
                v-on:move-author-down="move_author_down"
                v-on:move-author-up="move_author_up"
                v-on:move-keyword-down="move_keyword_down"
                v-on:move-keyword-up="move_keyword_up"
                v-on:remove-author="remove_author"
                v-on:remove-keyword="remove_keyword"
                v-on:update-author-affiliation="update_author_affiliation"
                v-on:update-author-family-names="update_author_family_names"
                v-on:update-author-given-names="update_author_given_names"
                v-on:update-author-name-particle="update_author_name_particle"
                v-on:update-author-name-suffix="update_author_name_suffix"
                v-on:update-author-orcid="update_author_orcid"
                v-on:update-cff-version="update_cff_version"
                v-on:update-date-released="update_date_released"
                v-on:update-doi="update_doi"
                v-on:update-keyword="update_keyword"
                v-on:update-license="update_license"
                v-on:update-message="update_message"
                v-on:update-repository-code="update_repository_code"
                v-on:update-title="update_title"
                v-on:update-version="update_version"
            />
            <CffText v-bind:cff="cff"/>
        </div>
        <div class="container">
            <button class="download-button" v-on:click="save_text_as_file">Save Text to File</button>
        </div>
    </div>
</template>

<script>


import {add_author,
        move_author_down,
        move_author_up,
        remove_author} from './AuthorsHandlers.js';

import {add_keyword,
        move_keyword_down,
        move_keyword_up,
        remove_keyword} from './KeywordsHandlers.js';

import {compute_cff} from './compute_cff.js';

import {update_author_affiliation,
        update_author_family_names,
        update_author_given_names,
        update_author_name_particle,
        update_author_name_suffix,
        update_author_orcid} from './AuthorHandler.js';

import {update_cff_version,
        update_date_released,
        update_doi,
        update_license,
        update_repository_code,
        update_title,
        update_version,
        update_message} from './FormHandlers.js';

import {save_text_as_file} from './download.js';
import {update_keyword} from './KeywordHandlers.js';
import CffText from './CffText.vue';
import Form from './Form.vue';
export default {
    components: {
        CffText,
        Form
    },
    computed: {
        cff: compute_cff
    },
    data: function () {
        return {
            author_id: -1,
            authors: [],
            cff_version: '1.0.3',
            date_released: '',
            doi: '',
            keyword_id: -1,
            keywords: [],
            license: '',
            message: 'If you use this software, please cite it using these metadata.',
            repository_code: '',
            title: '',
            version: ''
        }
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
        save_text_as_file,
        update_author_affiliation,
        update_author_family_names,
        update_author_given_names,
        update_author_name_particle,
        update_author_name_suffix,
        update_author_orcid,
        update_cff_version,
        update_date_released,
        update_doi,
        update_keyword,
        update_license,
        update_message,
        update_repository_code,
        update_title,
        update_version
    },
    name: 'App'
};
</script>


<style>
    body {
        background-color: #5f6d64;
    }
    .container {
        display: flex;
        margin-top: 2vh;
        min-width: 300px;
    }

    .download-button {
        -webkit-transition-duration: 0.2s; /* Safari */
        background-color: #5daa61;
        border-color: #222;
        border-radius: 6px;
        border-style: solid;
        border-width: 2px;
        color: #222;
        display: inline-block;
        font-size: 16px;
        margin-left: auto;
        margin-right: auto;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        transition-duration: 0.2s;
    }
    .download-button:hover {
        background-color: #487a4a;
        border-color: #ccc;
        color: #ccc;
    }
</style>
