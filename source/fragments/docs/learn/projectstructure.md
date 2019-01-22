<!--
title: Project Structure
template: learnhowto.html
appendToTarget: true
activeHeaderItem: 2
callback: showCurrentPageInHeader.js
-->

# Project Structure

The following describes a Trio project's structure.

## `root/`

The project's root folder.

## `root/public/`

The folder where the generated website is saved to whenever Trio builds the project's source folder.

## `root/source/`

The development folder.

## `root/source/callbacks/`

The folder where JavaScript callback modules, which are referenced by page fragments and includes, live. See <a data-trio-link href="/docs/learn/javascriptcallbacks">JavaScript Callbacks</a> for more information.

## `root/source/css/`

The folder where CSS files live.

## `root/source/data/`

The folder where JSON data files, exposed as "file name": [file content] in the site.dataCatalog metadata object passed to JavaScript callbacks, live.

For example, the content of the file /source/data/personalization.json would be exposed as:
```json
"dataCatalog": {
    "personalization": {
        "name": "John Doe",
        "twitter": "@johndoe"
    },
    "someotherfile" {...}
}
```

__!__ See <a data-trio-link href="/docs/learn/metadata/#datacatalog">dataCatalog</a> for more information.

## `root/source/etc/`

The folder where files like robots.txt, sitemaps, .etc live. Files contained in this folder are copied as is to the root of the public folder.

## `root/source/fragments/`

The folder where .md and .html page fragments live.

## `root/source/fragments/blog`

The folder where blog specific .md and .html page fragments live.

## `root/source/fragments/blog/articles`

The folder where blog article specific .md and .html page fragments live.

## `root/source/fragments/blog/category`

The folder where blog category specific .md and .html page fragments live.

## `root/source/fragments/blog/tag`

The folder where blog tag specific .md and .html page fragments live.

## `root/source/includes/`

The folder where .md and .html include files live.

## `root/source/media/`

The folder where media (e.g. .jpg, .gif, .pdf, .etc) files live.

## `root/source/sass/`

The folder where Sass files live.

## `root/source/scripts/`

The folder where run-time JavaScript dependencies live.

## `root/source/templates/`

The folder where .html page templates live.

## `root/trio.json`

The project's configuration file. See <a href="/docs/learn/configuration" data-trio-link="">Configuration</a> for more information.

## `root/trio.manifest.json`

File which contains collections of metadata that are generated every time Trio builds the project.
