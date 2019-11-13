function add_quotes (s) {
    function escape_quotes(s) {
        return s.replace(/["]/g,'\\"');
    }
    let re = new RegExp('^[a-zA-Z0-9]{0,}$');
    if (re.test(s)) {
        return s;
    } else {
        return '"' + escape_quotes(s) + '"';
    }
}

function indent (s) {
    return s.replace(/[\n]/g,'\n    ');
}

function is_multiline (s) {
    let re = new RegExp('[\\n|\\r]');
    return re.test(s);
}

export function compute_cff () {
    var lines = [];
    lines.push('# YAML 1.2');
    lines.push('---');
    if (this.hasOwnProperty("abstract") && this.abstract !== undefined) {
        if (is_multiline(this.abstract)) {
            lines.push('abstract: |\n    ' + indent(add_quotes(this.abstract)));
        } else {
            lines.push('abstract: ' + add_quotes(this.abstract));
        }
    }

    lines.push('authors: ');
    for (let author of this.authors) {
        lines.push('  -');

        if (author.hasOwnProperty("affiliation") && author.affiliation !== undefined) {
            lines.push('    affiliation: ' + add_quotes(author.affiliation));
        }

        lines.push('    family-names: ' + add_quotes(author.family_names));

        lines.push('    given-names: ' + add_quotes(author.given_names));

        if (author.hasOwnProperty("name_particle") && author.name_particle !== undefined) {
            lines.push('    name-particle: ' + add_quotes(author.name_particle));
        }

        if (author.hasOwnProperty("name_suffix") && author.name_suffix !== undefined) {
            lines.push('    name-suffix: ' + add_quotes(author.name_suffix));
        }

        if (author.hasOwnProperty("orcid") && author.orcid !== undefined) {
            lines.push('    orcid: "https://orcid.org/' + author.orcid + '"');
        }
    }
    lines.push('cff-version: ' + add_quotes(this.cff_version));

    if (this.date_released !== undefined) {
        lines.push('date-released: ' + this.date_released);
    }

    if (this.doi !== undefined) {
        lines.push('doi: ' + add_quotes(this.doi));
    }

    if (this.hasOwnProperty("identifiers") && this.identifiers !== undefined) {
        lines.push('identifiers: ');
        for (let identifier of this.identifiers) {
            lines.push('  - ');
            lines.push('    type: ' + add_quotes(identifier.type));
            lines.push('    value: ' + add_quotes(identifier.value));
        }
    }

    if (this.hasOwnProperty("keywords") && this.keywords !== undefined) {
        lines.push('keywords: ');
        for (let keyword of this.keywords) {
            lines.push('  - ' + add_quotes(keyword.text));
        }
    }

    if (this.license !== undefined) {
        lines.push('license: ' + add_quotes(this.license));
    }

    if (is_multiline(this.message)) {
        lines.push('message: |\n    ' + indent(add_quotes(this.message)));
    } else {
        lines.push('message: ' + add_quotes(this.message));
    }

    if (this.repository_code !== undefined) {
        lines.push('repository-code: ' + add_quotes(this.repository_code));
    }

    if (this.title !== undefined) {
        lines.push('title: ' + add_quotes(this.title));
    }

    if (this.version !== undefined) {
        lines.push('version: ' + add_quotes(this.version));
    }

    lines.push('...');

    return lines.join('\n');
}
