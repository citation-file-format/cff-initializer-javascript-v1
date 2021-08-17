- [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.1404735.svg)](https://doi.org/10.5281/zenodo.1404735)
- [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcitation-file-format%2Fcff-initializer-javascript.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcitation-file-format%2Fcff-initializer-javascript?ref=badge_shield)
- [![Build Status](https://travis-ci.org/citation-file-format/cff-initializer-javascript.svg?branch=master)](https://travis-ci.org/citation-file-format/cff-initializer-javascript)
- [![Markdown links](https://github.com/citation-file-format/cff-initializer-javascript/workflows/Check%20Markdown%20links/badge.svg)](https://github.com/citation-file-format/cff-initializer-javascript/actions?query=workflow%3A%22Check+Markdown+links%22)

# Web form to initialize CITATION.cff files.

![Live version](cffinit-on-ghpages.png)

# Documentation for users

- Check out the **live version** [here](https://citation-file-format.github.io/cff-initializer-javascript/).
- For the rationale behind CITATION.cff files, read [the blog](https://www.software.ac.uk/blog/2017-12-12-standard-format-citation-files).
- For the Citation File Format specification, go [here](https://github.com/citation-file-format/citation-file-format) (latest) or [here](https://doi.org/10.5281/zenodo.1003149) (stable).
- For the Citation File Format home page, go [here](https://citation-file-format.github.io).

# Documentation for developers

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production (with disabled minification)
npm run build

# npm run build and update the local copy of the gh-pages content in docs/
npm run ghpages

# run eslint on the *.js and *.vue files under src/
npm run lint
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## linting

The rules are in ``.eslintrc``, the setup is described here: 
https://alligator.io/vuejs/vue-eslint-plugin/


Project was bootstrapped with https://github.com/vuejs-templates/webpack-simple

## Markdown link checker

If you want to check if the links in your markdown work, run ``markdown-link-check``

```shell
find . -name '*.md' -not -path './node_modules/*' -exec \
markdown-link-check '{}' --config .mlc-config.json ';'
```

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcitation-file-format%2Fcff-initializer-javascript.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcitation-file-format%2Fcff-initializer-javascript?ref=badge_large)
