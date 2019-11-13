<template>
    <div id="app">
        <div class="header">
            <h1>cffinit</h1>
            <h2>Initialize your CITATION.cff files</h2>
        </div>
        <div class="container">
            <Form
                v-bind:abstract="abstract"
                v-bind:author_id="author_id"
                v-bind:authors="authors"
                v-bind:cff_version="cff_version"
                v-bind:date_released="date_released"
                v-bind:doi="doi"
                v-bind:identifier_id="identifier_id"
                v-bind:identifiers="identifiers"
                v-bind:keyword_id="keyword_id"
                v-bind:keywords="keywords"
                v-bind:license="license"
                v-bind:message="message"
                v-bind:repository_code="repository_code"
                v-bind:title="title"
                v-bind:version="version"
                v-on:add-abstract="add_abstract"
                v-on:add-affiliation="add_affiliation"
                v-on:add-author="add_author"
                v-on:add-date-released="add_date_released"
                v-on:add-doi="add_doi"
                v-on:add-identifier="add_identifier"
                v-on:add-identifiers="add_identifiers"
                v-on:add-keyword="add_keyword"
                v-on:add-keywords="add_keywords"
                v-on:add-license="add_license"
                v-on:add-name-particle="add_name_particle"
                v-on:add-name-suffix="add_name_suffix"
                v-on:add-orcid="add_orcid"
                v-on:add-repository-code="add_repository_code"
                v-on:add-title="add_title"
                v-on:add-version="add_version"
                v-on:move-author-down="move_author_down"
                v-on:move-author-up="move_author_up"
                v-on:move-identifier-down="move_identifier_down"
                v-on:move-identifier-up="move_identifier_up"
                v-on:move-keyword-down="move_keyword_down"
                v-on:move-keyword-up="move_keyword_up"
                v-on:remove-abstract="remove_abstract"
                v-on:remove-affiliation="remove_affiliation"
                v-on:remove-author="remove_author"
                v-on:remove-date-released="remove_date_released"
                v-on:remove-doi="remove_doi"
                v-on:remove-identifier="remove_identifier"
                v-on:remove-identifiers="remove_identifiers"
                v-on:remove-keyword="remove_keyword"
                v-on:remove-keywords="remove_keywords"
                v-on:remove-license="remove_license"
                v-on:remove-name-particle="remove_name_particle"
                v-on:remove-name-suffix="remove_name_suffix"
                v-on:remove-orcid="remove_orcid"
                v-on:remove-repository-code="remove_repository_code"
                v-on:remove-title="remove_title"
                v-on:remove-version="remove_version"
                v-on:update-abstract="update_abstract"
                v-on:update-affiliation="update_affiliation"
                v-on:update-cff-version="update_cff_version"
                v-on:update-date-released="update_date_released"
                v-on:update-doi="update_doi"
                v-on:update-family-names="update_family_names"
                v-on:update-given-names="update_given_names"
                v-on:update-identifier-type="update_identifier_type"
                v-on:update-identifier-value="update_identifier_value"
                v-on:update-keyword="update_keyword"
                v-on:update-license="update_license"
                v-on:update-message="update_message"
                v-on:update-name-particle="update_name_particle"
                v-on:update-name-suffix="update_name_suffix"
                v-on:update-orcid="update_orcid"
                v-on:update-repository-code="update_repository_code"
                v-on:update-title="update_title"
                v-on:update-version="update_version"
            />
            <CffText v-bind:cff="cff"/>
        </div>
        <div class="container">
            <button
                class="download-button"
                v-on:click="save_text_as_file">
                Save Text to File
            </button>
        </div>
        <div class="github">
            <a href="https://github.com/citation-file-format/cff-initializer-javascript">
                <img
                    src="img/github-mark-light-64px.png"
                    width="50px"
                    height="50px"
                >
            </a>
        </div>
    </div>
</template>

<script>

import {add as add_abstract,
        remove as remove_abstract,
        update as update_abstract} from './AbstractHandlers.js';

import {add as add_affiliation,
        remove as remove_affiliation,
        update as update_affiliation} from './AffiliationHandlers.js';

import {add as add_name_particle,
        remove as remove_name_particle,
        update as update_name_particle} from './NameParticleHandlers.js';

import {add_author,
        move_author_down,
        move_author_up,
        remove_author} from './AuthorsHandlers.js';

