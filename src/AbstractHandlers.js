export function add () {
    this.abstract = '';
}

export function remove () {
    this.abstract = undefined;
}

export function update (payload) {
    this.abstract = payload.value;
}
