<!--
title: Building A Blog
template: learnhowto.html
appendToTarget: true
activeHeaderItem: 2
callback: showCurrentPageInHeader.js
-->

# Building A blog 

__!__ A sample blogging project complete with categories and tags <a target="_blank" href="https://github.com/4awpawz/trio-blog-example">is available on Github</a> and a live version of the sample blog project <a target="_blank" href="https://4awpawz.github.io/trio-blog-example-pages/">can be viewed here</a>.

Blogs typically have the following assortment and relationship of pages:

* One or more blog article pages. If the blog has many articles it is common for these pages to have navigational elements that allow the viewer to navigate between them. In addition, if the blog is using categories and/or tags then these pages may also present lists of links to articles related by category and/or tags as well. 

* One or more blog pages on which ordered lists of links to blog articles are presented for the viewer of the blog to select from. If the blog has many blog articles it is common for these pages to have navigational elements that allow the viewer to navigate between them. In addition, if the blog is using categories and/or tags then these pages may also present these categories and tags as links to category and tag pages to the user as well.

* One category page for each category used by the blog on which all articles with the same category are listed.

* One tag page for each tag used by the blog on which all articles with the same tag are listed.

## Blog Related Metadata
As can be seen from the above, "stitching together" the assortment of pages required by a typical blog can be intimidating if not somewhat complex. To make building out a blog easier to reason about, Trio generates numerous blog specific metadata collections that can make implementing a typical blog much easier. Trio also saves this collection of metadata to root/trio.manifest.json after every build or release is run. Below is a list of the blog specific metadata items and collections that Trio makes available to JavaScript callbacks:

* articlesCount: total number of articles

* site.articlesCatalog:

    Included in each site.articlesCatalog item:

    * relatedArticlesByTag: if the article has 1 or more tags.

    * relatedArticlesByTagFlattened: if the article has 1 or more tags.

    * relatedArticlesByCategory: if the article is categorized.

* site.categoriesCatalog: if 1 or more articles are categorized.

* site.sortedTagCatalog: if 1 or more articles are categorized.

__!__ Article lists are sorted in descending date and title order.
