<template>
    <ul class="creative_work">

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

        <Doi
            v-bind:doi="doi"
            v-on:add="add_doi"
            v-on:remove="remove_doi"
            v-on:update="update_doi"
        />

        <Keywords
            v-bind:keywords="keywords"
            v-on:add="add_keyword"
            v-on:move-down="move_keyword_down"
            v-on:move-up="move_keyword_up"
            v-on:remove="remove_keyword"
            v-on:update="update_keyword"
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
import {add_author,
        add_doi,
        add_keyword,
        add_license,
        add_repository_code,
        add_title,
        add_version,
        move_author_down,
        move_author_up,
        move_keyword_down,
        move_keyword_up,
        remove_author,
        remove_doi,
        remove_keyword,
        remove_license,
        remove_repository_code,
        remove_title,
        remove_version,
        update_author_given_names,
        update_author_name_particle,
        update_author_family_names,
        update_author_name_suffix,
        update_author_orcid,
        update_author_affiliation,
        update_date_released,
        update_doi,
        update_keyword,
        update_license,
        update_repository_code,
        update_title,
        update_version} from './CreativeWorkEmitters.js';

import {validate_date_released} from './CreativeWorkValidators.js';

import Authors from './Authors.vue';
import Doi from './Doi.vue';
import Keywords from './Keywords.vue';
import License from './License.vue';
import RepositoryCode from './RepositoryCode';
import Version from './Version.vue';
import Title from './Title.vue';

export default {
    components: {
        Authors,
        Doi,
        Keywords,
        License,
        RepositoryCode,
        Title,
        Version
    },
    computed: {
        date_released_validation: validate_date_released
    },
    methods: {
        add_author,
        add_doi,
        add_keyword,
        add_license,
        add_repository_code,
        add_title,
        add_version,
        move_author_down,
        move_author_up,
        move_keyword_down,
        move_keyword_up,
        remove_author,
        remove_doi,
        remove_keyword,
        remove_license,
        remove_repository_code,
        remove_title,
        remove_version,
        update_author_given_names,
        update_author_name_particle,
        update_author_family_names,
        update_author_name_suffix,
        update_author_orcid,
        update_author_affiliation,
        update_date_released,
        update_doi,
        update_keyword,
        update_license,
        update_repository_code,
        update_title,
        update_version
    },
    name: 'CreativeWork',
    props: {
        author_id: Number,
        authors: Array,
        date_released: String,
        doi: String,
        keyword_id: Number,
        keywords: Array,
        license: String,
        repository_code: String,
        title: String,
        version: String
    }
};
</script>

<style scoped>
.creative_work {
    padding-left:0px;
}
</style>
