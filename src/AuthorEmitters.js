export function add_affiliation () {
        let payload = {"id": this.author.id};
        this.$emit('add-affiliation', payload);
}

export function add_orcid () {
        let payload = {"id": this.author.id};
        this.$emit('add-orcid', payload);
}

export function add_name_suffix () {
        let payload = {"id": this.author.id};
        this.$emit('add-name-suffix', payload);
}

export function remove () {
        this.$emit('remove', this.author.id)
}

export function remove_affiliation () {
        let payload = {"id": this.author.id};
        this.$emit('remove-affiliation', payload);
}

export function remove_orcid () {
        let payload = {"id": this.author.id};
        this.$emit('remove-orcid', payload);
}

export function remove_name_suffix () {
        let payload = {"id": this.author.id};
        this.$emit('remove-name-suffix', payload);
}

export function move_down () {
    this.$emit('move-down', this.author.id)
}

export function move_up () {
    this.$emit('move-up', this.author.id)
}

export function update_affiliation (old_payload) {
    let new_payload = Object.assign(old_payload, {"id": this.author.id});
    this.$emit('update-affiliation', new_payload);
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

export function update_name_suffix (old_payload) {
    let new_payload = Object.assign(old_payload, {id: this.author.id});
    this.$emit('update-name-suffix', new_payload);
}

export function update_orcid (old_payload) {
    let new_payload = Object.assign(old_payload, {"id": this.author.id});
    this.$emit('update-orcid', new_payload);
}
