#Website Performance Optimization portfolio project

The objective of this project is to optimize this online portfolio for speed. In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques I've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

The original unoptimized repository is available at  https://github.com/udacity/frontend-nanodegree-mobile-portfolio

##How to run

Download or use git to clone this repository to local, then transfer the entire dest folder to web server document root folder. Then access the URL http://yourserveraddress/dest/.

###Recommended approach

You are recommended to use SimpleHTTPServer if Python has been installed (Mac OS X and Linux should have pre-installed version). Open a terminal window, use cd  command to get in the dest directory and run the following command:

python -m SimpleHTTPServer

After it starts, a web browser window should be jump up. If you don't see the window, then type http://localhost:8000 into web browser address line and press Enter.

##How did I carry out the optimization?

###Step 1: Improve PageSpeed Insights score for index.html

* Removed unnecessary HTML tags
* Rewrite HTML with semantic tags
* Specified attribute media="print" for printing stylesheet file
* Added async attribute to the Google Analytics script
* Relocated external JS file link
* Resized and compressed all images

###Step 2: Improve Frames per Second in pizza.html
On the Pizza page, there are randomly generated pizzas with different locations, when you are scrolling, background pizzas will move left to right. All static pizzas on the page could be resized by changing the slider with options for 'small', 'medium', or 'large'.

####Optimizations in views/pizza.html:

* Removed unnecessary HTML tags
* Updated HTML with semantic tags
* Re-write the navigation menu code
* Inlined CSS file

####Optimizations in views/js/main.js:

* Compressed and resized pizza image (images/pizza.png) and created a small version (pizza-xs.png) for background pizzas
* Replaced querySelector with getElementById
* Replaced querySelectorAll with getElementsByClassName
* Updates in the changePizzaSizes function:
  * created new array outside loop to store all Pizza containers
  * Followed Cam's lecture to change Pizza size values from pixels to percent, and removed unnecessary function
* Updates in the updatePositions function:
  * Created valueArray variable to hold the 5 values in a separate for-loop
  * Cached scrollTop and items.length in variables outside loop
  * Replaced the style.left with the transform attribute and translateX value as recommended in the course video
* Updates in the function for DOMContentLoaded event listener:
  * created variables for the width and height of the viewport
  * Calculated the number of pizzas based on viewport size rather 200, and stored in the new variable backgroundPizzas
  * Cached pizza container in the variable movingContainer outside the for-loop
  * As Cam's suggested, used requestAnimationFrame (updatePositions) to speed performance
* Updates to resolve all warning messages given by JSLint
  * Updated code format
  * Moved all variable declaration outside for-loop
  * Added "use strict" for each function
* Added window.onload function rather than run for-loop without event trigger

####Optimizations in views/css/style.css:

* Added settings to mover class for performance purpose
  * backface-visibility: hidden
  * transform: translateZ(0);
  * transform: translate3d(0,0,0);
* Created nav-menu class to polish the navigation menu
* Removed the minus symbol ahead of "box-sizing: border-box;"

###Step 3: Use the task-runner Grunt
Grunt is a task-runner that for this project was used to: 

* Create and clean the destion folder [clean](https://github.com/gruntjs/grunt-contrib-clean)
* Minify CSS files [cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
* Inline CSS after minifing [string-replace](https://github.com/eruizdechavez/grunt-string-replace)
* Minify JavaScript files [uglify](https://github.com/gruntjs/grunt-contrib-uglify)
* Replace file names with minified file names [string-replace](https://github.com/eruizdechavez/grunt-string-replace)
* Compress images [imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
* Minify HTML files after above tasks [htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin)

####References 
Getting Started with <a href="http://gruntjs.com/getting-started">Grunt</a>.

More <a href="https://github.com/javsalazar/grunt-boilerplate">specific instructions</a> on using Grunt for a Udacity project.

## Optimization Tips and Tricks provided by Udacity
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* [The fewer the downloads, the better](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html)
* [Reduce the size of text](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html)
* [Optimize images](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html)
* [HTTP caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html)

##Contact
[Michael ZHANG](mailto: geek.michael@live.com)
