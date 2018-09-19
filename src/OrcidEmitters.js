export function add () {
        this.$emit('add')
}

export function remove () {
        this.$emit('remove')
}

export function update (event) {
    let payload = {
        value: event.target.value
    };
    this.$emit('update', payload);
}
