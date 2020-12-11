<!--
template: tutorialpage
title: Advanced Page Composition With Fragment Front Matter
appendToTarget: true
category: tutorials
tag: tutorial
articleTitle: Advanced Page Composition With Fragment Front Matter
activeHeaderItem: 3
socialMediaMetaTags:
- "<meta name=\"twitter:card\" content=\"summary_large_image\">"
- "<meta name=\"twitter:site\" content=\"@gettriossg\">"
- "<meta name=\"twitter:creator\" content=\"@jefftschwartz\">"
- "<meta property=\"og:type\" content=\"article\">"
- "<meta property=\"og:url\" content=\"https://gettriossg.com/blog/tutorials/2020/12/10/page-composition-tut-02/\">"
- "<meta property=\"og:title\" content=\"Advanced Page Composition With Fragment Front Matter\">"
- "<meta property=\"og:description\" content=\"This tutorial teaches you how to use Trio's advanced page composition to add dynamic content from fragment front matter to your web pages.\">"
- "<meta property=\"og:image\" content=\"https://gettriossg.com/media/composite.png\">"
-->

<img data-trio-link src="/media/composite.png" alt="a web page composition abstract">

<!-- end -->

## Prerequisites

Before proceeding with this tutorial, please familiarize yourself with Trio's <a data-trio-link href="/docs/v4/coreconcepts/">Core Concepts</a>, <a data-trio-link href="/docs/v4/tagbasedcallbacks/"> Tag-Based Callbacks</a>, and <a data-trio-link href="/docs/v4/metadata/">Metadata</a>.

## Intention Of This Tutorial

In this tutorial we will explore Trio's advanced page composition. Unlike basic page composition, which was the subject of the previous tutorial, <a data-trio-link href="/blog/tutorials/2020/11/16/page-composition-tut-01/">Basic Page Composition With Templates, Fragments And Includes</a>, advanced page composition does require the use of tag-based Node callback modules.

Our use case for this tutorial is again trivial and is the same as it was for the previous tutorial. We want Trio to generate an HTML page that contains a page header and a list containing the names of artist and their relevant information. If we were to hand code this HTML page, this is what it would look like:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hand Coded</title>
</head>

<body>
    <header>Artists Registry</header>
    <main>
        <h2>Artists</h2>
        <ul>
            <li>Billie Noble</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Post-Impressionism</li>
            </ul>

            <li>Blair Gordonlist</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Pop Art</li>
            </ul>

            <li>Caden Ray</li>
            <ul>
                <li>Medium: Watercolor</li>
                <li>Style: Art Nouveau</li>
            </ul>

            <li>Danni Powell</li>
            <ul>
                <li>Medium: Watercolor</li>
                <li>Style: Pop Art</li>
            </ul>

            <li>Glen Miller</li>
            <ul>
                <li>Medium: Watercolor</li>
                <li>Style: Impressionism</li>
            </ul>

            <li>Kris Jay</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Pop Art</li>
            </ul>

            <li>Riley Webb</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Cubism</li>
            </ul>

            <li>Steff Hammer</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
            </ul>

            <li>Terry Shannon</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
            </ul>

            <li>Vic Christy</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Art Deco</li>
            </ul>
        </ul>
    </main>
</body>

</html>
```

## Create A New Project

In your terminal application, run the following __command__ (please replace _"path/to/new/project"_ with the actual path you would prefer for the location of your new project) to create a new project:

```shell
trio new path/to/new/project
```

## Create The Template Project Asset

In the project's _root/source/templates_ folder, create a new __template file__ named _default.html_ and copy and paste the following markup into that file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/css/main.css">
</head>
<body>
    <header data-trio-include="header.md"></header>
    <main data-trio-fragment></main>
</body>
</html>
```

Please notice that the above template project asset contains a single tag (in this case, a "main" tag) that is decorated with the _data-trio-fragment_ attribute. When Trio finds such a tag decorated with this attribute in a template it will target it with any content it finds in the associated fragment. This isn't required if the fragment isn't contributing any content of its own.

## Create The Fragment Project Asset

In the project's _root/source/fragments_ folder, create a new __fragment file__ named _index.html_ and copy and paste the following into that:

```html
<!--
template: default
title: Coded Using Front Matter & Tag-based Callback
appendToTarget: true
artists:
- name: Terry Shannon
  medium: Oil
  style: Impressionism
- name: Glen Miller
  medium: Watercolor
  style: Impressionism
- name: Kris Jay
  medium: Oil
  style: Pop Art
- name: Riley Webb
  medium: Oil
  style: Cubism
- name: Vic Christy
  medium: Oil
  style: Art Deco
- name: Caden Ray
  medium: Watercolor
  style: Art Nouveau
- name: Steff Hammer
  medium: Oil
  style: Impressionism
- name: Billie Noble
  medium: Oil
  style: Post-Impressionism
- name: Danni Powell
  medium: Watercolor
  style: Pop Art
- name: Blair Gordonlist
  medium: Oil
  style: Pop Art
-->

<h2>Artists</h2>
<ul data-trio-callback="artistlistfromfrontmatter"></ul>
```

