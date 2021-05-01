<!--
template: tutorialpage
title: "Bundling Your Site's Runtime JavaScript"
appendToTarget: true
category: tutorials
tag: tutorial
articleTitle: "Bundling Your Site's Runtime JavaScript"
activeHeaderItem: 3
socialMediaMetaTags:
- "<meta name=\"twitter:card\" content=\"summary_large_image\">"
- "<meta name=\"twitter:site\" content=\"@gettriossg\">"
- "<meta name=\"twitter:creator\" content=\"@jefftschwartz\">"
- "<meta property=\"og:type\" content=\"article\">"
- "<meta property=\"og:url\" content=\"https://gettriossg.com/blog/tutorials/2021/06/02/javascript-bundling/\">"
- "<meta property=\"og:title\" content=\"Bundling Your Site's Runtime JavaScript\">"
- "<META property=\"og:description\" content=\"In this tutorial you will learn how to bundle your site's runtime JavaScript.\">"
- "<meta property=\"og:image\" content=\"https://gettriossg.com/media/javascriptbundling/javascriptbundler.jpg\">"
-->

<img data-trio-link src="/media/tutorials/javascriptbundling/javascriptbundler.jpg" alt="javascript packages">

## Intention Of This Tutorial

This tutorial is based on <a href="https://github.com/4awpawz/bundlewithparcel">this repo</a> and demonstrates how to integrate the bundling of your site's JavaScript runtime into Trio's _build_ and _release_ work flows. While this tutorial uses the bundler <a target="_blank" href="https://parceljs.org/">Parcel</a> to create the JavaScript runtime you are free to use your JavaScript bundler of choice.
<!-- end -->

## Prerequisites

This tutorial assumes that you have Trio installed and that you have a basic knowledge of how to use Trio's project assets to create web pages.

## Steps

