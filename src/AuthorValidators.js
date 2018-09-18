export function validate_orcid () {
    let re = new RegExp('^[0-9]{4}.[0-9]{4}.[0-9]{4}.[0-9]{3}[0-9X]$');
    return {
        error: !re.test(this.author.orcid),
        msg: "Should have the format 0000.0000.0000.0000"
    }
}
