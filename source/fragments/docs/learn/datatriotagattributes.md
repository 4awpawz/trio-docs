<!--
template: learnhowto.html
title: data-trio-* Tag Attributes
appendToTarget: true
activeHeaderItem: 2
callback: showCurrentPageInHeader.js
-->

# data-trio-* Tag Attributes

Trio recognizes numerous *data attributes* in HTML tags that begin with `data-trio-`. The presence of these attributes instruct Trio to take unique actions according to each specific data attribute.

Below is a complete list of these attributes along with their descriptions.

## `data-trio-fragment`

```html
<main data-trio-fragment></main>
```

This attribute is used in page templates and instructs Trio to target this HTML tag when creating the composite consisting of the page fragment's content and this page template's content.

__!__ _data-trio-fragment can be omitted if the page template is designed to be used by page fragments that do not contribute content._

By default, Trio replaces the HTML tag with the content from the page fragment. To append the content to this HTML tag, declare `appendToTarget: true` in your page fragment's front matter. For more information see <a data-trio-link href="/docs/learn/frontmatter/#appendtotarget">appendToTarget</a>.

## `data-trio-include`

```html
<header data-trio-include="header.html"></header>
```

This attribute, which can be used in page fragments and page templates, instructs Trio to target this HTML tag when merging the specified include file's content.

By default, Trio replaces the HTML tag with the content from the include file. To append the content to this HTML tag, declare `appendToTarget: true` in your include file front matter. For more information see <a data-trio-link href="/docs/learn/frontmatter/#appendtotarget">appendToTarget</a>.

### Static vs Dynamic Includes

Trio supports both `static` and `dynamic` include file declarations. Static include file declarations hard code the include file's name. Dynamic include file declarations use one level of indirection to resolve the include file's name.

#### Static Include File Declaration

To statically declare an include file in a page fragment or page template, add the data attribute `data-trio-include` to an HTML tag and assign its value the name of the include file, including its file type of either .md or .html, as its value:

```html
<header data-trio-include="header.html"></header>
```

#### Dynamic Include File Declaration

To dynamically declare an include file in a page fragment or page template, add the data attribute `data-trio-include` to an HTML tag and assign its value the name of a `front matter property` that Trio expects to resolve to the name of an include file, including its file type of either .md or .html.

Dynamic includes are useful in those situations where a page template is associated with more than one page fragment and each page fragment contributes a different include file.

For example, a page template named `default.html` is associated with two page fragments and in its content dynamically declares an include file as follows:

```html
<header data-trio-include="header"></header>
```

One of the page fragments associated with the page template has the following properties in its front matter:

```YAML
<!--
template: default.html
header: simpleheader.html
-->
```

The other page fragment associated with the page template has the following properties in its front matter:

```YAML
<!--
template: default.html
header: complexheader.html
-->
```

Both page fragments are associated with the same page template yet each page fragment is including a different include file.

## `data-trio-link`

```html
<link data-trio-link rel="stylesheet" href="/css/style.css">

<a data-trio-link href="/">

<a data-trio-link href="/about">

<img data-trio-link src="/media/mist-niagara-falls-river.jpg">
```

This attribute, which can be used in includes, page fragments and page templates, instructs Trio to prepend a *base url* to this tag's `src` or `href` attribute's value when you run a *release build*. You declare your site's base url in your project's `root/trio.json` configuration file.

__!__ Some static site hosting services, such as Github for example, may require this.

For example, if you declare `baseUrl` in your root/trio.json configuration file as follows

```json
{
    "baseUrl": "/xyz",
}
```

then when you run a release build (i.e. `trio release|r`), Trio will generate the following:

```html
<link rel="stylesheet" href="/xyz/css/style.css">

<a href="/xyz">

<a href="/xyz/about">

<img src="/xyz/media/mist-niagara-falls-river.jpg">
```