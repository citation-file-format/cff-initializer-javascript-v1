export function validate_message () {
    let min_length = 30;
    return {
        error: this.message.length < min_length,
        msg: "You must include a sufficiently long message."
    }
}
