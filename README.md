# :smile_cat: cara-react :smile_cat:

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
