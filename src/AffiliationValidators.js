export function validate () {
    return {
        error: this.affiliation == '',
        msg: "Please enter a valid string or remove the property entirely."
    }
}
