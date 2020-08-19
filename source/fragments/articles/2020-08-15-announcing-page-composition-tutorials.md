<!--
template: tutorialpage
title: "A Series Of Tutorials On Page Composition"
appendToTarget: true
category: tutorials
tag: composition
articleTitle: "A Series Of Tutorials On Page Composition"
activeHeaderItem: 3
socialMediaMetaTags:
- "<meta property='og:type' content='article'>"
- "<meta property='og:title' content='A Series Of Tutorials On Page Composition'>"
- "<meta property='og:description' content='Announcing a series of tutorials which will teach you how to compose your site's pages with dynamic content.'>"
- "<meta property='og:url' content='https://gettriossg.com/blog/tutorials/2020/08/15/announcing-page-composition-tutorials/'>"
- "<meta property='og:image' content='https://gettriossg.com/media/trio-social-media-image.png'>"
- "<meta name='twitter:card' content='summary_large_image'>"
- "<meta name='twitter:site' content='@gettriossg'>"
- "<meta name='twitter:creator' content='@jefftschwartz'>"
- "<meta name='twitter:title' content='A Series Of Tutorials On Page Composition'>"
- "<meta name='twitter:description' content='Announcing a series of tutorials which will teach you how to compose your site's pages with dynamic content.'>'"
- <meta name="twitter:image' content='https://gettriossg.com/media/trio-social-media-image.png'>
-->

<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TZ-kKTgtzhc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>

## Page Composition Tutorials

It is almost impossible to imagine a website today that doesn't require additional content beyond its basic HTML to provide the context needed for its web pages.

Lets consider the Bio pages on a portfolio website that showcases the works of numerous artists. As artists come and go their Bio pages are either added, updated or removed from the site. If the site isn't very popular with artists then perhaps maintenance of these pages will be infrequent and could be done manually. But if the site is very popular then these pages might in fact require daily or even more frequent updates and thus a more automated approach to maintaining these pages would be beneficial.

A preferable automated approach would be to provide a mechanism that would generate the artist bios whenever their information, which is maintained in separate files or in individual items within a file, are changed, added and deleted. In fact, such mechanisms already exist in the form of static site generators which, among other things, can easily be programmed to insert data found, for instance, in a JSON file into a document that will eventually be saved to your file system as an HTML file.

As such it shouldn't come as a surprise to you that Trio provides a mechanism to do just that, and to take full advantage of Trio's site generation capabilities you need to understand how Trio _composes_ your site's pages using _metadata_, _collection filter functions_ and _tag-based callbacks_.

_To that end I am very pleased to announce that a series of tutorials will be posted here over the course of the next few weeks which will teach you how to compose your site's pages with dynamic content._

If you would like to be notified when these tutorials are posted here then please consider following _@gettriossg_ on Twitter.

<!-- end -->
