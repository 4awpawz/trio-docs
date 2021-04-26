<!--
template: tutorialpage
title: "Basic Page Composition With Templates, Fragments And Includes"
appendToTarget: true
category: tutorials
tag: tutorial
articleTitle: "Basic Page Composition With Templates, Fragments And Includes"
activeHeaderItem: 3
socialMediaMetaTags:
- "<meta name=\"twitter:card\" content=\"summary_large_image\">"
- "<meta name=\"twitter:site\" content=\"@gettriossg\">"
- "<meta name=\"twitter:creator\" content=\"@jefftschwartz\">"
- "<meta property=\"og:type\" content=\"article\">"
- "<meta property=\"og:url\" content=\"https://gettriossg.com/blog/tutorials/2020/11/16/page-composition-tut-01/\">"
- "<meta property=\"og:title\" content=\"Basic Page Composition With Templates, Fragments And Includes\">"
- "<meta property=\"og:description\" content=\"This tutorial teaches you how to create web pages using Trio's template, fragment and include project assets.\">"
- "<meta property=\"og:image\" content=\"https://gettriossg.com/media/composite.png\">"
-->

<img data-trio-link src="/media/composite.png" alt="a web page composition abstract">

<!-- end -->

## Prerequisites

Before proceeding with this tutorial, please familiarize yourself with Trio's <a data-trio-link href="/docs/v6/coreconcepts/">Core Concepts</a>.

## Intention Of This Tutorial

In this tutorial we will explore Trio's basic page composition. Unlike advanced page composition, which will be the subject of the next tutorial, basic page composition centers around the use of template, fragment and include project assets to compose your HTML documents, and doesn't involve the use of any tag-based callbacks.

Our use case for this tutorial is trivial. We want Trio to generate an HTML page that contains a page header and a list containing the names of artist and their relevant information. If we were to hand code this HTML page, this is what it would look like:

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
            <li>Terry Shannon</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Glen Miller</li>
            <ul>
                <li>Medium: Watercolor</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Kris Jay</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Riley Webb</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Vic Christy</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Caden Ray</li>
            <ul>
                <li>Medium: Watercolor</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Steff Hammer</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Billie Noble</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Danni Powell</li>
            <ul>
                <li>Medium: Watercolor</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Blair Gordonlist</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
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

In the project's _source/templates_ folder, create a new __template file__ named _default.html_ and copy and paste the following markup into that file:

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

In the project's _source/fragments_ folder, create a new __fragment file__ named _index.html_ and copy and paste the following into that:

```html
<!--
template: default
title: Hard Coded In Fragment
appendToTarget: true
-->

<h2>Artists</h2>
<ul>
    <li>Terry Shannon</li>
        <ul>
            <li>Medium: Oil</li>
            <li>Style: Impressionism</li>
        </ul>
    <li>Glen Miller</li>
        <ul>
            <li>Medium: Watercolor</li>
            <li>Style: Impressionism</li>
        </ul>
    <li>Kris Jay</li>
        <ul>
            <li>Medium: Oil</li>
            <li>Style: Impressionism</li>
        </ul>
    <li>Riley Webb</li>
        <ul>
            <li>Medium: Oil</li>
            <li>Style: Impressionism</li>
        </ul>
    <li>Vic Christy</li>
        <ul>
            <li>Medium: Oil</li>
            <li>Style: Impressionism</li>
        </ul>
    <li>Caden Ray</li>
        <ul>
            <li>Medium: Watercolor</li>
            <li>Style: Impressionism</li>
        </ul>
    <li>Steff Hammer</li>
        <ul>
            <li>Medium: Oil</li>
            <li>Style: Impressionism</li>
        </ul>
    <li>Billie Noble</li>
        <ul>
            <li>Medium: Oil</li>
            <li>Style: Impressionism</li>
        </ul>
    <li>Danni Powell</li>
        <ul>
            <li>Medium: Watercolor</li>
            <li>Style: Impressionism</li>
        </ul>
    <li>Blair Gordonlist</li>
        <ul>
            <li>Medium: Oil</li>
            <li>Style: Impressionism</li>
        </ul>
</ul>
```

Please notice how the above fragment project asset declares front matter at the very top of the file, in which it defines:

1. The required front matter property _template_ with the name of the template file it is associated with and
1. The required front matter property _title_ with the title to be assigned to the generated document's title tag and
1. The optional front matter property _appendToTarget_ which Trio uses to determine if it should append to or replace the tag in the template that is decorated with the _data-trio-fragment_ attribute with the fragment's content. By assigning true, Trio will append whatever content it finds in the associated fragment to this tag.

## Create The Include Project Asset

In the project's _source/includes_ folder, create a new __include file__ named _header.md_ and copy and paste the following into that:

```md
<!--
appendToTarget: true
-->

# Artists Registry
```

