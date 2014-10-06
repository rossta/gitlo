gitlo
=====

The missing link between GitHub and Trello: a Chrome extension

## Development

The add is built on top of [yeoman](http://yeoman.io/) and the [yeoman-generator-chrome-extension](https://github.com/yeoman/generator-chrome-extension).

Requirements:

* npm, package manager that comes bundled with [node.js][nodej]
* yo, CLI scaffolding tool for yeoman
* grunt, the build tool
* bower, package manager for front-end dependencies

Setup:

Install [node.js][nodejs]. Then setup local repo:

```
$ npm install -g yo bower grunt
$ git clone https://github.com/rossta/gitlo.git && cd gitlo
$ bower install
$ grunt debug
```

Now visit [chrome://extensions](chrome://extensions/). Click "Load unpacked
extension" and select the `app` directory for *gitlo*.

You may instead want to use the [Chrome Apps & Extension Tools App](https://chrome.google.com/webstore/detail/chrome-apps-extensions-de/ohmmkhmmmpcnpikjeljgnaoabkaalbgc?hl=en) from google to manage *gitlo*.

For more info on developing chrome extensions, visit [Getting Started: Building
a Chrome Extension](https://developer.chrome.com/extensions/getstarted)
[nodejs][http://nodejs.org]
