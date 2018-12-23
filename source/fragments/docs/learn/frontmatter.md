<!--
title: Front Matter
template: learnhowto.html
appendToTarget: true
activeHeaderItem: 2
callback: showCurrentPageInHeader.js
-->

# Front Matter

Trio projects make extensive use of YAML front matter when composing web pages. You can define your own custom front matter properties to build out your web pages and Trio has several front matter properties predefined for you to use as well.

## Front Matter Example

Below is an example of a page fragment with front matter and content

```yaml
<!--
template: default.html
appendToTarget: true
title: About
activeHeaderItem: 4
callback: showCurrentPageInHeader.js
-->
```

```html
<div class="banner">
    <img data-trio-link class="banner__image" src="/media/mist-niagara-falls-river.jpg" alt="image of blog">
</div>

<section class="container">
    <h1 class="page-title">About</h1>
</section>`
```

and below is a JavaScript representation of that fragment's front matter.

```js
matter: {
    content: "<div class=\"banner\">\n    <img data-trio-link class=\"banner__image\" src=\"/media/mist-niagara-falls-river.jpg\" alt=\"image of blog\">\n</div>\n\n<section class=\"container\">\n    <h1 class=\"page-title\">About</h1>\n</section>",
    data: {
        template: "source/templates/default.html",
        appendToTarget: true,
        title: "About",
        activeHeaderItem: 4,
        callback: "showCurrentPageInHeader.js"
    },
    isEmpty: false,
    excerpt: ""
}
```

__!__ Trio uses the resilient and performant <a href="https://www.npmjs.com/package/gray-matter" target="_blank">gray-matter</a> library to implement its front matter support. If you aren't already familiar with front matter you are urged to follow the link to this library and read its excellent documentation.

__!__ Trio uses the open and close HTML comment tags (i.e. &lt;!--, --&gt;) as YAML front matter open and close delimiters, so front matter will not create formatting issues in your .html and .md files.

## Front Matter Properties Predefined By Trio

Trio has several front matter properties predefined that can be used in includes and page fragments. Their usage is described below.

### `template`

```YAML
<!--
template: default.html
-->
```

value type: a `string`

context: page fragments only

required: yes

It is used to associate a page template file with this page fragment.

### `title`

```YAML
<!--
title: About
-->
```

value type: a `string`

context: page fragments only

required: yes

It is used to set the value of the generated page's title tag.

__!__ _You can also use the title property for h1 tags in your pages._

### `appendToTarget`

```YAML
<!--
appendToTarget: true
-->
```

value type: a `boolean`

context: includes and page fragments

required: no

When used in an include and if set to `true` then Trio will append the include file's content to the html tag in the associated page template that has the `data-trio-include` attribute. If set to `false` or if the property isn't declared then Trio replaces the html tag in the associated page template that has the `data-trio-include` attribute with the include file's content.

When used in a page fragment and if set to `true` then Trio will append the page fragment's content to the html tag in the associated page template that has the `data-trio-fragment` attribute. If set to `false` or if the property isn't declared then Trio replaces the html tag in the associated page template that has the `data-trio-fragment` attribute with the page fragment's content.

### `callback`

```YAML
<!--
callback:
  - article.js
  - showCurrentPageInHeader.js
-->
```

value type: a `single string` or an `array of strings`

context: includes and page fragments

required: no

It is used to declare one or more names of JavaScript modules that Trio will synchronously call. For more information see <a data-trio-link href="/docs/learn/javascriptcallbacks">JavaScript Callbacks</a>.

### `tag`

```YAML
<!--
tag:
  - javascript
  - html
  - css
-->
```

value type: a `single string` or an `array of strings`

context: blog article page fragments only

required: no

It is used to assign one or more tags to this blog article.

### `category`

```YAML
<!--
category:
  - Web Development
  - Trio
-->
```

value type: a `single string` or an `array of strings`

context: blog article page fragments only

required: no

It is used to assign one or more categories to this blog article.

### `forTag`

```YAML
<!--
forTag: css
-->
```

value type: a `string`

context: blog tag page fragments only

required: yes

It is used to identify the blog tag that this page fragment is associated with.

### `forCategory`

```YAML
<!--
forCategory:
  - web development
  - trio
-->
```

value type: a `single string` or an `array of strings`

context: blog category page fragments only

required: yes

It is used to identify the blog categories that this page fragment is associated with.

### Excerpts

```YAML
<!--
.
.
.
-->
This is an excerpt.
<!-- end -->
This is the rest of the content.
```

You can explicitly declare a part of an include or page fragment's content that directly follows front matter as an excerpt by using the separator `<-- end -->`.
