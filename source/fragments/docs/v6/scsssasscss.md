<!--
template: docpage
title: SCSS/SASS/CSS - Trio
appendToTarget: true
activeHeaderItem: 2
activeDocIndexItem: 16
socialMediaMetaTags:
- "<meta property=\"og:type\" content=\"article\">"
- "<meta property=\"og:title\" content=\"SCSS/SASS/CSS\">"
- "<meta property=\"og:description\" content=\"SCSS/SASS/CSS\">"
- "<meta property=\"og:url\" content=\"https://gettriossg.com/docs/v6/scsssasscss/\">"
- "<meta property=\"og:image\" content=\"https://gettriossg.com/media/trio-social-media-image.png\">"
- "<meta name=\"twitter:card\" content=\"summary_large_image\">"
- "<meta name=\"twitter:site\" content=\"@gettriossg\">"
- "<meta name=\"twitter:creator\" content=\"@jefftschwartz\">"
-->

# SCSS/SASS/CSS

SCSS, SASS, and CSS are supported.

## .scss and .sass

These files reside in the _root/source/sass_ folder.

When generating your site, Trio compiles your Sass to the _public/css_ or _release/css_ folders with _vendor prefixing_, _minification_, and _CSS source maps_ (please see below) for both development and release builds.

<blockquote class="note-tip">Beginning with Trio v6.0.0 <em>CSS source map file generation</em> is configurable for both <em>development</em> and <em>release</em> builds. By default, Trio will generate CSS source map files for both development and release builds. You can, however, override this default behavior by declaring the following in your <em>trio.json</em> file and setting the <em>development</em> and <em>release</em> properties accordingly:

```json
"sassSourceMaps": {
    "development": [true | false],
    "release": [true | false]
}
```
</blockquote>

## .css

<blockquote class="note-tip">
If you rename your *.css files to *.scss and maintain them in the root/source/sass folder your style sheets can take advantage of Sass build features, such as vendor prefixing, file minification, and CSS map file generation. This is possible because _CSS is a subset of Sass_.
</blockquote>

These files reside in the _root/source/css_ folder.

When generating your site, Trio _copies_ these files to the public/css folder.
