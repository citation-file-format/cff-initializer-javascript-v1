export function validate () {
    return {
        error: this.name_particle == '',
        msg: "Please enter a valid string or remove the property entirely."
    }
}
