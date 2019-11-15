export function validate_type () {
    let authorized_set =  new Set([
        "doi", "url", "swh", "other"
    ]);
    return {
        error: !authorized_set.has(this.identifier.type),
        msg: "Use one of the authorized identifiers."
    }
}

export function validate_value () {
    if (this.identifier.value == '') {
        return {
            error: this.identifier.value == '',
            msg: "You must define value, or remove the identifier altogether."
        }
    } else {
        if (this.identifier.type == 'doi') {
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
            let doi = this.identifier.value;
            let matches = regexps.map(function(regexp) {
                return regexp.test(doi);
            });
            let at_least_one_matches = matches.includes(true);
            return {
                error: !at_least_one_matches,
                msg: "Please enter a valid DOI string."
            }
        } else if (this.identifier.type == 'url') {
            return {
                error: false,
                msg: "Valid url value."
            }
        } else if (this.identifier.type == 'swh') {
            return {
                error: false,
                msg: "Valid swh value."
            }
        } else if (this.identifier.type == 'other') {
            return {
                error: false,
                msg: "Valid other value."
            }
        } else {
            return {
                error: true,
                msg: "Use one of the authorized identifiers."
            }
        }
    }
}
