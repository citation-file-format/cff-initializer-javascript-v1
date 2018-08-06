let by_position = function (a, b) {
    if (a.position < b.position) {
        return -1;
    }
    if (a.position > b.position) {
        return 1;
    }
    if (a.position == b.position) {
        return 0;
    }
};


// Define a new component called li-author
Vue.component('li-author', {
    props: ['author'],
    template: `
    <li>
        <button v-on:click='remove' title='Remove this author'>-</button>
        <button v-on:click='move_up' title='Move this author up'>&uarr;</button>
        <button v-on:click='move_down' title='Move this author down'>&darr;</button>
        <ul>
            <li>given-names<input v-model="author.given_names"/></li>
            <li>name-particle<input v-model="author.name_particle"/></li>
            <li>family-names<input v-model="author.family_names"/></li>
            <li>name-suffix<input v-model="author.name_suffix"/></li>
            <li>orcid<input v-model="author.orcid"/></li>
            <li>affiliation<input v-model="author.affiliation"/></li>
        </ul>
    </li>`,
    methods: {
        // methods that manipulate the authors array via $parent should be part
        // of some parent and be called via an event; also shouldn't replicate indexing
        remove: function () {
            let id = this.author.id;
            this.$parent.authors = this.$parent.authors.filter(function (author) {
                return author.id !== id;
            })
        },
        move_up: function () {
            let id = this.author.id;
            let position = this.$parent.authors.findIndex(function (author) {
                return author.id == id;
            });
            if (position > 0) {
                let p0 = this.$parent.authors[position].position;
                let p1 = this.$parent.authors[position - 1].position;
                this.$parent.authors[position].position = p1;
                this.$parent.authors[position - 1].position = p0;
            }
            this.$parent.authors.sort(by_position);
        },
        move_down: function () {
            let id = this.author.id;
            let position = this.$parent.authors.findIndex(function (author) {
                return author.id == id;
            });
            if (position < this.$parent.authors.length - 1) {
                let p0 = this.$parent.authors[position].position
                let p1 = this.$parent.authors[position + 1].position
                this.$parent.authors[position].position = p1;
                this.$parent.authors[position + 1].position = p0;
            }
            this.$parent.authors.sort(by_position);
        }
    }
})


Vue.component('li-keyword', {
    props: ['keyword'],
    template: `
    <li>
        <button v-on:click='remove' title='Remove this keyword'>-</button>
        <button v-on:click='move_up' title='Move this keyword up'>&uarr;</button>
        <button v-on:click='move_down' title='Move this keyword down'>&darr;</button>
        <input v-model='keyword.text'/>
    </li>`,
    methods: {
        // methods that manipulate the keywords array via $parent should be part
        // of some parent and be called via an event; also shouldn't replicate indexing
        remove: function () {
            let id = this.keyword.id;
            this.$parent.keywords = this.$parent.keywords.filter(function (keyword) {
                return keyword.id !== id;
            })
        },
        move_up: function () {
            let id = this.keyword.id;
            let position = this.$parent.keywords.findIndex(function (keyword) {
                return keyword.id == id;
            });
            if (position > 0) {
                let p0 = this.$parent.keywords[position].position;
                let p1 = this.$parent.keywords[position - 1].position;
                this.$parent.keywords[position].position = p1;
                this.$parent.keywords[position - 1].position = p0;
            }
            this.$parent.keywords.sort(by_position);
        },
        move_down: function () {
            let id = this.keyword.id;
            let position = this.$parent.keywords.findIndex(function (keyword) {
                return keyword.id == id;
            });
            if (position < this.$parent.keywords.length - 1) {
                let p0 = this.$parent.keywords[position].position;
                let p1 = this.$parent.keywords[position + 1].position;
                this.$parent.keywords[position].position = p1;
                this.$parent.keywords[position + 1].position = p0;
            }
            this.$parent.keywords.sort(by_position);
        }
    }
})

var app = new Vue({
    el: "#app",
    data: {
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
    },
    computed: {
        compose_cff: function () {
            var lines = []
            lines.push('# YAML 1.2')
            lines.push('---')
            lines.push('authors: ')
            for (let author of this.authors) {
                lines.push('  -')
                lines.push('    affiliation: ' + author.affiliation)
                lines.push('    family-names: ' + author.family_names)
                lines.push('    given-names: ' + author.given_names)
                lines.push('    name-particle: ' + author.name_particle)
                lines.push('    name-suffix: ' + author.name_suffix)
                lines.push('    orcid: ' + author.orcid)
            }
            lines.push('cff-version: ' + this.cff_version)
            lines.push('date-released: ' + this.date_released)
            lines.push('doi: ' + this.doi)
            lines.push('keywords: ')
            for (let keyword of this.keywords) {
                lines.push('  - ' + keyword.text)
            }
            lines.push('license: ' + this.license)
            lines.push('message: ' + this.message)
            lines.push('repository-code: ' + this.repository_code)
            lines.push('title: ' + this.title)
            lines.push('version: ' + this.version)
            return lines.join('\n')
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
        }
    }
})
