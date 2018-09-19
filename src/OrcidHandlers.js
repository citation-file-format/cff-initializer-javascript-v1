export function add(payload) {
    let author = this.authors.find((author) => {
        return author.id == payload.id
    })
    author.orcid = '';
}

export function remove(payload) {
    let author = this.authors.find((author) => {
        return author.id == payload.id
    })
    author.orcid = undefined;
}

export function update(payload) {
    let author = this.authors.find((author) => {
        return author.id == payload.id
    })
    author.orcid = payload.value;
}
