
export function update_author_affiliation(payload) {
    let author = this.authors.find(function (author) {
        return author.id == payload.id;
    });
    author.affiliation = payload.value;
}

export function update_author_family_names(payload) {
    let author = this.authors.find(function (author) {
        return author.id == payload.id;
    });
    author.family_names = payload.value;
}

export function update_author_given_names(payload) {
    let author = this.authors.find(function (author) {
        return author.id == payload.id;
    });
    author.given_names = payload.value;
}

export function update_author_name_particle(payload) {
    let author = this.authors.find(function (author) {
        return author.id == payload.id;
    });
    author.name_particle = payload.value;
}

export function update_author_name_suffix(payload) {
    let author = this.authors.find(function (author) {
        return author.id == payload.id;
    });
    author.name_suffix = payload.value;
}

export function update_author_orcid(payload) {
    let author = this.authors.find(function (author) {
        return author.id == payload.id;
    });
    author.orcid = payload.value;
}
