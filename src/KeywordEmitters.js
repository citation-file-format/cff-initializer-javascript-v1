export function add_keyword () {
    this.$emit('add-keyword');
}

export function move_keyword_down () {
    this.$emit('move-keyword-down', this.keyword.id);
}

export function move_keyword_up () {
    this.$emit('move-keyword-up', this.keyword.id);
}

export function remove_keyword () {
    this.$emit('remove-keyword', this.keyword.id);
}

export function update_keyword (event) {
    let payload = {
        id: this.keyword.id,
        value: event.target.value
    };
    this.$emit('update-keyword', payload)
}
