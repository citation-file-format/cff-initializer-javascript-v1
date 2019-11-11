export function add_identifier () {
    this.$emit('add-identifier');
}

export function move_identifier_down () {
    this.$emit('move-identifier-down', this.identifier.id);
}

export function move_identifier_up () {
    this.$emit('move-identifier-up', this.identifier.id);
}

export function remove_identifier () {
    this.$emit('remove-identifier', this.identifier.id);
}

export function update_identifier_type (event) {
    let payload = {
        id: this.identifier.id,
        value: event.target.value
    };
    this.$emit('update-identifier-type', payload)
}

export function update_identifier_value (event) {
    let payload = {
        id: this.identifier.id,
        value: event.target.value
    };
    this.$emit('update-identifier-value', payload)
}
