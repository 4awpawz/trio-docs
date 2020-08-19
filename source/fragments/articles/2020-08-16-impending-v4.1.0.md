<!--
template: articlepage
title: "What's Coming In Trio v4.1.0"
appendToTarget: true
category: releases
tag: metadata
articleTitle: "What's Coming In Trio v4.1.0"
activeHeaderItem: 3
socialMediaMetaTags:
- "<meta property='og:type' content='article'>"
- "<meta property='og:title' content='What's Coming In Trio v4.1.0'>"
- "<meta property='og:description' content='While you are enjoying the recently released Trio v4.0.0 we want you to know that Trio v4.1.0 is already in the testing phase and will be released shortly.'>"
- "<meta property='og:url' content='https://gettriossg.com/blog/releases/2020/08/16/impending-v4.1.0/'>"
- "<meta property='og:image' content='https://gettriossg.com/media/trio-social-media-image.png'>"
- "<meta name='twitter:card' content='summary_large_image'>"
- "<meta name='twitter:site' content='@gettriossg'>"
- "<meta name='twitter:creator' content='@jefftschwartz'>"
- "<meta name='twitter:title' content='What's Coming In Trio v4.1.0'>"
- "<meta name='twitter:description' content='While you are enjoying the recently released Trio v4.0.0 we want you to know that Trio v4.1.0 is already in the testing phase and will be released shortly.'>"
- "<meta name='twitter:image' content='https://gettriossg.com/media/trio-social-media-image.png'>"
-->

While you are enjoying the recently released Trio v4.0.0 we want you to know that Trio _v4.1.0_ is already in the testing phase and will be released shortly.

Although it wasn't explicitly stated in the documentation, tag-based callbacks that are declared on tags that are replaced by an include's or a fragment's content are never registered and therefore never called. _Trio V4.1.0 corrects this omission and now supports tag-based callbacks on these tags_.

Support for these callbacks will allows you to directly target these tags in your tag-based callbacks using the callback's _$tag_ parameter.

Please note that this new behavior doesn't impact how Trio outputs these tags for development and release builds. As always, when building for development, Trio will still comment out these tags in the generated HTML document, and when building for release, Trio will not output these tags in the generated HTML document.

If you would like to be notified when Trio v4.1.0 drops then please consider following _@gettriossg_ on Twitter.

<!-- end -->
