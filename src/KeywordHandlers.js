export function add() {
    this.keywords.push({
        id: this.keyword_id += 1,
        text: '~'
    })
}

export function move_down(keyword_id) {
    let position = this.keywords.findIndex(function (keyword) {
        return keyword.id == keyword_id;
    });
    if (position < this.keywords.length - 1) {
        this.keywords = [].concat(this.keywords.slice(0, position),
                                  this.keywords.slice(position, position + 2).reverse(),
                                  this.keywords.slice(position + 2))
    }
}

export function move_up(keyword_id) {
    let position = this.keywords.findIndex(function (keyword) {
        return keyword.id == keyword_id;
    });
    if (position > 0) {
        this.keywords = [].concat(this.keywords.slice(0, position - 1),
                                  this.keywords.slice(position - 1, position + 1).reverse(),
                                  this.keywords.slice(position + 1))
    }
}

export function remove(keyword_id) {
    this.keywords = this.keywords.filter(function (keyword) {
        return keyword.id !== keyword_id;
    })
}

export function update(payload) {
    let keyword = this.keywords.find(function (keyword) {
        return keyword.id == payload.id;
    });
    keyword.text= payload.value;
}
