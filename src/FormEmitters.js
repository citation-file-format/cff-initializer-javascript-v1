export function add_abstract () {
    this.$emit('add-abstract');
}

export function add_affiliation (payload) {
    this.$emit('add-affiliation', payload);
}

export function add_author () {
    this.$emit('add-author');
}

export function add_date_released () {
    this.$emit('add-date-released');
}

export function add_doi () {
    this.$emit('add-doi');
}

export function add_keyword () {
    this.$emit('add-keyword');
}

export function add_keywords () {
    this.$emit('add-keywords');
}

export function add_license () {
    this.$emit('add-license');
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

export function add_repository_code () {
    this.$emit('add-repository-code');
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

export function remove_abstract () {
    this.$emit('remove-abstract');
}

export function remove_affiliation (payload) {
    this.$emit('remove-affiliation', payload);
}

export function remove_author (author_id) {
    this.$emit('remove-author', author_id);
}

export function remove_date_released () {
    this.$emit('remove-date-released');
}

export function remove_doi () {
    this.$emit('remove-doi');
}

export function remove_keyword (keyword_id) {
    this.$emit('remove-keyword', keyword_id);
}

export function remove_keywords () {
    this.$emit('remove-keywords');
}

export function remove_license () {
    this.$emit('remove-license');
}

export function remove_name_particle (payload) {
    this.$emit('remove-name-particle', payload);
}

export function remove_name_suffix (payload) {
    this.$emit('remove-name-suffix', payload);
}

export function remove_orcid (payload) {
    this.$emit('remove-orcid', payload);
}

export function remove_repository_code () {
    this.$emit('remove-repository-code');
}

export function remove_title () {
    this.$emit('remove-title');
}

export function remove_version () {
    this.$emit('remove-version');
}

export function update_abstract (payload) {
    this.$emit('update-abstract', payload);
}

export function update_given_names (payload) {
    this.$emit('update-given-names', payload);
}

export function update_name_particle (payload) {
    this.$emit('update-name-particle', payload);
}

export function update_family_names (payload) {
    this.$emit('update-family-names', payload);
}

export function update_name_suffix (payload) {
    this.$emit('update-name-suffix', payload);
}

export function update_orcid (payload) {
    this.$emit('update-orcid', payload);
}

export function update_affiliation (payload) {
    this.$emit('update-affiliation', payload);
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
