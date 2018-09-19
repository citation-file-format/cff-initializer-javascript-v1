export function add() {
    this.title = "";
}

export function remove() {
    this.title = undefined;
}

export function update(payload) {
    this.title = payload.value;
}
