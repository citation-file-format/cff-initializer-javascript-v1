export function add() {
    this.version = "";
}

export function remove() {
    this.version = undefined;
}

export function update(payload) {
    this.version = payload.value;
}