1. [Create A New Project](#create-a-new-project)
1. [Install The Project's Dependencies](#install-the-projects-dependencies)
1. [Create Our Project's Build Scripts](#create-our-projects-build-scripts)
1. Create The Site's Default Web Page
    1. [Create The index.md Fragment](#create-the-indexmd-fragment)
    1. [Create The default.html Template](#create-the-defaulthtml-template)
1. Create The JavaScript Application Using ES6 Modules
    1. [Create The jsBundle Folder](#create-the-jsbundle-folder)
    1. [Have Trio Ignore The jsBundle Folder](#have-trio-ignore-the-jsbundle-folder)
    1. [Create The source/jsBundle/itworked.js Module](#create-the-sourcejsbundleitworkedjs-module)
    1. [Create The source/jsBundle/main.js Module](#create-the-sourcejsbundlemainjs-module)
1. Add Additional Resources
    1. [Add The happy-dance.gif Image](#add-the-happy-dancegif-image)
    1. [Add The main.scss File](#add-the-mainscss-file)
1. Build And Run
    1. [Build For Development](#build-for-development)
    1. [Build For Release](#build-for-release)

## Create A New Project

From the terminal please run the following command to create a new bare Trio project

```javascript
trio new <path/to/project>
```

and make it the current working directory.

## Install The Project's Dependencies

From the terminal please run the following command to create the _package.json_ file

```shell
npm init -y
```

and then please run the following command in the  terminal to install the project's development dependencies:

```shell
npm i -D parcel-bundler concurrently
```

## Create Our Project's Build Scripts

Now we will add a few scripts to _package.json_'s _scripts_ property that will be used for building our site for both development and for release.

Using your editor, please open the _package.json_ file and then __replace__ its _"scripts"_ property with the following and then save the file:

```json
"scripts": {
    "parcel-watch": "parcel watch source/jsBundle/main.js --no-cache --out-dir source/scripts --public-url /scripts/",
    "trioBuild": "trio b -I",
    "build": "concurrently --kill-others \"npm run trioBuild\" \"npm run parcel-watch\"",
    "release": "trio r && parcel build source/jsBundle/main.js --no-cache --out-dir release/scripts --public-url /scripts/ && trio c -m && trio s -r"
},
```
The _build_ script is used to build the site for development and the _release_ script is used to build the site for release. If you aren't familiar with the differences between the two <a href="/docs/v6/commandline/#build_your_site">here</a>'s an explanation.

## Create The Site's Default Web Page

### Create The index.md Fragment

In the _source/fragments_ folder create a new file named _index.md_ and then copy and paste the following markdown into it and then save the file:

```md
<!--
template: default
appendToTarget: true
title: Bundling With Parcel
-->
```

### Create The default.html Template

In the _source/templates folder create a new file named _default.html_ and then copy and paste the following markdown into it and then save the file:


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/css/main.css">
    <script defer src="/scripts/main.js"></script>
</head>
<body>
    <main data-trio-fragment>
        <d class="something-went-wrong something-went-wrong--shown">
            <h1>Bundling With Parcel Example</h1>
            <p class="copy copy--error">Whoops! Something went wrong.</p>
        </d>
        <d class="it-worked it-worked--hidden">
            <h1>Bundling With Parcel Example</h1>
            <img src="/media/happy-dance.gif"alt="happy dance gif image">
            <p class="copy">JavaScript bundling worked<span class="exclamation">!</span></p>
    </main>
</body>
</html>

```

## Create The JavaScript Application Using ES6 Modules

### Create The jsBundle Folder

First we must create a folder to host our site's JavaScript bundle. In the project's _source/_ folder please create a new child folder named _jsBundle/_.

### Have Trio Ignore The jsBundle Folder

Now we must instruct Trio to ignore the _jsBundle_ folder so that it wont respond to changes we make inside of it which would interfere with its build and release workflows. Please copy and paste the following into the _trio.json_ file located in the project's root folder and then save the file:

```json
{
    "ignore": "jsBundle"
}
```

### Create The source/jsBundle/itworked.js Module

In your site's _source/jsBundle_ folder please create a new file named _itworked.js_ and then copy and paste the following code into that file and then save the file.

```javascript
export default () => {
    document.getElementsByClassName("something-went-wrong")[0]
        .setAttribute("class","something-went-wrong something-went-wrong--hidden");
    document.getElementsByClassName("it-worked")[0]
        .setAttribute("class", "it-worked it-worked--shown");
};
```

### Create The source/jsBundle/main.js Module

In your site's _source/jsBundle_ folder please create a new file named _main.js_ and then copy and paste the following code into that file and then save the file:

```javascript
import itworked from "./itworked";

itworked();
```

## Add Additional Resources

### Add The happy-dance.gif Image

Please copy the _happy-dance.gif_ image below to your project's source/media folder.

<img src="/media/tutorials/javascriptbundling/happy-dance.gif">

### Add The main.scss File

In your project's _source/scss/_ folder please create a file named _main.scss_ and then copy and paste the following into it and then save the file:

```css
$font-size: 2rem;

main {
    width: 100vw;
}

h1 {
    color: #a03b9d;
    font-size: $font-size;
    text-align: center;
}

img {
    max-width: 30rem;
    min-width: 10rem;
    margin: auto;
    height: auto;
}

.copy {
    color: #edb83a;
    font-weight: bold;
    font-size: $font-size;
    &--error {
        color: #f00;
    }
    text-align: center;
}

.exclamation {
    color: black;
}

.something-went-wrong {
    display: flex;
    flex-flow: column nowrap;
    font-size: $font-size;
    &--hidden {
        display: none;
    }
}

.it-worked {
    display: none;
    &--shown {
        display: flex;
        flex-flow: column nowrap;
    }
}
```

## Build And Run

Please open your terminal and make sure that this project's root folder is the current working directory.

### Build For Development

Please run the following command to build the project for development and serve it in the browser:

```shell
npm run build
```

### Build For Release

Please run the following command to build the project for release and serve it in the browser:

```shell
npm run release
```
