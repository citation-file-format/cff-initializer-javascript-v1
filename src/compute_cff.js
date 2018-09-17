export function compute_cff () {
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
        lines.push('    orcid: "https://orcid.org/' + author.orcid + '"');
    }
    lines.push('cff-version: ' + this.cff_version);

    if (this.date_released !== undefined) {
        lines.push('date-released: ' + this.date_released);
    }

    if (this.doi !== undefined) {
        lines.push('doi: ' + this.doi);
    }

    lines.push('keywords: ');
    for (let keyword of this.keywords) {
        lines.push('  - ' + keyword.text);
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
