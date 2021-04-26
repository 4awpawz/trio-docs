<!--
template: tutorialpage
title: "Advanced Page Composition And Collections: Part 2) Main Catalog Page"
appendToTarget: true
category: tutorials
tag: tutorial
articleTitle: "Advanced Page Composition And Collections: Part 2) Main Catalog Page"
activeHeaderItem: 3
socialMediaMetaTags:
- "<meta name=\"twitter:card\" content=\"summary_large_image\">"
- "<meta name=\"twitter:site\" content=\"@gettriossg\">"
- "<meta name=\"twitter:creator\" content=\"@jefftschwartz\">"
- "<meta property=\"og:type\" content=\"article\">"
- "<meta property=\"og:url\" content=\"https://gettriossg.com/blog/tutorials/2020/12/16/page-composition-tut-05/\">"
- "<meta property=\"og:title\" content=\"Advanced Page Composition And Collections: Part 2) Main Catalog Page\">"
- "<meta property=\"og:description\" content=\"In this multipart tutorial you will learn how to use Trio's advanced page composition along with its collections feature to create a catalog of the flags of the world website.\">"
- "<meta property=\"og:image\" content=\"https://gettriossg.com/media/composite.png\">"
-->

<img data-trio-link src="/media/composite.png" alt="a web page composition abstract">

<!-- end -->

## Prerequisites

Before proceeding with this tutorial, please familiarize yourself with Trio's <a data-trio-link href="/docs/v6/coreconcepts/">Core Concepts</a>, <a data-trio-link href="/docs/v6/tagbasedcallbacks/"> Tag-Based Callbacks</a>, <a data-trio-link href="/docs/v6/metadata/">Metadata</a>, and <a data-trio-link href="/docs/v6/collections/">Collections</a>.

Also, if you haven't already installed this tutorial's starter project then please follow the instructions given in the <a data-trio-link href="/blog/tutorials/2020/12/12/page-composition-tut-04/">Advanced Page Composition And Collections: Part 1) Tutorial Introduction And Starter Project Setup</a> tutorial.

## Intention Of This Tutorial

In this tutorial we will use what we have already learned about Trio's _advanced page composition_ to create the landing page for our Flags Of The World website, which will list each flag of the world along with the geographical location that it pertains to.

## Create The Template Project Asset

In the project's _root/source/templates_ folder, first delete the _.gitkeep_ file, and then create a new __template file__ named _catalog.html_ and copy and paste the following markup into that file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../../css/main.css">
</head>
<body>
    <main class="catalog">
        <h1 class="catalog__page-title">Flags Of The World</h1>
        <ul class="catalog__list" data-trio-callback="catalog"></ul>
    </main>
</body>
</html>
```

Please notice that the above template project asset doesn't contains a tag that is decorated with the _data-trio-fragment_ attribute. That is because the fragment that will be associated with this template (see below) will not be contributing any content of its own into the composite. Instead, the tag-based callback that is declared in this template's unordered list _&lt;ul&gt;_ tag will be solely responsible for this composite's content, which it will dynamically generate using the data found in the _root/source/data/world.json_ file and which it will append to the template's unordered list tag.


## Create The Fragment Project Asset

In the project's _root/source/fragments_ folder, first delete the _.gitkeep_ file, and then create a new __fragment file__ named _index.html_ and copy and paste the following into that:

```html
<!--
template: catalog
title: Home | Flags Of The World
-->
```

Please notice how the above fragment project asset declares front matter at the very top of the file, in which it defines:

1. The required front matter property _template_ with the name of the template file it is associated with and
1. The required front matter property _title_ with the title to be assigned to the generated document's title tag and

Also, please note that fragment project asset's front matter does not define the optional front matter property _appendToTarget_ because the fragment is not contributing any content of its own to the composite.

And finally, please notice that though this fragment has no content of its own to contribute to the composite it is still required because, as we learned in the tutorial about <a data-trio-link href="/blog/tutorials/2020/11/16/page-composition-tut-01/">basic page composition</a>, every page that Trio generates must be defined by a project fragment asset and a project template asset.

## The JSON File

In the starter project's _root/source/data_ folder you will find the _world.json_ file, which is an array of 249 items which contain the data for each flag of the world. The following is only a very small sample of the actual file:

```JSON
[
{"id":4,"name":"Afghanistan","alpha2":"af","alpha3":"afg","img":"af.png"},
{"id":248,"name":"Åland Islands","alpha2":"ax","alpha3":"ala","img":"ax.png"},
{"id":8,"name":"Albania","alpha2":"al","alpha3":"alb","img":"al.png"},
{"id":12,"name":"Algeria","alpha2":"dz","alpha3":"dza","img":"dz.png"},
.
.
.
]
```

The following describes the key: value pairs of the items in the file:

* "id" - a number, the _unique id_ of the item
* "name" - a string, the _geographical location that this items flags pertains_ to, also used to sort the file in ascending "name"  order
* "alpha2" - a string, the _2 character code_ for the flag and its geographical location
* "alpha3" - a string, the _3 character code_ for the flag and its geographical location
* "img" - a string, the path to the flag's _.png_ image residing in the site's media/flags/128x128/ folder

## Create The Tag-Based Callback

In the project's _root/source/callbacks_ folder, first delete the _.gitkeep_ file, and then create a new __javascript file__ named _catalog.js_ and copy and paste the following into that:

```js
/*
dataDependency: world
*/

