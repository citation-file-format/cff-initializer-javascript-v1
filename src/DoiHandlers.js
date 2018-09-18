export function add() {
    this.doi = "";
}

export function remove() {
    this.doi = undefined;
}

export function update(payload) {
    this.doi = payload.value;
}
