<!--
template: learnhowto.html
title: How Pages Are Created
appendToTarget: true
activeHeaderItem: 2
-->

# How Pages Are Composed

Trio uses the following project assets to compose web pages:

1. Includes, located in the source/includes folder, are either HTML or markdown files that can contain front matter or content or both.

1. Page Fragments, located in the source/fragments folder, are either HTML or markdown files that must contain front matter and may or may not contain content and are always associated with a page template. 

1. Page Templates, located in the source/templates folder, are HTML files that provide the overall structure of the web pages you create with Trio.

__!__ Besides the above, Trio unleashes the full power of JavaScript to empower you to further compose your web pages through its <a data-trio-link href="/docs/learn/javascriptcallbacks">JavaScript callback mechanism</a>.

## Includes

For every include file Trio finds in the source/includes folder it performs the following action:

1. <p>If the include has front matter and its front matter declares one or more JavaScript callbacks, Trio will synchronously call each of the callbacks, passing them a single argument called a context whose properties can be destructured and used by the callback to further compose the include file's content.</p>

## Includes, Page Fragments, Page Templates And Composites

For every page fragment file Trio finds in the source/fragments folder, it performs the following actions:

1. Trio creates a composite that represents the page fragment's associated page template.

1. Trio merges any content that might be contributed by the page fragment into the composite.

1. If the composite contains one or more HTML tags that have a `data-trio-include` attribute, Trio will merge the content of each requested include into the composite.

1. If the page fragment's front matter declares one or more JavaScript callbacks, Trio will synchronously call each of the callbacks, passing them a single argument called a context whose properties can be destructured and used by the callback to further compose the composite. 

1. Trio then saves the composite to the public folder with a path and file name as explained in <a data-trio-link href="/docs/learn/filenamesandpermalinks">File Names And Permalinks</a>.

## Includes And Page Fragments Used For Side Effects Only
It is perfectly acceptable for includes and page fragments to contain no content, in which case they are being used for side effects only, meaning that they declare JavaScript callbacks in their front matter which, when called, are used to dynamically compose their content.