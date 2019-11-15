export function validate () {
    let authorized_set =  new Set([
        "doi", "url", "swh", "other"
    ]);
    return {
        error: !authorized_set.has(this.identifier.type),
        msg: "Use one of the authorized identifiers."
    }
}