Please notice how the above fragment project asset declares front matter at the very top of the file, in which it defines:

1. The required front matter property _template_ with the name of the template file it is associated with and
1. The required front matter property _title_ with the title to be assigned to the generated document's title tag and
1. The optional front matter property _appendToTarget_ which Trio uses to determine if it should append to or replace the tag in the template that is decorated with the _data-trio-fragment_ attribute with the fragment's content. By assigning true, Trio will append whatever content it finds in the associated fragment to this tag.
1. The front matter property _artists_, which is an array of artists and their relevant data.

Also, please notice that the fragment's markup contains an _unordered list tag_ decorated with the _data-trio-callback_ attribute and that it is assigned the _name of the tag-based callback_ (see below) which is located in the _root/source/callbacks_ folder.


```html
<ul data-trio-callback="artistlistfromfrontmatter"></ul>
```

Notice also that the _file type_ of the tag-based callback is always assumed to be '_.js_' and can be omitted.

Tags decorated with the _data-trio-callback_ attribute direct Trio to call the tag-based callbacks that they name, which in this case is _root/source/callbacks/artistlistfromfrontmatter.js_.


## Create The Tag-Based Callback

In the project's _root/source/callbacks_ folder, create a new __javascript file__ named _artistlistfromfrontmatter.js_ and copy and paste the following into that:

```js
module.exports = ({ $tag, asset }) => {
    // get a reference to the artists array from the fragment's front matter
    const artists = asset.matter.data.artists;
    // sort the list by the artist's name
    artists.sort((a, b) => a.name.localeCompare(b.name)).forEach(artist => {
        // append each artist's name and relevant data to $tag
        $tag.append(`
            <li>${artist.name}</li>
            <ul>
                <li>Medium: ${artist.medium}</li>
                <li>Style: ${artist.style}</li>
            </ul>
        `);
    });
};
```

This _tag-based callback does the following:

1. It accesses the array of artists declared in the fragments front matter using:

```javascript
const artists = asset.matter.data.artists;
```

2. Then sorts the artists array by artist name using:

```javascript
artists.sort((a, b) => a.name.localeCompare(b.name))
```

3. Then appends each artist's data to the tag that was decorated with the _data-trio-callback_ attribute using:

```javascript
forEach(artist => {
    $tag.append(`
        <li>${artist.name}</li>
        <ul>
            <li>Medium: ${artist.medium}</li>
            <li>Style: ${artist.style}</li>
        </ul>
    `);
});
```

### How Trio Calls Your Tag-Based Callbacks

When Trio encounters a tag decorated with the _data-trio-callback_ attribute, it calls the named callback passing it a single object which contains the following properties:

1. $tag: A cheerio wrapper for the tag which was decorated with the data-trio-callback attribute. It can be used to target the tag with dynamic content, such as it was used in this example.
1. $page: A cheerio function. It is equivalent to jQuery's $ and jQuery() functions and can be used to return a collection of matched tags in the composite when you are targeting tags other than $tag.  We will examine _$page_'s usage in a future tutorial in this series on composition.
1. asset: Exposes the metadata specific to the fragment, including its front matter. Its catalogs - relatedArticlesByCategory, relatedArticlesByTag, relatedArticlesByTagFlattened - as well as its other properties can be used to augment your composites with dynamic content.
1. site: Exposes the organized collection of metadata that Trio creates from your project's assets. Its catalogs - frags, articlesCatalog, categoriesCatalog, tagsCatalog, dataCatalog - as well as its other properties can be used to augment your composites with dynamic content. We will examine _site_'s usage in future tutorial in this series on composition.
1. cheerio: A cheerio constructor function that can be used to <a target="_blank" href="https://cheerio.js.org/#loading">load and manipulate dynamic tag structures</a>, such as:

```javascript
const $ = cheerio.load('<h2 class="title">Hello world</h2>');

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

$.html();
//=> <html><head></head><body><h2 class="title welcome">Hello there!</h2></body></html>
```

## Create The Include Project Asset

In the project's _source/includes_ folder, create a new __include file__ named _header.md_ and copy and paste the following into that:

```md
<!--
appendToTarget: true
-->

# Artists Registry
```

Please notice how the above include project asset declares front matter at the very top of the file which defines the optional boolean front matter property __appendToTarget__, which Trio uses to determine if it should append to or replace the tag in the template that is decorated with the data-trio-include="header.md" attribute with the include's content. By assigning true, Trio will append whatever content it finds in the include to this tag.

## Build And Run The Project

Now that we have composed our intended page using a template, a fragment, and an include we are ready to __build__ our site and __render__ the page in the browser. In your terminal application, please run the following commands from the root folder of your project:

