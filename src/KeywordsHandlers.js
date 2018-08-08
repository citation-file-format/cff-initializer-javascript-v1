export function add_keyword() {
    this.keywords.push({
        id: this.keyword_id += 1,
        text: '~'
    })
}

export function move_keyword_down(keyword_id) {
    let position = this.keywords.findIndex(function (keyword) {
        return keyword.id == keyword_id;
    });
    if (position < this.keywords.length - 1) {
        this.keywords = [].concat(this.keywords.slice(0, position),
                                  this.keywords.slice(position, position + 2).reverse(),
                                  this.keywords.slice(position + 2))
    }
}

export function move_keyword_up(keyword_id) {
    let position = this.keywords.findIndex(function (keyword) {
        return keyword.id == keyword_id;
    });
    if (position > 0) {
        this.keywords = [].concat(this.keywords.slice(0, position - 1),
                                  this.keywords.slice(position - 1, position + 1).reverse(),
                                  this.keywords.slice(position + 1))
    }
}

export function remove_keyword(keyword_id) {
    this.keywords = this.keywords.filter(function (keyword) {
        return keyword.id !== keyword_id;
    })
}