Please notice how the above include project asset declares front matter at the very top of the file which defines the optional boolean front matter property __appendToTarget__, which Trio uses to determine if it should append to or replace the tag in the template that is decorated with the data-trio-include="header.md" attribute with the include's content. By assigning true, Trio will append whatever content it finds in the fragment to this tag.

## Build And Run The Project

Now that we have composed our intended page using a template and a fragment and an include, we are ready to __build__ our site and __render__ the page in the browser. In your terminal application, please run the following commands from the root folder of your project:

```shell
trio build; trio serve
```

If you prefer, you can use the abbreviated forms of these commands instead:

```shell
trio b; trio s
```

The _build_ command instructs Trio to do a one-off build of your site _for development_ and to place the site's generated output into the project's _public/_  folder. The _serve_ command instructs Trio to serve the project's _public/_ folder's content in the browser.

When rendered in the browser the page that you created, _public/index.html_, should look like the following:

<img src="/media/tutorials/composition/hardcodedinfragment.png" alt="image">

You can also view the content of the generated HTML document, which resides in _public/index.html_, by simply opening it in your editor of choice or by running `cat public/index.html` from the root of your project in the terminal. Let's take a look at it now:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hard Coded In Fragment</title>
    <link rel="stylesheet" href="/css/main.css">
</head>

<body>
    <header data-trio-include="header.md">
        <h1 id="artists-registry">Artists Registry</h1>
    </header>
    <main data-trio-fragment>
        <h2>Artists</h2>
        <ul>
            <li>Terry Shannon</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Glen Miller</li>
            <ul>
                <li>Medium: Watercolor</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Kris Jay</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Riley Webb</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Vic Christy</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Caden Ray</li>
            <ul>
                <li>Medium: Watercolor</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Steff Hammer</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Billie Noble</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Danni Powell</li>
            <ul>
                <li>Medium: Watercolor</li>
                <li>Style: Impressionism</li>
            </ul>
            <li>Blair Gordonlist</li>
            <ul>
                <li>Medium: Oil</li>
                <li>Style: Impressionism</li>
            </ul>
        </ul>
    </main>
</body>

</html>
```

From the above we can see that Trio in fact did as we had requested it to do by appending the fragment's content to the template's _main tag_ that was __decorated__ with the _data-trio-fragment_ attribute and by appending the include's content to the template's _header tag_ that was __decorated__ with the _data-trio-include="header.md"_ attribute.

Also note that because we built the project for development using Trio's _build_ command, Trio preserved all the data-trio-* attributes. If we had instead built the project using Trio's _release_ command, which is used to build your project prior to its release, Trio would have removed all the _data-trio-*_ attributes from the generated pages.

### Extra Credit

Generate the site again but this time either remove the _appendToTarget_ front matter property from the fragment's front matter or set it's value to _false_. Now view the generated _index.html_ file in your project's _public/_ folder. Can you spot the difference in the generated output?

## Takeaways From This Tutorial

1. Trio's web page generation process is called page composition.
1. Each web page that Trio generates and writes to the file system as an _.html_ file is made from (i.e. composed from) numerous project assets.
1. Until Trio actually writes the web page to the file system, it exists purely in the computer's memory and is referred to as a _composite_.
1. At a minimum, every web page that Trio creates must be composed from a single _template_ project asset, and a single _fragment_ project asset, both of which can optionally include one or more _include_ project assets. As this is the most basic form of page composition that Trio provides it is called _basic page composition_.
1. Basic page composition, unlike advanced page composition, doesn't involve any JavaScript; it only involves the _content_ that is contributed by fragment, template, and include project assets and tags decorated with the data-trio-fragment attribute, and tags decorated with the data-trio-include attribute.
1. _template_ project assets are used to provides your web page with its general layout and structure. They may optionally also provide a target tag that Trio will apply the associated fragment's content to. They must always be an _.html_ file and they should include the _!DOCTYPE_ document preamble, the _html_, the _head_ and the _body_ sections typically found in an HTML document.
1. _fragment_ project assets are used to direct Trio to generate a composite from a _template_ project asset. They must always include front matter at the very top of the file. They can optionally contribute their own content to the composite. They may be either an _.html_ or a _.md_ file.
1. _include_ project assets are used to add reusable blocks of content (e.g. headers, footers, etc.) to the composites created from fragment and template project assets. They can optionally include front matter at the very top of the file.
1. There is a _one to one relationship_ between a fragment project asset and a template project asset, meaning that a fragment can only be associated with a single template.
1. There can be a _many to one relationship_ between a single template and multiple fragments, meaning that multiple fragments can be associated with the same template.

## Conclusion

This tutorial examined how you can use Trio's basic page composition to create your site's HTML documents. Basic page composition, while simple to grasp and implement, is limiting in that you can only compose your HTML documents with the contents of your template, fragment and include project assets - it doesn't support augmenting your composites with data you define in fragment front matter or in JSON data files.

In the next set of tutorials in this series we will examine using Trio's advanced page composition to compose your HTML documents with dynamic content found in fragment front matter and in JSON data files, along with implementing tag-based callbacks.
