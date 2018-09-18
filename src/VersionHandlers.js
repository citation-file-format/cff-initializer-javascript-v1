export function add_version() {
    this.version = "";
}

export function remove_version() {
    this.version = undefined;
}

export function update_version(payload) {
    this.version = payload.value;
}
