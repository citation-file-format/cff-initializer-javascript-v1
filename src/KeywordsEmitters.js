export function add_keyword () {
    this.$emit('add-keyword');
}

export function add_keywords () {
    this.$emit('add-keywords');
}

export function move_keyword_down (payload) {
    this.$emit('move-keyword-down', payload);
}

export function move_keyword_up (payload) {
    this.$emit('move-keyword-up', payload);
}

export function remove_keyword (payload) {
    this.$emit('remove-keyword', payload);
}

export function remove_keywords () {
    this.$emit('remove-keywords');
}

export function update_keyword (payload) {
    this.$emit('update-keyword', payload)
}
