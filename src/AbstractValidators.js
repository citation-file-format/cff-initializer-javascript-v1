export function validate () {
    return {
        error: this.abstract == '',
        msg: "Please enter a valid string or remove the property entirely."
    }
}
