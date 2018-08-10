export function validate_date_released () {

    let re = new RegExp('[0-9]{4}-[0-9]{2}-[0-9]{2}');
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
