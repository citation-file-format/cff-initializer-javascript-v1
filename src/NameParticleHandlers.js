export function add(payload) {
    let author = this.authors.find((author) => {
        return author.id == payload.id
    })
    author.name_particle = '';
}

export function remove(payload) {
    let author = this.authors.find((author) => {
        return author.id == payload.id
    })
    author.name_particle = undefined;
}

export function update(payload) {
    let author = this.authors.find((author) => {
        return author.id == payload.id
    })
    author.name_particle = payload.value;
}
