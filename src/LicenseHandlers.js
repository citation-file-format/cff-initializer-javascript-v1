export function add() {
    this.license = "";
}

export function remove() {
    this.license = undefined;
}

export function update(payload) {
    this.license = payload.value;
}
