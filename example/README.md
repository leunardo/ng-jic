## ng-jic example

![image with compressed and uncompressed image to comparison](https://github.com/leunardo/ng-jic/blob/master/example/example.PNG)

In this example I basically made a html with a input file which you can
select an image and it will show you two images:

* Uncompressed image
* Compressed image

There are additional infos like:

* size of both images in kb
* the difference of size between images
* quality set into the example

### Explanation about the function in the controller:

After getting the image of the input, I instanciate a reader, 
and then I set an event after the load end of the reader. This allow me
set what will happen after the reader finish his job reading the file.

After reading, he will set the uncompressed image source to the result he gets. When I set a source to the uncompressed image, I am able to compress it using ngJic. The rest of code is 
just sets of variables to make the view of the example.
