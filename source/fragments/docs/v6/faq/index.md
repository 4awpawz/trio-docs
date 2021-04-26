<!--
template: docpage
title: FAQ - Trio
appendToTarget: true
activeHeaderItem: 2
activeDocIndexItem: 24
-->
# Frequently Asked Questions

<div class="faq">

<a class="faq__in-page-anchor" href="#howdoigetthetotalnumberofpagesexcludingarticles">How do I get the total number of pages, excluding articles?</a>
<a class="faq__in-page-anchor" href="#howdoigetthetotalnumberofarticlepages">How do I get the total number of article pages?</a>


<p id="howdoigetthetotalnumberofpagesexcludingarticles" class="faq__question">Q) How do I get the total number of pages, excluding articles?</p>

<p class="faq__answer">A) The following works in both collection filter functions and tag-based callbacks:</p>

```javascript
site.frags.length;
```

<p id="howdoigetthetotalnumberofarticlepages" class="faq__question">Q) How do I get the total number of article pages?</p>

<p class="faq__answer">A) The following works in both collection filter functions and tag-based callbacks:</p>

```javascript
site.articlesCount;
```

<p class="faq__question">Q) How do I get a reference to the list of all the pages, excluding articles?</p>

<p class="faq__answer">A) The following works in both collection filter functions and tag-based callbacks:</p>

```javascript
const frags = site.frags;
```

<p class="faq__question">Q) How do I get a reference to the list of all the article pages?</p>

<p class="faq__answer">A) The following works in both collection filter functions and tag-based callbacks:</p>

```javascript
const articles = site.articlesCatalog;
```

<p class="faq__question">Q) My site has too many articles to display on a single page. How can I display them using multiple pages and limit the number of articles per page and provide links to the previous and next pages?</p>

<p class="faq__answer">A) The following is an example of how to accomplish this using a collection filter function:</p>

```javascript
/*
 * Break up the articlesCatalog into multiple pages of articlesPerPage articles.
 * The value of articlesPerPage is stored in trio.json.
 * Pages are named "index.html", "page2.html", "page3.html", ...
 * Each dataset item's data property is assigned a subset of site.articlesCatalog
 * using Array.slice.
 * Links to the previous page with newer articles and to the next page with older
 * articles are assigned to the dataset item's newerUrl and olderUrl properties,
 * respectively.
 */

module.exports = ({ site }) => {
    const articlesPerPage = site.userConfig.articlesPerPage;
    const dataset = [];
    const noOfPages = Math.ceil(site.articlesCatalog.length / articlesPerPage);
    for (let i = 0; i < noOfPages; i++) {
        const pageName = (i === 0 && "index") || "page" + (i + 1);
        const data = site.articlesCatalog.slice(articlesPerPage * i, articlesPerPage * i + articlesPerPage);
        dataset.push({
            pageName,
            data,
            newerUrl: i === 0 ? "" : i === 1 ? "/blog" : "/blog/page" + i,
            olderUrl: i + 1 === noOfPages ? "" : "/blog/page" + (i + 2)
        });
    }
    return dataset;
};
```
</div>