module.exports = ({ $tag, site }) => {
    const size = "128x128";
    site.dataCatalog.world.forEach(item => {
        $tag.append(`
            <li class="catalog__list-item">
                <img src="media/flags/${size}/${item.img}" alt="${item.name} flag">
                <a class="catalog__list-item-link" href="/country/${item.name.toLowerCase()}/">
                    <p class="catalog__list-item-name">${item.name}</p>
                </a>
            </li>
        `);
    });
};
```

This _tag-based callback_ does the following:

1. It iterates over the items in the _root/source/data/world.json_ file using:

```javascript
site.dataCatalog.world.forEach(item => {
```

2. Then appends each item's data to the tag in the template project asset that was decorated with the data-trio-callback tag:

```javascript
$tag.append(`
    <li class="catalog__list-item">
        <img src="media/flags/${size}/${item.img}" alt="${item.name} flag">
        <a class="catalog__list-item-link" href="/country/${item.name.toLowerCase()}/">
            <p class="catalog__list-item-name">${item.name}</p>
        </a>
    </li>
`);
```

## Build And Run The Project

Now that we have composed our intended page using a template, a fragment, data from a JSON file, and a tag-based callback we are ready to __build__ our site and __render__ the page in the browser. In your terminal application, please run the following commands from the root folder of your project:

```shell
trio build; trio serve
```

If you prefer, you can use the abbreviated forms of these commands instead:

```shell
trio b; trio s
```

The _build_ command instructs Trio to do a one-off build of your site _for development_ and to place the site's generated output into the project's _public/_ folder. The _serve_ command instructs Trio to serve the project's _public/_ folder's content in the browser.

When _public/index.html_, the landing page for the Flags Of The World website, is rendered in the browser it should look like the following:

<img data-trio-link src="/media/tutorials/composition/fotwlandingpage.png" alt="image of Flags Of The World landing page">

While the page is rendered in your browser please scroll through the contents of the landing page. Please note that the links to the detail flag pages are broken because the detail flag pages aren't implemented yet but they will be implemented in the next tutorial.

You can also view the content of the generated HTML document, which resides in _public/index.html_, by simply opening it in your editor of choice or by running `cat public/index.html` from the root of your project in the terminal. Let's take a look at it now:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home | Flags Of The World</title>
    <link rel="stylesheet" href="../../css/main.css">
</head>

<body>
    <main class="catalog">
        <h1 class="catalog__page-title">Flags Of The World</h1>
        <ul class="catalog__list" data-trio-callback="catalog">
            <li class="catalog__list-item">
                <img src="media/flags/128x128/af.png" alt="Afghanistan flag">
                <a class="catalog__list-item-link" href="/country/afghanistan/">
                    <p class="catalog__list-item-name">Afghanistan</p>
                </a>
            </li>

            <li class="catalog__list-item">
                <img src="media/flags/128x128/ax.png" alt="&#xC5;land Islands flag">
                <a class="catalog__list-item-link" href="/country/&#xE5;land islands/">
                    <p class="catalog__list-item-name">&#xC5;land Islands</p>
                </a>
            </li>

            <li class="catalog__list-item">
                <img src="media/flags/128x128/al.png" alt="Albania flag">
                <a class="catalog__list-item-link" href="/country/albania/">
                    <p class="catalog__list-item-name">Albania</p>
                </a>
            </li>

            <li class="catalog__list-item">
                <img src="media/flags/128x128/dz.png" alt="Algeria flag">
                <a class="catalog__list-item-link" href="/country/algeria/">
                    <p class="catalog__list-item-name">Algeria</p>
                </a>
            </li>
            .
            .
            .
        </ul>
    </main>
</body>

</html>
```

From the above we can see that the tag-based callback _root/source/callbacks/catalog.js_ declared by the _&lt;ul&gt;_ tag that is decorated with the _data-trio-callback_ attribute in the template

```html
<ul class="catalog__list" data-trio-callback="catalog"></ul>
```
was called and that it did dynamically generate the list items from the _root/source/data/world.json_ file and appended them as content to the _&lt;ul&gt;_ tag.

## Conclusion

This tutorial examined how using Trio's advanced page composition we can add _dynamic content contributed by a JSON file located in the root/source/data folder_ to your site's HTML documents.

In the next tutorial in this series we will explore Trio's _collections_ feature and use it to generate each of the 249 detail flag pages for us.
