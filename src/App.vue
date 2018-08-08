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
            />
            <CffText v-bind:cff="cff"/>
        </div>
    </div>
</template>

<script>

import {add_author} from './AuthorsHandlers.js';
import {add_keyword} from './KeywordsHandlers.js';
import {move_author_down} from './AuthorsHandlers.js';
import {move_author_up} from './AuthorsHandlers.js';
import {move_keyword_down} from './KeywordsHandlers.js';
import {move_keyword_up} from './KeywordsHandlers.js';
import {remove_author} from './AuthorsHandlers.js';
import {remove_keyword} from './KeywordsHandlers.js';
import CffText from './CffText.vue';
import Form from './Form.vue';

export default {
    components: {
        CffText,
        Form
    },
    computed: {
        cff: function () {
            var lines = [];
            lines.push('# YAML 1.2');
            lines.push('---');
            lines.push('authors: ');
            for (let author of this.authors) {
                lines.push('  -');
                lines.push('    affiliation: ' + author.affiliation);
                lines.push('    family-names: ' + author.family_names);
                lines.push('    given-names: ' + author.given_names);
                lines.push('    name-particle: ' + author.name_particle);
                lines.push('    name-suffix: ' + author.name_suffix);
                lines.push('    orcid: ' + author.orcid);
            }
            lines.push('cff-version: ' + this.cff_version);
            lines.push('date-released: ' + this.date_released);
            lines.push('doi: ' + this.doi);
            lines.push('keywords: ');
            for (let keyword of this.keywords) {
                lines.push('  - ' + keyword.text);
            }
            lines.push('license: ' + this.license);
            lines.push('message: ' + this.message);
            lines.push('repository-code: ' + this.repository_code);
            lines.push('title: ' + this.title);
            lines.push('version: ' + this.version);
            return lines.join('\n');
        }
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
        remove_keyword
    },
    name: 'App'
};
</script>


<style>
    body {
        background-color: #5f6d64;
    }
    .container {
        background-color: none;
        display: flex;
        margin-top: 2vh;
        min-width: 300px;
    }
</style>
