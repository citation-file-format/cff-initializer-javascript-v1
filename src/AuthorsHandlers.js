export function add_author () {
    this.authors.push({
        affiliation: undefined,
        family_names: '',
        given_names: '',
        id: this.author_id += 1,
        name_particle: undefined,
        name_suffix: undefined,
        orcid: undefined
    })
}

export function move_author_down (author_id) {
    let position = this.authors.findIndex(function (author) {
        return author.id == author_id;
    });
    if (position < this.authors.length - 1) {
        this.authors = [].concat(this.authors.slice(0, position),
                                 this.authors.slice(position, position + 2).reverse(),
                                 this.authors.slice(position + 2))
    }
}

export function move_author_up (author_id) {
    let position = this.authors.findIndex(function (author) {
        return author.id == author_id;
    });
    if (position > 0) {
        this.authors = [].concat(this.authors.slice(0, position - 1),
                                 this.authors.slice(position - 1, position + 1).reverse(),
                                 this.authors.slice(position + 1))
    }
}

export function remove_author (author_id) {
    this.authors = this.authors.filter(function (author) {
        return author.id !== author_id;
    })
}
