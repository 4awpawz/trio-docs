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

### Get The Current Version

```shell
$ trio -v|--version
```

### Get General Help

```shell
$ trio -h|--help
```

### Get Command Specific Help

```shell
$ trio -h|--help <command>
```

### Create A New Project

```shell
$ trio n|new [path/to/new/project]
```

### Build Project For Development

```shell
$ trio b|build
``` 
__!__ see [ below ](#building-project-for-development-and-for-release) for the difference between building project for development and for release

### Build Project For Release

```shell
$ trio r|release
``` 
__!__ see [ below ](#building-project-for-development-and-for-release) for the difference between building project for development and for release

### Serve Project

```shell
$ trio -s|--serve
```

### Build Project For Development And Serve It

```shell
$ trio b|build && trio s|serve
```

### Build Project For Release And Serve It

```shell
$ trio r|release && trio s|serve
```

## Building Project For Development And For Release

The table below describes the different actions that Trio takes when building for `development` and building for `release`:

<table class="dev-vs-release-build">
  <thead>
    <tr>
        <th></th> <th>Development</th> <th>Release</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>Ignore "work in progress" blog articles</td> <td><span class="cross">&cross;</td> <td><span class="check">&check;</td>
    </tr>
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
