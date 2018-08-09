export function add () {
    this.$emit('add');
}

export function move_down (keyword_id) {
    this.$emit('move-down', keyword_id)
}

export function move_up (keyword_id) {
    this.$emit('move-up', keyword_id)
}

export function remove (keyword_id) {
    this.$emit('remove', keyword_id)
}

export function update (payload) {
    this.$emit('update', payload)
}
