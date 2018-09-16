export function add() {
    this.repository_code = "";
}

export function remove() {
    this.repository_code = undefined;
}

export function update(payload) {
    this.repository_code = payload.value;
}
