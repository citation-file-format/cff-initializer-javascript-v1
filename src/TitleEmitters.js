export function update (event) {
    let payload = {
        value: event.target.value
    };
    this.$emit('update', payload);
}
