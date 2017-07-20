/**
 * ngJIC - angular javascript image compresser
 * based on https://github.com/brunobar79/J-I-C
 * @author Leonardo Alves <github.com/leunardo>
 */

// import angular from 'angular';
angular.module('ngJic', []).factory('ngJic', jicFactory);

/**
 * @return {Function} function to compress the desired image
 */
function jicFactory() {
    return {
        compress: _compress,
    };

    /**
     * 
     * @param {HTMLImageElement} sourceImage the source image object
     * @param {Number} quality the quality to the outputed img (0 to 100)  
     * @param {String} outputFormat the preferred output format (jpg or png)
     * @return {HTMLImageElement} returns the image compressed
     */
    function _compress(sourceImage, quality, outputFormat = 'jpg') {
        let mimeType;
        let canvas;
        let newImageData;
        let resultImage;

        if (outputFormat === 'jpg')
            mimeType = 'image/jpg';
        else
            mimeType = 'image/png';

        canvas = createCanvas(sourceImage);
        newImageData = canvas.toDataUrl(mimeType, Math.floor(quality/100));

        resultImage = new Image();
        resultImage.src = newImageData;

        return resultImage;
    }

    /**      
     * @param {HTMLImageElement} sourceImage the source image object
     * @return {HTMLCanvasElement} the canvas used to compress the image
     */
    function createCanvas(sourceImage) {
        let canvas = document.createElement('canvas');
        canvas.width = sourceImage.width;
        canvas.height = sourceImage.height;
        return canvas;
    }
}
