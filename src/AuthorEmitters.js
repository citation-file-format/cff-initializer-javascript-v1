export function remove () {
        this.$emit('remove', this.author.id)
}

export function move_down () {
    this.$emit('move-down', this.author.id)
}

export function move_up () {
    this.$emit('move-up', this.author.id)
}

export function update_affiliation (event) {
    let payload = {
        id: this.author.id,
        value: event.target.value
    };
    this.$emit('update-affiliation', payload);
}

export function update_family_names (event) {
    let payload = {
        id: this.author.id,
        value: event.target.value
    };
    this.$emit('update-family-names', payload);
}

export function update_given_names (event) {
    let payload = {
        id: this.author.id,
        value: event.target.value
    };
    this.$emit('update-given-names', payload);
}

export function update_name_particle (event) {
    let payload = {
        id: this.author.id,
        value: event.target.value
    };
    this.$emit('update-name-particle', payload);
}

export function update_name_suffix (event) {
    let payload = {
        id: this.author.id,
        value: event.target.value
    };
    this.$emit('update-name-suffix', payload);
}

export function update_orcid (event) {
    let payload = {
        id: this.author.id,
        value: event.target.value
    };
    this.$emit('update-orcid', payload);
}
