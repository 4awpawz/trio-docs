<!--
template: learnhowto.html
title: Metadata
appendToTarget: true
activeHeaderItem: 2
-->

# Metadata

Trio generates an extensive amount of  metadata while building your project's source folder. During the build process, for example, Trio accumulates data about each page fragment, including their front matter. If the project includes a blog, Trio also generates blog-specific metadata.

Each time Trio builds your project it saves the metadata to a file named source/trio.manifest.json. Being able to actually see all the data makes it easier to reason about how best to use it in your project's JavaScript callbacks and because much of this metadata is organized as lists they are simple to iterate over with JavaScript. Please see the topic <a data-trio-link href="/docs/learn/javascriptcallbacks">JavaScript Callbacks</a> to learn about using metadata in your project's JavaScript callbacks.

__!__ File source/trio.manifest.json is used internally by Trio when serving your project and should not be deleted though it is perfectly acceptable to include it in .gitignore. If it does get deleted for some reason just run either `trio build` or `trio release` to generate it.

Below is a list of the metadata that Trio generates, including their key names and their descriptions:

## `timestamp`

```js
{
    timestamp: "2018-9-25 19:27:50"
}
```

The project's build date and time.

## `buildType`

```js
{
    buildType: "development"
}
```

Indicates the current build type, which can be either "development" or "release".

## `userConfig`

_* trio.json_
```js
{
    userConfig: {
        blogFolderName: "trioblog",
        baseUrl: "/trioiopages"
    }
}
```
    
The content of the project's `trio.json` [configuration](#configuration) file.

## `dataCatalog`

_* source/data/author.json, source/data/fruits.json, source/data/vegies.json_
```js
{
    dataCatalog: {
        author: {
            name: "Jane Doe",
            birthday: "1978-01-14",
            email: "jane@jane.com",
            country: "United States",
            address: "1 East Drive Lane",
            city: "Manchester",
            state: "New Hamshire",
            zip: "00000"
        },
        fruits: ["apples", "pears", "grapes"],
        vegies: ["spinach", "zucchini", "peas"]
    }
}
```

A hash with one key/value pair for each .json file found in the the project's source/data folder. The keys are the names of the individual files and the values are the file's content.


## `frags`

```js
{
    frags: [
        {
            path: "source/fragments/index.html",
            matter: {
                content: "<div class=\"banner\">\n    <img data-trio-link class=\"banner__image\" src=\"/media/triad.jpg\" alt=\"image of triad\">\n</div>\n\n<section class=\"container\">\n    <h1 class=\"page-title\">Everything you always wanted in a static site generator... but less.</h1>\n</section>",
                data: {
                    template: "source/templates/default.html",
                    appendToTarget: true,
                    title: "Welcome to Trio!",
                    activeHeaderItem: 1,
                    callback: "showCurrentPageInHeader.js"
                },
                isEmpty: false,
                excerpt: ""
            },
            id: 13,
            destPath: "public/index.html",
            url: "/"
        },
        .
        .
        .
    ]
}
```

A list with one item for each page fragment that isn't a blog article.