```shell
trio build; trio serve
```

If you prefer, you can use the abbreviated forms of these commands instead:

```shell
trio b; trio s
```

The _build_ command instructs Trio to do a one-off build of your site _for development_ and to place the site's generated output into the project's _public/_  folder. The _serve_ command instructs Trio to serve the project's _public/_ folder's content in the browser.

When rendered in the browser the page that you created, _public/index.html_, should look like the following:

<img src="/media/tutorials/composition/codedfromfrontmatter.png" alt="image">

You can also view the content of the generated HTML document, which resides in _public/index.html_, by simply opening it in your editor of choice or by running `cat public/index.html` from the root of your project in the terminal. Let's take a look at it now:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coded Using Front Matter &amp; Tag-based Callback</title>
    <link rel="stylesheet" href="/css/main.css">
</head>

<body>
    <header data-trio-include="header.md">
        <h1 id="artists-registry">Artists Registry</h1>
    </header>
    <main data-trio-fragment>
        <h2>Artists</h2>
        <ul data-trio-callback="artistlistfromfrontmatter">
            <li>Billie Noble</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Post-Impressionism</li>
            </ul>

            <li>Blair Gordonlist</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Pop Art</li>
            </ul>

            <li>Caden Ray</li>
            <ul>
                <li>Medium: Watercolor</li>
                <li>Style: Art Nouveau</li>
            </ul>

            <li>Danni Powell</li>
            <ul>
                <li>Medium: Watercolor</li>
                <li>Style: Pop Art</li>
            </ul>

            <li>Glen Miller</li>
            <ul>
                <li>Medium: Watercolor</li>
                <li>Style: Impressionism</li>
            </ul>

            <li>Kris Jay</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Pop Art</li>
            </ul>

            <li>Riley Webb</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Cubism</li>
            </ul>

            <li>Steff Hammer</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
            </ul>

            <li>Terry Shannon</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
            </ul>

            <li>Vic Christy</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Art Deco</li>
            </ul>
        </ul>
    </main>
</body>

</html>
```

From the above we can see that Trio in fact did as we had requested it to do by appending the fragment's content to the template's _main tag_ that was __decorated__ with the _data-trio-fragment_ attribute and by appending the include's content to the template's _header tag_ that was __decorated__ with the _data-trio-include="header.md"_ attribute.

Also note that because we built the project for development using Trio's _build_ command, Trio preserved all the data-trio-* attributes. If we had instead built the project using Trio's _release_ command, which is used to build your project prior to its release, Trio would have removed all the _data-trio-*_ attributes from the generated pages.

And of course please note that the tag-based callback _root/source/callbacks/artistlistfromfrontmatter.js_ declared by the _&lt;ul&gt;_ tag that is decorated with the _data-trio-callback_ attribute in the fragment

```html
<ul data-trio-callback="artistlistfromfrontmatter"></ul>
```
was called and that it did dynamically generate list items from the artists array defined in the fragment's front matter and appended them as content to the _&lt;ul&gt;_ tag.

### Extra Credit

After each development build of your project, Trio persists most of the metadata that it collects to a file named <em>root/trio.manifest.json</em>.  Please open this file now with your editor to view its contents. Please take note of this file's structure, particularly its top level keys and their associated values and how they relate to the project you created for this tutorial. Can you find the list of artists that you defined in the front matter of this project's fragment? What other keys and values do you see that match those of this tutorial's project?

The cool thing about this file is that you can reference it when you are coding your tag-based callbacks, like when you can't remember where to look for a particular piece of metadata that you are interested in.

Also, please refer to the <a data-trio-link href="/docs/v4/metadata/">Metadata</a> doc page whenever you have a question about some aspect of Trio's collection of metadata.

## Takeaways From This Tutorial

1. Unlike basic page composition, Trio's _advanced page composition allows you to incorporate dynamic content into you site's pages_ via Trio's tag-based callbacks, which can be declared multiple times throughout your project's template, fragment and include project assets.
1. tag-based callbacks are declared by _decorating tags with the data-trio-callback attribute and naming the callback_ which Trio expects to find in your project's _root/source/callbacks_ folder.
1. After having created your composite using basic page composition, Trio then acquires a list of all the tag-based callbacks declared in the composite and, if found, _calls them in the order that they were declared_, passing each callback a _single object_ whose properties expose Trio's _organized collection of metadata_.
1. Having access to the exposed metadata, your tag-based callbacks use _cheerio's selector API to target specific tags in the composite to add dynamic content to_.

## Conclusion

This tutorial examined how you can use Trio's advanced page composition to add _dynamic content contributed by a fragment's front matter_ to your site's HTML documents.

In the next tutorial in this series we will examine how you can add _dynamic content contributed by JSON files located in the root/source/data folder of your project_ to your site's HTML documents.
