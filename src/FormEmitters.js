export function add_author () {
    this.$emit('add-author');
}

export function add_keyword () {
    this.$emit('add-keyword');
}

export function add_license () {
    this.$emit('add-license');
}

export function add_title () {
    this.$emit('add-title');
}

export function add_version () {
    this.$emit('add-version');
}

export function move_author_down (author_id) {
    this.$emit('move-author-down', author_id);
}

export function move_author_up (author_id) {
    this.$emit('move-author-up', author_id);
}

export function move_keyword_down (keyword_id) {
    this.$emit('move-keyword-down', keyword_id);
}

export function move_keyword_up (keyword_id) {
    this.$emit('move-keyword-up', keyword_id);
}

export function remove_author (author_id) {
    this.$emit('remove-author', author_id);
}

export function remove_keyword (keyword_id) {
    this.$emit('remove-keyword', keyword_id);
}

export function remove_license () {
    this.$emit('remove-license');
}

export function remove_title () {
    this.$emit('remove-title');
}

export function remove_version () {
    this.$emit('remove-version');
}

export function update_author_given_names (payload) {
    this.$emit('update-author-given-names', payload);
}

export function update_author_name_particle (payload) {
    this.$emit('update-author-name-particle', payload);
}

export function update_author_family_names (payload) {
    this.$emit('update-author-family-names', payload);
}

export function update_author_name_suffix (payload) {
    this.$emit('update-author-name-suffix', payload);
}

export function update_author_orcid (payload) {
    this.$emit('update-author-orcid', payload);
}

export function update_author_affiliation (payload) {
    this.$emit('update-author-affiliation', payload);
}

export function update_cff_version (event) {
    let payload = {
        value: event.target.value
    };
    this.$emit('update-cff-version', payload);
}

export function update_date_released (payload) {
    this.$emit('update-date-released', payload);
}

export function update_doi (payload) {
    this.$emit('update-doi', payload);
}

export function update_keyword (payload) {
    this.$emit('update-keyword', payload);
}

export function update_license (payload) {
    this.$emit('update-license', payload);
}

export function update_repository_code (payload) {
    this.$emit('update-repository-code', payload);
}

export function update_title (payload) {
    this.$emit('update-title', payload);
}

export function update_message (event) {
    let payload = {
        value: event.target.value
    };
    this.$emit('update-message', payload);
}

export function update_version (payload) {
    this.$emit('update-version', payload);
}
