/**
 * ngJIC - angular javascript image compresser
 * based on https://github.com/brunobar79/J-I-C
 * @author Leonardo Alves <github.com/leunardo>
 */

// import angular from 'angular';
angular.module('ngJic', []).factory('ngJic', jicFactory);

let types = ['jpeg', 'png'];

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
     * @param {String} outputFormat (OPTIONAL) the preferred output format
     *  [png, jpeg or jpg(default)]    
     * @return {HTMLImageElement} returns the image compressed
     */
    function _compress(sourceImage, quality, outputFormat = 'jpg') {
        let mimeType;
        let canvas;
        let newImageData;
        let resultImage;

        if (outputFormat === 'jpg')
            mimeType = 'image/jpeg';
        else if (isSupported(outputFormat))
            mimeType = `image/${outputFormat}`;
        else
            throw new SyntaxError('This output format is not supported. ' +
        `Input: '${outputFormat}'. Expected: jpg, jpeg, png`);

        canvas = createCanvas(sourceImage);
        newImageData = canvas.toDataURL(mimeType, quality/100);
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
        canvas.getContext('2d').drawImage(sourceImage, 0, 0);
        return canvas;
    }
    /**
     * Checks if the informated output format is supported 
     * @param {String} outputFormat
     * @return {Boolean} true if it's is supported
     */
    function isSupported(outputFormat) {
        return types.indexOf(outputFormat) >= 0;
    }
}
