export function validate () {
    return {
        error: this.name_suffix == '',
        msg: "Please enter a valid string or remove the property entirely."
    }
}
