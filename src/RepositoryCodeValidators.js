export function validate () {
    let re = new RegExp('^(https?|ftp)://((?:[^\\s./$#?]{1,}\\.){1,})([^\\s./$#?]{2,})([/$#?]{1}[^\\s]{0,})?$');
    return {
        error: !re.test(this.repository_code),
        msg: "Use a valid URL."
    }
}
