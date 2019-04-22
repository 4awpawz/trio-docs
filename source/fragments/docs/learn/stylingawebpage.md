<!--
title: Permalinks And File Structure
template: learnhowto.html
appendToTarget: true
activeHeaderItem: 2
-->

# Styling A Web Page

<br>

A web page without style isn't much to look at. Lets add some styling to the page we created in <a data-trio-link href="/docs/learn/createawebpage">Create A Web Page</a>.

## CSS Or Sass

Trio supports both plain CSS and Sass, including both the indented and modern Sass syntaxes. Whether you prefer CSS or Sass, indented or modern syntaxes, is of course entirely up to you but for the purpose of this exercise we are going to use Sass and its modern syntax to add some styling to our page.

## 1. Create Our Stylesheet

In the source/sass folder create a new file named _helloworld.scss and using your editor of choice, open it and copy/paste the following into it.

```css
#hello-world {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 2.3rem;
    color: rgb(0, 68, 255);
}

.country-list {
    padding-right: 1rem;
}

.country-list li {
    margin-right: 1.3rem;
    margin-bottom: .4rem;
}

.country-list li:nth-child(odd) .country-list__item {
    color: darkcyan;
    font-weight: bolder;
}

.country-list li:nth-child(even) .country-list__item {
    background-color: #efefef;
    color: darkorange;
    font-weight: bolder;
}

.country-list__item {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1.3rem;
    width: 100%;
    padding: 10px;
    border-radius: 2px;
}
```

In the source/sass folder create another new file named app.scss and copy/paste the following into it.

```css
@import "helloworld";
```

From the project's root folder run the following from the command line to build the project.

```shell
trio build
```

When the build is complete you should see 2 new files in your project's public/css folder - app-map.css.map and app.css.

## 2. Link To The Stylesheet

Now we need to add a link to our stylesheet in our web page. Open the file source/templates/default.html in your editor and add the following to the bottom of the head section

```html
<link rel="stylesheet" href="/css/app.css">
```

which should then look like this:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>title</title>
    <link rel="stylesheet" href="/css/app.css">
</head>
```

## 3. Build And Run

Now lets build and run our website. From the project's root folder run the following from the command line.

```shell
trio build && trio serve
```

After Trio has built and rendered the page in the browser you should see our Hello World page in all its magnificent and styled glory. Yay!

<img data-trio-link src="/media/hello-world-styled.png">

## But I Don't Want To Use Sass

For those who prefer to use plain CSS, you can use one of the following methods. The one you use depends on if you want Trio to generate vendor prefixes for you or not:

### You Want Trio To Generate Vendor Prefixes
Since CSS is fully compatible with Sass, just develop you CSS in the source/sass folder but use the `.scss` file extension for your CSS files instead of `.css`.

### You Don't Want Trio To Generate Vendor Prefixes
Develop your CSS in the source/css folder and Trio will copy its content to public/css whenever the project is built.