All page fragments, including [blog article related page fragments](#articlescatalog), have the following properties.

### `path`

The page fragment's file path.

### `matter`

The page fragment's YAML front matter.

### `id`

The page fragment's unique id.

### `destPath`

The generated page's destination path.

### `url`

The generated page's url.

## `articlesCount`

```js
{
    articlesCount: 3
}
```

The total number of blog articles.

## `articlesCatalog`

```js
{
    articlesCatalog: [
        {
            path: "source/fragments/blog/articles/2018-08-02-unlockyourimagination.md",
            matter: {
                content: "<p>Esse ea sint magna occaecat occaecat veniam. Dolore ex pariatur ullamco minim dolor laboris ipsum. Laboris cillum esse incididunt est est irure officia ipsum duis sit. Est voluptate eiusmod sit adipisicing aute.</p>\n<!-- end -->\n<p>Exercitation laborum tempor nulla consequat nisi minim consequat magna magna sint ut ut culpa. Id irure dolore veniam deserunt velit sint qui enim id occaecat ipsum. Magna sunt laboris quis ut mollit mollit laborum veniam mollit sunt reprehenderit laboris.</p>\n<p>Velit reprehenderit fugiat Lorem minim non duis exercitation ex. Occaecat consectetur duis duis consequat minim tempor occaecat cupidatat nostrud nulla aliqua. Velit deserunt nostrud cillum labore irure esse duis cupidatat dolor eiusmod. Occaecat quis veniam magna enim Lorem commodo esse ea esse. In quis id laborum dolore laborum magna ullamco. Culpa ex cillum deserunt enim culpa nulla anim elit duis.</p>\n",
                data: {
                    description: "blog article",
                    template: "source/templates/article.html",
                    appendToTarget: true,
                    title: "Unlock Your Imagination",
                    subtitle: "and liberate your mind",
                    image: "chain-key-lock.jpg",
                    activeHeaderItem: 3,
                    callback: [
                        "article.js",
                        "showCurrentPageInHeader.js"
                    ],
                    category: [
                        "web development"
                    ],
                    tag: [
                        "html"
                    ]
                },
                isEmpty: false,
                excerpt: "Esse ea sint magna occaecat occaecat veniam. Dolore ex pariatur ullamco minim dolor laboris ipsum. Laboris cillum esse incididunt est est irure officia ipsum duis sit. Est voluptate eiusmod sit adipisicing aute.\n"
            },
            id: 5,
            destPath: "public/trioblog/Web Development/2018/08/02/unlockyourimagination/index.html",
            url: "/trioblog/Web Development/2018/08/02/unlockyourimagination/",
            articleDate: "2018-08-02",
            nextArticleUrl: "",
            previousArticleUrl: "/trioblog/Web Development/2018/08/01/skyisthelimit/",
            relatedArticlesByTag: [
                {
                    tag: "html",
                    related: [
                        {
                            articleDate: "2018-08-01",
                            url: "/trioblog/Web Development/2018/08/01/skyisthelimit/",
                            title: "The Sky's The Limit",
                            id: 4,
                            excerpt: "Esse ea sint magna occaecat occaecat veniam. Dolore ex pariatur ullamco minim dolor laboris ipsum. Laboris cillum esse incididunt est est irure officia ipsum duis sit. Est voluptate eiusmod sit adipisicing aute.\n"
                        },
                        {
                            articleDate: "2018-07-14",
                            url: "/trioblog/Web Development/Trio/2018/07/14/thepowerofthree/",
                            title: "The Power of Three",
                            id: 3,
                            excerpt: "Esse ea sint magna occaecat occaecat veniam. Dolore ex pariatur ullamco minim dolor laboris ipsum. Laboris cillum esse incididunt est est irure officia ipsum duis sit. Est voluptate eiusmod sit adipisicing aute.\n"
                        }
                    ]
                }
            ],
            relatedArticlesByTagFlattened: [
                {
                    articleDate: "2018-08-01",
                    url: "/trioblog/Web Development/2018/08/01/skyisthelimit/",
                    title: "The Sky's The Limit",
                    id: 4,
                    excerpt: "Esse ea sint magna occaecat occaecat veniam. Dolore ex pariatur ullamco minim dolor laboris ipsum. Laboris cillum esse incididunt est est irure officia ipsum duis sit. Est voluptate eiusmod sit adipisicing aute."
                },
                {
                    articleDate: "2018-07-14",
                    url: "/trioblog/Web Development/Trio/2018/07/14/thepowerofthree/",
                    title: "The Power of Three",
                    id: 3,
                    excerpt: "Esse ea sint magna occaecat occaecat veniam. Dolore ex pariatur ullamco minim dolor laboris ipsum. Laboris cillum esse incididunt est est irure officia ipsum duis sit. Est voluptate eiusmod sit adipisicing aute."
                }
            ],
            relatedArticlesByCategory: {
                category: "web development",
                related: [
                    {
                        articleDate: "2018-08-01",
                        url: "/trioblog/Web Development/2018/08/01/skyisthelimit/",
                        title: "The Sky's The Limit",
                        id: 4,
                        excerpt: "Esse ea sint magna occaecat occaecat veniam. Dolore ex pariatur ullamco minim dolor laboris ipsum. Laboris cillum esse incididunt est est irure officia ipsum duis sit. Est voluptate eiusmod sit adipisicing aute.\n"
                    }
                ]
            }
        },
        .
        .
        .
    ]
}
```

A list whose items contain the metadata for each blog article related page fragment in descending date order.

In addition to the following properties specific to blog article page fragments, blog article related page fragment also have all of the properties that [non blog article page fragments](#frags) have.

### `articleDate`

The posting date of the blog article as `"yyyy-mm-dd"`, which comes from the blog article page fragment's file name.

### `nextArticleUrl`

The URL of the blog article whose posting date immediately precedes (i.e. is newer) this article's posting date in chronological order.

Will be an empty string (i.e. "") if this is the first article in descending chronological order.

### `previousArticleUrl`

The URL of the blog article whose posting date immediately follows (i.e. is older) this article's posting date in chronological order.

Will be an empty string (i.e. "") if this is the last article in descending chronological order.

### `relatedArticlesByTag`

A list of articles related to this article in descending chronological order, grouped by tag.

#### `tag`

The tag shared by all the related articles.

#### `related`

A list of one or more articles which all have the same tag.

##### `articleDate`

The posting date of the related article, which comes from the blog article's page fragment's file name.

##### `url`

The URL of the related article.

##### `title`

The title of the generated page, which comes from the blog article's page frament front matter.

##### `id`

The unique id of the related article.

##### `excerpt`

The related article's excerpt if it has one.

### `relatedArticlesByTagFlattened`

Similar to [relatedArticlesByTag](#relatedarticlesbytag) above, it is a flatenend list of all the articles related to this article in descending chronological order.

### `relatedArticlesByCategory` 

Similar to [relatedArticlesByTag](#relatedarticlesbytag) above, it is a list of articles related to this article in descending chronological order, grouped by category.

## `wipsCount`

```js
{
    wipsCount: 1
}
```

When building for release, reports the total number of ignored work in progress blog articles.

## `wips`

```json
    "wips": [
        "source/fragments/blog/articles/_2018-11-17-mydevenvironment.md"
    ]
```

When building for release, reports the file paths of ignored work in progress blog articles.

## `sortedTagCatalog`

```js
sortedTagCatalog:
[
    {
        tag: "css",
        related: [
            {
                articleDate: "2018-08-01",
                url: "/trioblog/Web%20Development/2018/08/01/skyisthelimit/",
                title: "The Sky's The Limit",
                id: 4,
                excerpt: "Esse ea sint magna occaecat occaecat veniam. Dolore ex pariatur ullamco minim dolor laboris ipsum. Laboris cillum esse incididunt est est irure officia ipsum duis sit. Est voluptate eiusmod sit adipisicing aute.\n"
            },
            {
                articleDate: "2018-07-14",
                url: "/trioblog/Web%20Development/Trio/2018/07/14/thepowerofthree/",
                title: "The Power of Three",
                id: 3,
                excerpt: "Esse ea sint magna occaecat occaecat veniam. Dolore ex pariatur ullamco minim dolor laboris ipsum. Laboris cillum esse incididunt est est irure officia ipsum duis sit. Est voluptate eiusmod sit adipisicing aute.\n"
            }
        ]
    },
    .
    .
    .
]
```

A list whose items contain the metadata for each blog tag in alphabetical order.

#### `tag`

The tag shared by all the related articles.

#### `related`

A list of articles related to this article in descending chronological order, grouped by tag.

##### `articleDate`

The posting date of the related article, which comes from the blog article's page fragment's file name.

##### `url`

The URL of the related article.

##### `title`

The title of the generated page, which comes from the blog article's page frament front matter.

##### `id`

The unique id of the related article.

##### `excerpt`

The related article's excerpt if it has one.

## `catagoriesCatalog`

```js
categoriesCatalog: [
    {
        category: "web development",
        related: [
            {
                articleDate: "2018-08-02",
                url: "/trioblog/Web%20Development/2018/08/02/unlockyourimagination/",
                title: "Unlock Your Imagination",
                id: 5,
                excerpt: "Esse ea sint magna occaecat occaecat veniam. Dolore ex pariatur ullamco minim dolor laboris ipsum. Laboris cillum esse incididunt est est irure officia ipsum duis sit. Est voluptate eiusmod sit adipisicing aute.\n"
            },
            {
                articleDate: "2018-08-01",
                url: "/trioblog/Web%20Development/2018/08/01/skyisthelimit/",
                title: "The Sky's The Limit",
                id: 4,
                excerpt: "Esse ea sint magna occaecat occaecat veniam. Dolore ex pariatur ullamco minim dolor laboris ipsum. Laboris cillum esse incididunt est est irure officia ipsum duis sit. Est voluptate eiusmod sit adipisicing aute.\n"
            }
        ]
    },
    .
    .
    .
]
```

A list whose items contain the metadata for each blog category in alphabetical order.

#### `category`

The category shared by all the related articles.

#### `related`

A list of articles related to this article in descending chronological order, grouped by category.

##### `articleDate`

The posting date of the related areicle, which comes from the blog article's page fragment's file name.

##### `url`

The URL of the related article.

##### `title`

The title of the generated page, which comes from the blog article's page frament front matter.

##### `id`

The unique id of the related article.

##### `excerpt`

The related article's excerpt if it has one.