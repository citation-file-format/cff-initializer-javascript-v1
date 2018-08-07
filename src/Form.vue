<template>
    <div class="form">
        <ul>
            <Authors v-bind:authors="authors" v-bind:author_id="author_id"/>
            <!-- <li>cff-version <input v-model="cff_version" placeholder="1.0.3"/></li>
            <li>date-released <input v-model="date_released" placeholder="dd-mm-yyyy (without quotes)"/></li>
            <li>doi <input v-model="doi" placeholder=""/></li>
            <Keywords />
            <li>license: <input v-model="license" /></li>
            <li>message <textarea class="msg" v-model="message" /></li>
            <li>repository-code <input v-model="repository_code" /></li>
            <li>title <input v-model="title" /></li>
            <li>version <input v-model="version" /></li> -->
        </ul>
    </div>
</template>

<script>
import Authors from './Authors.vue';
import Keywords from './Keywords.vue';
export default {
    components: {
        Authors,
        Keywords
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
            authors: [1],
            cff_version: '1.0.3',
            date_released: '',
            doi: '10.0000/FIXME',
            license: 'Apache-2.0',
            message: 'If you use this software, please cite it using these metadata.',
            repository_code: 'https://github.com/<org>/<repo>',
            title: '',
            version: ''
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
        height: '80vh';
        padding-bottom: '5px';  /* not sure why but without it the textarea is slightly longer than the form div; (optimized for Google Chrome browser) */
    }

    textarea.msg {
        width: 90%;
        height: '80px';
        overflow-y: auto;
        resize: vertical;
    }

    input {
        min-width: '400px';
    }


</style>
