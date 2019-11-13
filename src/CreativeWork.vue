<template>
    <ul class="creative_work">

        <Abstract
            v-bind:abstract="abstract"
            v-on:add="add_abstract"
            v-on:remove="remove_abstract"
            v-on:update="update_abstract"
        />

        <Authors
            v-bind:authors="authors"
            v-on:add="add_author"
            v-on:add-affiliation="add_affiliation"
            v-on:add-orcid="add_orcid"
            v-on:add-name-particle="add_name_particle"
            v-on:add-name-suffix="add_name_suffix"
            v-on:move-down="move_author_down"
            v-on:move-up="move_author_up"
            v-on:remove="remove_author"
            v-on:remove-affiliation="remove_affiliation"
            v-on:remove-orcid="remove_orcid"
            v-on:remove-name-particle="remove_name_particle"
            v-on:remove-name-suffix="remove_name_suffix"
            v-on:update-affiliation="update_affiliation"
            v-on:update-family-names="update_family_names"
            v-on:update-given-names="update_given_names"
            v-on:update-name-particle="update_name_particle"
            v-on:update-name-suffix="update_name_suffix"
            v-on:update-orcid="update_orcid"
        />

        <DateReleased
            v-bind:date_released="date_released"
            v-on:add="add_date_released"
            v-on:remove="remove_date_released"
            v-on:update="update_date_released"
        />

        <Doi
            v-bind:doi="doi"
            v-on:add="add_doi"
            v-on:remove="remove_doi"
            v-on:update="update_doi"
        />

        <Identifiers
            v-bind:identifiers="identifiers"
            v-on:add-identifier="add_identifier"
            v-on:add-identifiers="add_identifiers"
            v-on:move-identifier-down="move_identifier_down"
            v-on:move-identifier-up="move_identifier_up"
            v-on:remove-identifier="remove_identifier"
            v-on:remove-identifiers="remove_identifiers"
            v-on:update-identifier-type="update_identifier_type"
            v-on:update-identifier-value="update_identifier_value"
        />

        <Keywords
            v-bind:keywords="keywords"
            v-on:add-keyword="add_keyword"
            v-on:add-keywords="add_keywords"
            v-on:move-keyword-down="move_keyword_down"
            v-on:move-keyword-up="move_keyword_up"
            v-on:remove-keyword="remove_keyword"
            v-on:remove-keywords="remove_keywords"
            v-on:update-keyword="update_keyword"
        />

        <License
            v-bind:license="license"
            v-on:add="add_license"
            v-on:remove="remove_license"
            v-on:update="update_license"
        />

        <RepositoryCode
            v-bind:repository_code="repository_code"
            v-on:add="add_repository_code"
            v-on:remove="remove_repository_code"
            v-on:update="update_repository_code"
        />

        <Title
            v-bind:title="title"
            v-on:add="add_title"
            v-on:remove="remove_title"
            v-on:update="update_title"
        />

        <Version
            v-bind:version="version"
            v-on:add="add_version"
            v-on:remove="remove_version"
            v-on:update="update_version"
        />

    </ul>
</template>

<script>
import {add_abstract,
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
        update_abstract,
        update_affiliation,
        update_date_released,
        update_doi,
        update_family_names,
        update_given_names,
        update_identifier_type,
        update_identifier_value,
        update_keyword,
        update_license,
        update_name_particle,
        update_name_suffix,
        update_orcid,
        update_repository_code,
        update_title,
        update_version} from './CreativeWorkEmitters.js';

import Authors from './Authors.vue';
import Abstract from './Abstract.vue';
import DateReleased from './DateReleased.vue';
import Doi from './Doi.vue';
import Identifiers from './Identifiers.vue';
import Keywords from './Keywords.vue';
import License from './License.vue';
import RepositoryCode from './RepositoryCode';
import Version from './Version.vue';
import Title from './Title.vue';

export default {
    name: 'CreativeWork',
    components: {
        Abstract,
        Authors,
        DateReleased,
        Doi,
        Identifiers,
        Keywords,
        License,
        RepositoryCode,
        Title,
        Version
    },
    props: {
        abstract: String,
        author_id: Number,
        authors: Array,
        date_released: String,
        doi: String,
        identifier_id: Number,
        identifiers: Array,
        keyword_id: Number,
        keywords: Array,
        license: String,
        repository_code: String,
        title: String,
        version: String
    },
    computed: {
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
        add_orcid,
        add_license,
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
        update_abstract,
        update_affiliation,
        update_date_released,
        update_doi,
        update_family_names,
        update_given_names,
        update_identifier_type,
        update_identifier_value,
        update_keyword,
        update_license,
        update_name_particle,
        update_name_suffix,
        update_orcid,
        update_repository_code,
        update_title,
        update_version
    }
};
</script>

<style scoped>
.creative_work {
    padding-left:0px;
}
</style>
