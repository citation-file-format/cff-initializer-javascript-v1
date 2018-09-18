export function validate () {
    let yyyy = '[0-9]{4}';
    let mm = '(0[1-9]|1[0-2])';
    let dd = '(0[1-9]|1[0-9]|2[0-9]|3[0-1])';
    let re = new RegExp('^' + yyyy + '-' + mm + '-' + dd + '$');
    return {
        error: !re.test(this.date_released),
        msg: "Use the yyyy-mm-dd format."
    }
}
