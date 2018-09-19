export function add () {
    this.$emit('add');
}

export function add_affiliation (payload) {
    this.$emit('add-affiliation', payload);
}

export function add_name_particle (payload) {
    this.$emit('add-name-particle', payload);
}

export function add_name_suffix (payload) {
    this.$emit('add-name-suffix', payload);
}

export function add_orcid (payload) {
    this.$emit('add-orcid', payload);
}

export function move_down (author_id) {
    this.$emit('move-down', author_id)
}

export function move_up (author_id) {
    this.$emit('move-up', author_id)
}

export function remove (author_id) {
    this.$emit('remove', author_id)
}

export function remove_affiliation (payload) {
    this.$emit('remove-affiliation', payload)
}

export function remove_name_particle (payload) {
    this.$emit('remove-name-particle', payload)
}

export function remove_name_suffix (payload) {
    this.$emit('remove-name-suffix', payload)
}

export function remove_orcid (payload) {
    this.$emit('remove-orcid', payload)
}

export function update_affiliation (payload) {
    this.$emit('update-affiliation', payload)
}

export function update_family_names (payload) {
    this.$emit('update-family-names', payload)
}

export function update_given_names (payload) {
    this.$emit('update-given-names', payload)
}

export function update_name_particle (payload) {
    this.$emit('update-name-particle', payload)
}

export function update_name_suffix (payload) {
    this.$emit('update-name-suffix', payload)
}

export function update_orcid (payload) {
    this.$emit('update-orcid', payload)
}
