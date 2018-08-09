export function validate_date_released () {

    let re = new RegExp('[0-9]{4}-[0-9]{2}-[0-9]{2}');
    return {
        error: !re.test(this.date_released),
        msg: "Use the yyyy-mm-dd format."
    }
}
