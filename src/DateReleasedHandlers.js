export function add() {
    this.date_released = "";
}

export function remove() {
    this.date_released = undefined;
}

export function update(payload) {
    this.date_released = payload.value;
}
