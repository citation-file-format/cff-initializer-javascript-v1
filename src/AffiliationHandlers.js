export function add (payload) {
    let author = this.authors.find(function (author) {
        return author.id == payload.id;
    });
    author.affiliation = '';
}

export function remove (payload) {
    let author = this.authors.find(function (author) {
        return author.id == payload.id;
    });
    author.affiliation = undefined;
}

export function update (payload) {
    let author = this.authors.find(function (author) {
        return author.id == payload.id;
    });
    author.affiliation = payload.value;
}
