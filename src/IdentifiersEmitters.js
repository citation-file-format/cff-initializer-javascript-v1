export function add_identifier () {
    this.$emit('add-identifier');
}

export function add_identifiers () {
    this.$emit('add-identifiers');
}

export function move_identifier_down (payload) {
    this.$emit('move-identifier-down', payload);
}

export function move_identifier_up (payload) {
    this.$emit('move-identifier-up', payload);
}

export function remove_identifier (payload) {
    this.$emit('remove-identifier', payload);
}

export function remove_identifiers () {
    this.$emit('remove-identifiers');
}

export function update_identifier_type (payload) {
    this.$emit('update-identifier-type', payload)
}

export function update_identifier_value (payload) {
    this.$emit('update-identifier-value', payload)
}
