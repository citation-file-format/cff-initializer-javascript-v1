export function add_identifier () {
    this.identifiers.push({
        type: '',
        value: ''
    })
}

export function add_identifiers() {
    this.identifiers = [];
}

export function move_identifier_down (identifier_id) {
    let position = this.identifiers.findIndex(function (identifier) {
        return identifier.id == identifier_id;
    });
    if (position < this.identifiers.length - 1) {
        this.identifiers = [].concat(this.identifiers.slice(0, position),
                                 this.identifiers.slice(position, position + 2).reverse(),
                                 this.identifiers.slice(position + 2))
    }
}

export function move_identifier_up (identifier_id) {
    let position = this.identifiers.findIndex(function (identifier) {
        return identifier.id == identifier_id;
    });
    if (position > 0) {
        this.identifiers = [].concat(this.identifiers.slice(0, position - 1),
                                 this.identifiers.slice(position - 1, position + 1).reverse(),
                                 this.identifiers.slice(position + 1))
    }
}

export function remove_identifier (identifier_id) {
    this.identifiers = this.identifiers.filter(function (identifier) {
        return identifier.id !== identifier_id;
    })
}

export function remove_identifiers() {
    this.identifiers = undefined;
}
