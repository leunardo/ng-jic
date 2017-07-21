# ng-jic
angular module for image compression based on J-I-C https://github.com/brunobar79/J-I-C

## How to install it?

* First load angular with cdn or local file. 
* Then you can:
  * NPM (outdated):
  
    `npm intall ng-jic`
  * CDN: 
  
**minified**:
   
   ``<script src="https://cdn.rawgit.com/leunardo/ng-jic/master/src/ng-jic.min.js" type="text/javascript"></script>
   ``
   
**development**: 
   
   ``<script src="https://cdn.rawgit.com/leunardo/ng-jic/master/src/ng-jic.js" type="text/javascript"></script>``
    


## How to use it?

1. Add ng-Jic to your module:
`angular.module('example', ['ngJic'])`

1. Add the service into your controller:
`app.controller('controller', function($scope, ngJic) {...}`

1. `ngJic.compress(myImage, quality, outputFormat?)`

*? indicates optional*

**The accepted output formats currently are: `jpg` (converted to `jpeg` anyway), `jpeg` and `png` due to a limitation on canvas.** See [this](https://kangax.github.io/jstests/toDataUrl_mime_type_test/)

Note that `myImage` **must** be a HTMLImageElement in order to work. This will return you another HTMLImageElement that you can use it to render the image into the DOM or another amazing things you can do with [HTMLImageElement](https://developer.mozilla.org/en/docs/Web/API/HTMLImageElement).
