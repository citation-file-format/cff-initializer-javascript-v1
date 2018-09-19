<template>
    <div class="form">
        <!-- <h1>Required properties</h1> -->
        <ul>
            <li>
                <p class="caption">
                    cff-version
                </p>
                <input
                    v-bind:class="{error: cff_version_validation.error }"
                    v-bind:value="cff_version"
                    placeholder="1.0.3"
                    type="text"
                    v-on:input="update_cff_version($event)"
                >
                <p
                    v-if="cff_version_validation.error"
                    class="message"
                >
                    {{ cff_version_validation.msg }}
                </p>
            </li>

            <li>
                <p class="caption">
                    message
                </p>
                <textarea
                    v-bind:class="{error: message_validation.error }"
                    v-bind:value="message"
                    class="msg"
                    v-on:input="update_message($event)"
                />
                <p
                    v-if="message_validation.error"
                    class="message"
                >
                    {{ message_validation.msg }}
                </p>
            </li>

            <CreativeWork
                v-bind:author_id="author_id"
                v-bind:authors="authors"
                v-bind:date_released="date_released"
                v-bind:doi="doi"
                v-bind:keyword_id="keyword_id"
                v-bind:keywords="keywords"
                v-bind:license="license"
                v-bind:repository_code="repository_code"
                v-bind:title="title"
                v-bind:version="version"
                v-on:add-author="add_author"
                v-on:add-affiliation="add_affiliation"
                v-on:add-date-released="add_date_released"
                v-on:add-doi="add_doi"
                v-on:add-keyword="add_keyword"
                v-on:add-keywords="add_keywords"
                v-on:add-name-particle="add_name_particle"
                v-on:add-name-suffix="add_name_suffix"
                v-on:add-license="add_license"
                v-on:add-orcid="add_orcid"
                v-on:add-repository-code="add_repository_code"
                v-on:add-title="add_title"
                v-on:add-version="add_version"
                v-on:move-author-down="move_author_down"
                v-on:move-author-up="move_author_up"
                v-on:move-keyword-down="move_keyword_down"
                v-on:move-keyword-up="move_keyword_up"
                v-on:remove-author="remove_author"
                v-on:remove-affiliation="remove_affiliation"
                v-on:remove-date-released="remove_date_released"
                v-on:remove-doi="remove_doi"
                v-on:remove-keyword="remove_keyword"
                v-on:remove-keywords="remove_keywords"
                v-on:remove-license="remove_license"
                v-on:remove-name-particle="remove_name_particle"
                v-on:remove-name-suffix="remove_name_suffix"
                v-on:remove-orcid="remove_orcid"
                v-on:remove-repository-code="remove_repository_code"
                v-on:remove-title="remove_title"
                v-on:remove-version="remove_version"
                v-on:update-affiliation="update_affiliation"
                v-on:update-family-names="update_family_names"
                v-on:update-given-names="update_given_names"
                v-on:update-name-particle="update_name_particle"
                v-on:update-name-suffix="update_name_suffix"
                v-on:update-orcid="update_orcid"
                v-on:update-date-released="update_date_released"
                v-on:update-doi="update_doi"
                v-on:update-keyword="update_keyword"
                v-on:update-license="update_license"
                v-on:update-repository-code="update_repository_code"
                v-on:update-title="update_title"
                v-on:update-version="update_version"
            />
        </ul>
<!--
        <h1>Optional properties</h1>
        <ul>
            <li>
                <p class="caption">
                    references (TODO)
                </p>
            </li>
        </ul>
 -->
    </div>
</template>

<script>
import CreativeWork from './CreativeWork.vue';

import {add_affiliation,
        add_author,
        add_date_released,
        add_doi,
        add_keyword,
        add_keywords,
        add_license,
        add_name_particle,
        add_name_suffix,
        add_orcid,
        add_repository_code,
        add_title,
        add_version,
        move_author_down,
        move_author_up,
        move_keyword_down,
        move_keyword_up,
        remove_affiliation,
        remove_author,
        remove_date_released,
        remove_doi,
        remove_keyword,
        remove_keywords,
        remove_license,
        remove_name_particle,
        remove_name_suffix,
        remove_orcid,
        remove_repository_code,
        remove_title,
        remove_version,
        update_affiliation,
        update_cff_version,
        update_date_released,
        update_doi,
        update_family_names,
        update_given_names,
        update_keyword,
        update_license,
        update_message,
        update_name_particle,
        update_name_suffix,
        update_orcid,
        update_repository_code,
        update_title,
        update_version} from './FormEmitters.js';

import {validate_message,
        validate_cff_version} from './FormValidators.js';

export default {
    name: 'Form',
    components: {
        CreativeWork
    },
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
        version: undefined
    },
    computed: {
        message_validation: validate_message,
        cff_version_validation: validate_cff_version
    },
    methods: {
        add_affiliation,
        add_author,
        add_date_released,
        add_doi,
        add_keyword,
        add_keywords,
        add_license,
        add_name_particle,
        add_name_suffix,
        add_orcid,
        add_repository_code,
        add_title,
        add_version,
        move_author_down,
        move_author_up,
        move_keyword_down,
        move_keyword_up,
        remove_affiliation,
        remove_author,
        remove_date_released,
        remove_doi,
        remove_keyword,
        remove_keywords,
        remove_license,
        remove_name_particle,
        remove_name_suffix,
        remove_orcid,
        remove_repository_code,
        remove_title,
        remove_version,
        update_affiliation,
        update_cff_version,
        update_date_released,
        update_doi,
        update_family_names,
        update_given_names,
        update_keyword,
        update_license,
        update_message,
        update_name_particle,
        update_name_suffix,
        update_orcid,
        update_repository_code,
        update_title,
        update_version
    }
};
</script>

<style>
    .form {
        background-color: #a7bcaf;
        flex-basis: 0.0;
        flex-grow: 1.0;
        font-family: 'Source Sans Pro', sans-serif;
        height: 75vh;
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
        font-family: 'Inconsolata', monospace;
        font-size: 1.0rem;
        min-width: 400px;
        padding: 6px;
    }

    .form textarea {
        border-color: #a7bcaf;
        border-style: solid;
        border-width: 2px;
        font-family: 'Inconsolata', monospace;
        font-size: 1.0rem;
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
        font-family: 'Inconsolata', monospace;
        font-size: 1.0rem;
        margin-bottom: 0.5em;
        margin-top: 1.0em;
    }

    p.message {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 0.8rem;
        margin-bottom: 2.5em;
        margin-top: 0.5em;
    }

    .form ul {
        list-style-type: none;
    }

    .form h1 {
        font-size: 1.4rem;
        padding-left: 40px;
        color: #222222;
    }

</style>
