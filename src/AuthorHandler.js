export function update_family_names(payload) {
    let author = this.authors.find(function (author) {
        return author.id == payload.id;
    });
    author.family_names = payload.value;
}

export function update_given_names(payload) {
    let author = this.authors.find(function (author) {
        return author.id == payload.id;
    });
    author.given_names = payload.value;
}
