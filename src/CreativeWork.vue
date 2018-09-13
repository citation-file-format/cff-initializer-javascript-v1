<template>
    <ul class="creative_work">

<!--
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
-->
        <Title
            v-bind:title="title"
            v-on:update="update_title"
        />

        <Version
            v-bind:value="version"
            v-bind:version="version"
            v-on:add="add_version"
            v-on:remove="remove_version"
            v-on:update="update_version"
        />

    </ul>
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
        update_date_released,
        update_doi,
        update_keyword,
        update_license,
        update_repository_code,
        update_title,
        update_version} from './CreativeWorkEmitters.js';

import {validate_date_released,
        validate_doi,
        validate_repository_code} from './CreativeWorkValidators.js';

import Authors from './Authors.vue';
import Keywords from './Keywords.vue';
import Version from './Version.vue';
import Title from './Title.vue';

export default {
    components: {
        Authors,
        Keywords,
        Title,
        Version
    },
    computed: {
        date_released_validation: validate_date_released,
        doi_validation: validate_doi,
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
