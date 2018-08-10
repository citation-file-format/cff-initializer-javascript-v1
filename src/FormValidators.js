export function validate_date_released () {
    let yyyy = '[0-9]{4}';
    let mm = '(0[1-9]|1[0-2])';
    let dd = '(0[1-9]|1[0-9]|2[0-9]|3[0-1])';
    let re = new RegExp('^' + yyyy + '-' + mm + '-' + dd + '$');
    return {
        error: !re.test(this.date_released),
        msg: "Use the yyyy-mm-dd format."
    }
}

export function validate_doi () {
    // from: https://www.crossref.org/blog/dois-and-matching-regular-expressions/
    //
    //    /^10.\d{4,9}/[-._;()/:A-Z0-9]+$/i
    //    /^10.1002/[^\s]+$/i
    //    /^10.\d{4}/\d+-\d+X?(\d+)\d+<[\d\w]+:[\d\w]*>\d+.\d+.\w+;\d$/i
    //    /^10.1021/\w\w\d++$/i
    //    /^10.1207/[\w\d]+\&\d+_\d+$/i
    //
    // I added escape to the first dot in each regexp
    // I added escapes to all backslashes
    let regexps = [
        new RegExp('^10\\.\\d{4,9}/[-._;()/:a-zA-Z0-9]+$'),
        new RegExp('^10\\.1002/[^\\s]+$'),
        new RegExp('^10\\.\\d{4}/\\d+-\\d+X?(\\d+)\\d+<[\\d\\w]+:[\\d\\w]*>\\d+.\\d+.\\w+;\\d$'),
        new RegExp('^10\\.1021/\\w\\w\\d+\\+$'),
        new RegExp('^10\\.1207/[\\w\\d]+\\&\\d+_\\d+$')
    ];
    // store a copy of doi, because this.doi won't be accessible within the map
    // function below:
    let doi = this.doi;
    let matches = regexps.map(function(regexp) {
        return regexp.test(doi);
    });
    let at_least_one_matches = matches.includes(true);
    return {
        error: !at_least_one_matches,
        msg: "Please enter a valid DOI string."
    }
}

export function validate_message () {
    return {
        error: this.message.length < 30,
        msg: "You must include a message."
    }
}

export function validate_repository_code () {
    let re = new RegExp('^(https?|ftp)://((?:[^\\s./$#?]{1,}\\.){1,})([^\\s./$#?]{2,})([/$#?]{1}[^\\s]{0,})?$');
    return {
        error: !re.test(this.repository_code),
        msg: "Use a valid URL."
    }

}
