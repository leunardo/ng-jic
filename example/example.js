// First we inject ngJic into our ng app
angular.module('example', ['ngJic'])
// Then we inject the service into the controller
.controller('exampleController', function($scope, ngJic) {
    $scope.uploadImg = uploadImg;
    $scope.size = [];
    $scope.compressedSrc;

    /**
     * For further explanation about this example, look at readme.md      
     */
    function uploadImg() {
        let inputImage = document.querySelector('input[type=file]').files[0];
        let uncompressedImg = document.getElementById('uncompressed');
        let compressedImg = document.getElementById('compressed');
        let reader = new FileReader();

        reader.onloadend = () => {
            uncompressedImg.src = reader.result;
            uncompressedImg.onload = () => {
                // And finally, we use ngJic.compress to compress the image.
                // this will return a HTMLImageElement 
                // https://developer.mozilla.org/en/docs/Web/API/HTMLImageElement
                $scope.compressedSrc =
                    ngJic.compress(uncompressedImg, 20).src;

                compressedImg.src = $scope.compressedSrc;

                $scope.size.uncompressed = inputImage.size/1000;
                // https://stackoverflow.com/a/18557601/8277077
                $scope.size.compressed = Math.round(
                    ($scope.compressedSrc.length - 22) * 3/4)/1000;

                $scope.$apply();
            };
        };

        if (inputImage) reader.readAsDataURL(inputImage);
    }
});


