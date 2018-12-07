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
__!__ see [ below ](#building-project-for-development-vs-for-release) for the difference between building project for development and for release

### Build project for release

```shell
$ trio r|release
``` 
__!__ see [ below ](#building-project-for-development-vs-for-release) for the difference between building project for development and for release

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

## Building project for development vs. for release

The below table describes the different actions Trio takes when building for `development` and building for `release`:

<table class="dev-vs-release-build">
  <thead>
    <tr>
        <th></th> <th>development</th> <th>release</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>Beautify HTML</td> <td><span class="check">&check;</td> <td><span class="check">&check;</td>
    </tr>
    <tr>
        <td>Generate CSS Vendor Prefixes</td> <td><span class="check">&check;</td> <td><span class="check">&check;</td>
    </tr>
    <tr>
        <td>Generate CSS Map</td> <td><span class="check">&check;</td> <td><span class="cross">&cross;</td>
    </tr>
    <tr>
        <td>Remove data-trio-* Attributes</td> <td><span class="cross">&cross;</td> <td><span class="check">&check;</td>
    </tr>
    <tr>
        <td>Remove HTML Comments</td> <td><span class="cross">&cross;</td> <td><span class="check">&check;</td>
    </tr>
    <tr>
        <td>Prefix URLS</td> <td><span class="cross">&cross;</td> <td><span class="check">&check;</td>
    </tr>
    <tr>
        <td>Cache Bust Files</td> <td><span class="cross">&cross;</td> <td><span class="check">&check;</td>
    </tr>
  </tbody>
</table>
