export function move_down () {
    this.$emit('move-down', this.keyword.id);
}

export function move_up () {
    this.$emit('move-up', this.keyword.id);
}

export function remove () {
    this.$emit('remove', this.keyword.id);
}

export function update (event) {
    this.$emit('update', {
        id: this.keyword.id,
        value: event.target.value
    })
}
