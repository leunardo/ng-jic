# ng-jic
angular module for image compression based on J-I-C https://github.com/brunobar79/J-I-C

## How to install it?

* First load angular with cdn or local file. 
* Then you can:
  * NPM:
    `npm intall ng-jic`
  * CDN: 
    `<script src="https://cdn.rawgit.com/leunardo/ng-jic/master/src/ng-jic.js" type="text/javascript"></script>`
    
(I recommend you to use the CDN)

## How to use it?

1. Add ng-Jic to your module:
`angular.module('example', ['ngJic'])`

1. Add the service into your controller:
`app.controller('controller', function($scope, ngJic) {...}`

1. `ngJic.compress(myImage, quality, outputFormat)`

Note that `myImage` **must** be a HTMLImageElement in order to work. This will return you another HTMLImageElement that you can use it to render the image into the DOM or another amazing things you can do with [HTMLImageElement](https://developer.mozilla.org/en/docs/Web/API/HTMLImageElement).
