<template>
    <div class="form">
        <ul>
            <li>authors <button v-on:click='add_author' title='Add author'>+</button>
                <ul>
                    <Author
                    v-for='author in authors'
                    v-bind:author="author"
                    v-bind:key="author.id"
                    v-on:remove-author="remove_author"
                    v-on:move-author-up="move_author_up"
                    v-on:move-author-down="move_author_down"/>
                </ul>
            </li>
            <li>cff-version <input v-model="cff_version" placeholder="1.0.3"/></li>
            <li>date-released <input v-model="date_released" placeholder="dd-mm-yyyy"/></li>
            <li>doi <input v-model="doi" placeholder=""/></li>
            <li>keywords <button v-on:click='add_keyword' title='Add keyword'>+</button>
                <ul>
                    <Keyword
                    v-for='keyword in keywords'
                    v-bind:keyword="keyword"
                    v-bind:key="keyword.id"
                    v-on:remove-keyword="remove_keyword"
                    v-on:move-keyword-up="move_keyword_up"
                    v-on:move-keyword-down="move_keyword_down"/>
                </ul>
            </li>
            <li>license: <input v-model="license" /></li>
            <li>message <textarea class="msg" v-model="message" /></li>
            <li>repository-code <input v-model="repository_code" /></li>
            <li>title <input v-model="title" /></li>
            <li>version <input v-model="version" /></li>
        </ul>
    </div>
</template>

<script>
import Author from './Author.vue';
import Keyword from './Keyword.vue';
import by_position from './sort_by_position';
export default {
    components: {
        Author,
        Keyword
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
            date_released: '~',
            doi: '10.0000/FIXME',
            keyword_id: -1,
            keywords: [],
            license: 'Apache-2.0',
            message: 'If you use this software, please cite it using these metadata.',
            repository_code: 'https://github.com/<org>/<repo>',
            title: '~',
            version: '~'
        }
    },
    methods: {
        add_author: function () {
            this.authors.push({
                affiliation: '~',
                family_names: '~',
                given_names: '~',
                id: this.author_id += 1,
                name_particle: '~',
                name_suffix: '~',
                orcid: '~',
                position: this.authors.length
            })
        },
        add_keyword: function () {
            this.keywords.push({
                id: this.keyword_id += 1,
                position: this.keywords.length,
                text: '~'
            })
        },
        move_author_down: function (author_id) {
            let position = this.authors.findIndex(function (author) {
                return author.id == author_id;
            });
            if (position < this.authors.length - 1) {
                let p0 = this.authors[position].position
                let p1 = this.authors[position + 1].position
                this.authors[position].position = p1;
                this.authors[position + 1].position = p0;
            }
            this.authors.sort(by_position);
        },
        move_author_up: function (author_id) {
            let position = this.authors.findIndex(function (author) {
                return author.id == author_id;
            });
            if (position > 0) {
                let p0 = this.authors[position].position;
                let p1 = this.authors[position - 1].position;
                this.authors[position].position = p1;
                this.authors[position - 1].position = p0;
            }
            this.authors.sort(by_position);
        },
        move_keyword_down: function (keyword_id) {
            let position = this.keywords.findIndex(function (keyword) {
                return keyword.id == keyword_id;
            });
            if (position < this.keywords.length - 1) {
                let p0 = this.keywords[position].position;
                let p1 = this.keywords[position + 1].position;
                this.keywords[position].position = p1;
                this.keywords[position + 1].position = p0;
            }
            this.keywords.sort(by_position);
        },
        move_keyword_up: function (keyword_id) {
            let position = this.keywords.findIndex(function (keyword) {
                return keyword.id == keyword_id;
            });
            if (position > 0) {
                let p0 = this.keywords[position].position;
                let p1 = this.keywords[position - 1].position;
                this.keywords[position].position = p1;
                this.keywords[position - 1].position = p0;
            }
            this.keywords.sort(by_position);
        },
        remove_author: function (author_id) {
            this.authors = this.authors.filter(function (author) {
                return author.id !== author_id;
            })
        },
        remove_keyword: function (keyword_id) {
            this.keywords = this.keywords.filter(function (keyword) {
                return keyword.id !== keyword_id;
            })
        }
    },
    name: 'Form'
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
