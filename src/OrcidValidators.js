export function validate () {
    let re = new RegExp('^[0-9]{4}.[0-9]{4}.[0-9]{4}.[0-9]{3}[0-9X]$');
    return {
        error: !re.test(this.orcid),
        msg: "Should have the format 0000.0000.0000.0000"
    }
}
