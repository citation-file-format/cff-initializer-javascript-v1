export function add(payload) {
    let author = this.authors.find((author) => {
        return author.id == payload.id
    })
    author.name_suffix = '';
}

export function remove(payload) {
    let author = this.authors.find((author) => {
        return author.id == payload.id
    })
    author.name_suffix = undefined;
}

export function update(payload) {
    let author = this.authors.find((author) => {
        return author.id == payload.id
    })
    author.name_suffix = payload.value;
}
