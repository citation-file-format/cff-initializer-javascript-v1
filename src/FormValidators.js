export function validate_cff_version () {
    return {
        error: this.cff_version !== '1.1.0',
        msg: "Only CFF version 1.1.0 is supported at the moment."
    }
}

export function validate_message () {
    let min_length = 30;
    return {
        error: this.message.length < min_length,
        msg: "You must include a sufficiently long message."
    }
}
