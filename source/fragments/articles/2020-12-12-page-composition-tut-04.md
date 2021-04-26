<!--
template: tutorialpage
title: "Advanced Page Composition And Collections: Part 1) Tutorial Introduction And Starter Project Setup"
appendToTarget: true
category: tutorials
tag: tutorial
articleTitle: "Advanced Page Composition And Collections: Part 1) Tutorial Introduction And Starter Project Setup"
activeHeaderItem: 3
socialMediaMetaTags:
- "<meta name=\"twitter:card\" content=\"summary_large_image\">"
- "<meta name=\"twitter:site\" content=\"@gettriossg\">"
- "<meta name=\"twitter:creator\" content=\"@jefftschwartz\">"
- "<meta property=\"og:type\" content=\"article\">"
- "<meta property=\"og:url\" content=\"https://gettriossg.com/blog/tutorials/2020/12/12/page-composition-tut-04/\">"
- "<meta property=\"og:title\" content=\"Advanced Page Composition And Collections: Part 1) Tutorial Introduction And Starter Project Setup\">"
- "<meta property=\"og:description\" content=\"In this multipart tutorial you will learn how to use Trio's advanced page composition along with its collections feature to create a catalog of the flags of the world website.\">"
- "<meta property=\"og:image\" content=\"https://gettriossg.com/media/composite.png\">"
-->

<img data-trio-link src="/media/composite.png" alt="a web page composition abstract">

<!-- end -->

## Prerequisites

Before proceeding with this tutorial, please familiarize yourself with Trio's <a data-trio-link href="/docs/v6/coreconcepts/">Core Concepts</a>, <a data-trio-link href="/docs/v6/tagbasedcallbacks/"> Tag-Based Callbacks</a>, <a data-trio-link href="/docs/v6/metadata/">Metadata</a>, and <a data-trio-link href="/docs/v6/collections/">Collections</a>.

## Intention Of This Tutorial

As was stated at the conclusion of the previous tutorial, <a data-trio-link href="/blog/tutorials/2020/12/11/page-composition-tut-03/">Advanced Page Composition With JSON Data</a>, this next multipart tutorial forgoes the trivial and presents a real world use case - a catalog site, one very much like what you might expect from a web store, but in this case its catalog doesn't contain things for sale, but rather it contains images of all the flags of the world along with their relevant information which you are free to explore.

Aptly named "Flags Of The World", the site has a total of 250 pages consisting of:

1. 1 _landing page_ that is created using Trio's advanced page composition (along with the data from the _root/source/data/world.json_ file) that lists all the flags of the world along with their geographic location.
1. 249 _detail pages_ that are generated using Trio's collections feature (along with the data from the same _root/source/data/world.json_ file used to create the landing page) that lists all the relevant information for each flag of the world.

###  Video Demo Of Project

The video below discusses Trio's collection feature and demonstrates the "Flags Of The World" website that this multipart tutorial will teach you how to build.

<div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/E-I9aeiU-xE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## Installing The Starter Project

As a convenience to you, a starter project has been created that already includes all the necessary project assets, including:

1. All 249 root/source/media/flags/128x128/*.png files.
1. The root/source/data/world.json file, which is an array of items sorted in ascending order by "name" where each item contains the following keys and value:
    * "id" - a number, the _unique id_ of the item
    * "name" -  a string, the _geographical location that this items flags pertains_ to, also used to sort the file in ascending "name"  order
    * "alpha2" - a string, the _2 character code_ for the flag and its geographical location
    * "alpha3" - a string, the _3 character code_ for the flag and its geographical location
    * "img" - a string, the path to the flag's _.png_ image residing in the site's media/flags/128x128/ folder
1. All the root/source/sass/*.scss files.

To install the starter project, please open your terminal application, navigate to a folder in which you want to install the starter project and at the command line please enter the following:

```console
git clone https://github.com/4awpawz/fotw-starter-project.git
```

As you will not be permitted to push changes to the upstream repo, you can now delete the starter project's _.git/_ folder. From the root folder of the starter project, please run the following command.

```console
rm -rf .git
```

You can, if you desire, then run

```console
git init
```

from the root folder of the starter project to initialize a new git repository specifically for your starter project.

## Conclusion

With the starter project now installed, you can now proceed to the <a href="">next part</a> of this tutorial.
