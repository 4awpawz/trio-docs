<!--
template: learnhowto.html
title: JavaScript Callbacks
appendToTarget: true
activeHeaderItem: 2
callback: showCurrentPageInHeader.js
-->

# JavaScript Callbacks

__!__ Please review <a data-trio-link href="/docs/learn/metadata">Metadata</a> before continuing with this guide.

Unlike other static site generators that require you to pepper your markup with template tags, Trio lets you keep your markup clean and use JavaScript along with <a href=" https://github.com/cheeriojs/cheerio" target="_blank">cheerio</a>, a JavaScript implementation of core jQuery designed specifically for the server, to compose web pages.

The ability to compose web pages using JavaScript and the extensive collection of metadata that Trio generates is certainly one of Trio's best features, especially for those of us who love working with JavaScript. 

__!__ Please see <a data-trio-link href="/docs/learn/createawebpage">Create A Web Page</a> for a hands 
on exercise that includes using JavaScript and metadata to compose a web page.

## Declaring JavaScript Callbacks In Front Matter

Trio checks every include and page fragment associated with a composite for callbacks declared in their front matter. The following shows how to declare a single callback

```YAML
<!--
callback: someCallback
-->
```
and the following shows how to declare multiple callbacks


```YAML
<!--
callback:
- someCallback
- someOtherCallback
-->
```

## JavaScript Callback Modules And The Context Argument

Trio expects JavaScript callbacks to export a single function, not an object. For each callback declared in include or page fragment front matter, Trio will require it and then synchronously call its exported function, passing it a single argument called context.

The context argument that Trio passes to callbacks declared in include front matter has 4 properties as described below

```javascript
{
    $, // a cheerio object that wraps the include
    include, // the metadata associated with the include, including its front matter
    site, // all the metadata Trio has generated
    cheerio // a cheerio constructor should you need to create new cheerio objects
}
```

and could be declared as follows:

```javascript
module.exports = context => {...};
```

We can apply destructuring to context to access its properties

```javascript
module.exports = ({ $, include, site, cheerio }) => {...};
```

or, if you prefer, this style:

```javascript
module.exports = context => {
    const { $, include, site, cheerio } = context;
    ...
};
```

The context argument that Trio passes to callbacks declared in page fragment front matter has 4 properties as described below

```javascript
{
    $, // a cheerio object that wraps the composite (i.e. include, page fragment and page template)
    page, // the metadata associated with the composite's page fragment, including its front matter
    site, // all the metadata Trio has generated
    cheerio // the cheerio constructor should you need to construct new cheerio objects
}
```

and could be declared as follows:

```javascript
module.exports = context => {...};
```

We can apply destructuring to context to access its properties

```javascript
module.exports = ({ $, page, site, cheerio }) => {...};
```

or, if you prefer, this style:

```javascript
module.exports = context => {
    const { $, page, site, cheerio } = context;
    ...
};
```