import {add_identifier,
        move_identifier_down,
        move_identifier_up,
        remove_identifier,
        update_identifier_type,
        update_identifier_value} from './IdentifierHandlers.js';

import {add_identifiers,
        remove_identifiers} from './IdentifiersHandlers.js';

import {add as add_keyword,
        move_down as move_keyword_down,
        move_up as move_keyword_up,
        remove as remove_keyword,
        update as update_keyword} from './KeywordHandlers.js';

import {add as add_keywords,
        remove as remove_keywords} from './KeywordsHandlers.js';

import {add as add_date_released,
        remove as remove_date_released,
        update as update_date_released} from './DateReleasedHandlers.js';

import {add as add_doi,
        remove as remove_doi,
        update as update_doi} from './DoiHandlers.js';

import {add as add_license,
        remove as remove_license,
        update as update_license} from './LicenseHandlers.js';

import {add as add_repository_code,
        remove as remove_repository_code,
        update as update_repository_code} from './RepositoryCodeHandlers.js';

import {compute_cff} from './compute_cff.js';

import {update_family_names,
        update_given_names} from './AuthorHandler.js';

import {add as add_orcid,
        remove as remove_orcid,
        update as update_orcid} from './OrcidHandlers.js';

import {add as add_name_suffix,
        remove as remove_name_suffix,
        update as update_name_suffix} from './NameSuffixHandlers.js';

import {update_cff_version,
        update_message} from './FormHandlers.js';

import {save_text_as_file} from './download.js';

import {add as add_title,
        remove as remove_title,
        update as update_title} from './TitleHandlers.js';

import {add as add_version,
        remove as remove_version,
        update as update_version} from './VersionHandlers.js';

import CffText from './CffText.vue';

import Form from './Form.vue';

export default {
    name: 'App',
    components: {
        CffText,
        Form
    },
    data: function () {
        return {
            abstract: undefined,
            author_id: -1,
            authors: [],
            cff_version: '1.1.0',
            date_released: undefined,
            doi: undefined,
            identifier_id: -1,
            identifiers: undefined,
            keyword_id: -1,
            keywords: undefined,
            license: undefined,
            message: 'If you use this software, please cite it using these metadata.',
            repository_code: undefined,
            title: undefined,
            version: undefined
        }
    },
    computed: {
        cff: compute_cff
    },
    methods: {
        add_abstract,
        add_affiliation,
        add_author,
        add_date_released,
        add_doi,
        add_identifier,
        add_identifiers,
        add_keyword,
        add_keywords,
        add_name_particle,
        add_name_suffix,
        add_license,
        add_orcid,
        add_repository_code,
        add_title,
        add_version,
        move_author_down,
        move_author_up,
        move_identifier_down,
        move_identifier_up,
        move_keyword_down,
        move_keyword_up,
        remove_abstract,
        remove_affiliation,
        remove_author,
        remove_date_released,
        remove_doi,
        remove_identifier,
        remove_identifiers,
        remove_keyword,
        remove_keywords,
        remove_license,
        remove_name_particle,
        remove_name_suffix,
        remove_orcid,
        remove_repository_code,
        remove_title,
        remove_version,
        save_text_as_file,
        update_abstract,
        update_affiliation,
        update_family_names,
        update_given_names,
        update_identifier_type,
        update_identifier_value,
        update_name_particle,
        update_name_suffix,
        update_orcid,
        update_cff_version,
        update_date_released,
        update_doi,
        update_keyword,
        update_license,
        update_message,
        update_repository_code,
        update_title,
        update_version
    }
};
</script>


<style>
    body {
        background-color: #5f6d64;
        margin: 0px;
    }
    .container {
        display: flex;
        margin-top: 2vh;
        min-width: 300px;
    }

    .header {
        display: block;
    }

    .header h1 {
        font-size: 2rem;
        font-family: 'Inconsolata', monospace;
        text-align:center;
        color: #fff;
        padding-bottom: 1.0rem;
        margin-bottom: 0.0rem;
    }
    .header h2 {
        font-size: 100%;
        font-family: 'Source Sans Pro', sans-serif;
        text-align:center;
        color: #eee;
        margin-bottom: 0.0rem;
        margin-top: 0.0rem;
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
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1.0rem;
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

    .github {
        position: fixed;
        right: 1%;
        bottom: 10px;
    }
</style>
