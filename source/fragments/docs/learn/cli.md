<!--
title: Using The Command Line
template: learnhowto.html
appendToTarget: true
activeHeaderItem: 2
callback: showCurrentPageInHeader.js
-->

# Using The Command Line

<img data-trio-link src="/media/terminal-general-help.png">

While developing your web site you will frequently engage with the command line to get things done. Below are all the commands supported by the Trio CLI.

## Commands

### Get the current version

```shell
$ trio -v|--version
```

### Get general help

```shell
$ trio -h|--help
```

### Get command specific help

```shell
$ trio -h|--help <command>
```

### Create a new project

```shell
$ trio n|new [path/to/new/project]
```

### Build project for development

```shell
$ trio b|build
``` 

### Build project for release

```shell
$ trio r|release
``` 

When building your project for release, Trio performs the following additional steps:

* Prefixes all URLs found in HTML tags that have a `data-trio-link` data attribute with the value assigned to the baseUrl property found in the source/trio.json configuration file.

* Removes all `data-trio-*` data attributes from the generated markup.

* Removes all HTML comments from the generated markup.

* Cache busts the generated files in place after they have been saved to the public folder.


### Serve project

```shell
$ trio -s|--serve
```

### Build project for development and serve it

```shell
$ trio b|build && trio s|serve
```

### Build project for release and serve it

```shell
$ trio r|release && trio s|serve
```