export function compute_cff () {
    var lines = [];
    lines.push('# YAML 1.2');
    lines.push('---');
    if (this.hasOwnProperty("abstract") && this.abstract !== undefined) {
        lines.push('abstract: ' + this.abstract);
    }

    lines.push('authors: ');
    for (let author of this.authors) {
        lines.push('  -');

        if (author.hasOwnProperty("affiliation") && author.affiliation !== undefined) {
            lines.push('    affiliation: ' + author.affiliation);
        }

        lines.push('    family-names: ' + author.family_names);

        lines.push('    given-names: ' + author.given_names);

        if (author.hasOwnProperty("name_particle") && author.name_particle !== undefined) {
            lines.push('    name-particle: ' + author.name_particle);
        }

        if (author.hasOwnProperty("name_suffix") && author.name_suffix !== undefined) {
            lines.push('    name-suffix: ' + author.name_suffix);
        }

        if (author.hasOwnProperty("orcid") && author.orcid !== undefined) {
            lines.push('    orcid: "https://orcid.org/' + author.orcid + '"');
        }
    }
    lines.push('cff-version: ' + this.cff_version);

    if (this.date_released !== undefined) {
        lines.push('date-released: ' + this.date_released);
    }

    if (this.doi !== undefined) {
        lines.push('doi: ' + this.doi);
    }

    if (this.hasOwnProperty("keywords") && this.keywords !== undefined) {
        lines.push('keywords: ');
        for (let keyword of this.keywords) {
            lines.push('  - ' + keyword.text);
        }
    }

    if (this.license !== undefined) {
        lines.push('license: ' + this.license);
    }

    lines.push('message: ' + this.message);

    if (this.repository_code !== undefined) {
        lines.push('repository-code: ' + this.repository_code);
    }

    if (this.title !== undefined) {
        lines.push('title: ' + this.title);
    }

    if (this.version !== undefined) {
        lines.push('version: ' + this.version);
    }

    return lines.join('\n');
}
