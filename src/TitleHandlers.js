export function add_title() {
    this.title = "";
}

export function remove_title() {
    this.title = undefined;
}

export function update_title(payload) {
    this.title = payload.value;
}
