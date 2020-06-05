# :smile_cat: cara-react :smile_cat:

Disclamer : I am not claiming this is the best way to do things and can certianly be improved upon.

## Overview
- Entirely client-side Javascript.
- Written using advanced Javascript features organised in multiple files and transpiled down to a single compressed file ( a 'bundle' ) that contains code to ensure the script works on as many browsers as possible ( 'shims' ). Doing this yourself is a PITA and will result in an unreadable mess.
- Product is entirely static content (i.e. HTML, JS, CSS and images) that can be hosted eaisly and cheaply. You can host for free directly from your Github repo using [pages](https://pages.github.com/).

## Stack
- IDE - [Visual Studio Code](https://code.visualstudio.com/docs/setup/linux) (latest Ubuntu already has Snap installed for easy installation).
- [Node](https://www.geeksforgeeks.org/installation-of-node-js-on-linux/) - Node is an engine for running Javascript *outside* of a browser. This can be use to make a backend server that is written in Javascript. We will just be using it to run the thing that transpiles our code.
- [NPM](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) - Node Package Manager (NPM) interfaces with online repositories for Javascript dependencies, much like Maven for Java. For [example](https://www.npmjs.com/package/cat-me).
- [Webpack](https://webpack.js.org/) - Webpack is the basis of the 'bundler' that will transform our code. Webpack is written in Javascript and is run by Node. 
- [React](https://reactjs.org/) - React is a Javascript framework (like JQuery) for producing a HTML frontend. It's extreamly popular and has loads of things built on top of it that you can use to make feature-rich front ends eaisly. It has it's own syntax called [JSX](https://reactjs.org/docs/introducing-jsx.html), which mixes HTML tags into Javascript. This JSX will be transpiled into normall Javascript.

## Running this Repo
- Install the IDE, Node and NPM.
- Fork and clone this repo
- In the terminal, navigate to the repo and run
``` npm install ```. This will download all the dependencies used in this example to a local folder in the project folder. When committing, do not commit these dependencies, just your own code.
- Then run ``` npm run start:dev ```. The terminal output should show a successful compilation.
- In the browser, navigate to 'http://localhost:8080/' (or whatever port has been used) to see the output.

## How it works
- The start:dev command starts a server that watches for changes to any of the source javascript files in the project and re-compiles everything when it detects one. This means there's no need to re-compile or even reload the page in the browser after making a change.
- 'js/' - The 'source code' javascript is in the 'js/' folder. This code is what get transpiled and is not actually included in the product website. The product of transpilation is a 'bundle.js' which ends up in the 'dist/' folder.
- 'js/index.js' - This is the 'root' of the transpilation. Other files are picked up via import statements at the top of the file. If a file is never mentioned in the tree of import statements, it will not be included in the bundle.
- 'index.html' - The entry point for the website.
- 'web/' - The 'web/' folder contains all other static content ( CSS, images etc).
- package.json - 'package.json' contains the operating instructions for Node and a list of all the dependencies used by the project. The definition of 'start:dev' lives there.
- 'webpack.config.js' - as it's name suggests, is the configuration for Webpack.
- 'docs/' - this folder is used for hosting the website on Github and contains a copy of the HTML, CSS and bundle. This is the LIVE copy of the site, as in any changes should be tested before copying to this folder and commiting. This folder could be hosted in a different repo, on a different branch or on a totally different platform.

## Also read
- [import/export](https://alligator.io/js/modules-es6/) statements - Imports and exports are used to share code between Javascript modules (files).
- [ES6 syntax](https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6-5fd4a8e50ee2/) - IMO one of the best parts of using transpiled code to built your site is you can save on typing by using all the newest syntax features. In particular read-up on object deconstruction and the spread operator. I would not focus on classes too much, the move in the JS community seems to be towards using pure functions and avoiding classes.

## Deploying your site
- Enable Github pages for your fork by going to settings, scrolling down to pages and selecting to user the 'master/docs' folder.
- Wait a minuite and then navigate to the address shown (e.g. the URL for this repo's pages is [https://jfl110.github.io/cara-react/](https://jfl110.github.io/cara-react/))

## And then...
-  I would recommend using a libary on-top of React to take care of more frontend stuff for you (i.e. spacings, layouts, common widgets). Take a look at the [Bootstrap React implementation](https://react-bootstrap.github.io/).
