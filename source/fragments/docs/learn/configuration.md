<!--
template: learnhowto.html
title: Configuration
appendToTarget: true
activeHeaderItem: 2
callback: showCurrentPageInHeader.js
-->

# Configuration

Trio supports a number of configuration options as described below, all of which have sensible defaults, which you can override in your project's `trio.json` file:

## baseUrl

A string whose default value is `""`. Used to set the value of `data-trio-link`. See <a data-trio-link href="/docs/learn/datatriotagattributes#data-trio-link">data-trio-link</a> for more information.

## blogFolderName

A string whose default value is `"blog"`. Used to set the name of the `public blog folder` that is generated. See <a data-trio-link href="/docs/learn/buildingablog#configuring-the-blog-folder-name">Configuring The Blog Folder Name</a> for more information.

## nojekyll

A boolean whose default value is `false`. Used to instruct Trio to write a `.nojekyll` file to the public folder during release builds to completely bypass Jekyll processing  and is only relevant when hosting your website on GitHub Pages. See <a target="_blank" href="https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/">Bypassing Jekyll on GitHub Pages</a> for more information.
