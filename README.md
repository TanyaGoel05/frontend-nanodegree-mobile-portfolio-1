##Website Performance Optimization portfolio project

The objective of this project is to optimize this online portfolio for speed. In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques I've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

The original unoptimized repository is available at  https://github.com/udacity/frontend-nanodegree-mobile-portfolio

###How to run

Download or use git to clone this repository to local, then transfer to the document root folder of web server. Then access the URL.

####Recommended approach

You are recommended to use SimpleHTTPServer if Python has been installed (Mac OS X and Linux should have pre-installed version). Open a terminal window, use cd  command to get into the downloaded directory and run the following command:

python -m SimpleHTTPServer

After it starts, a web browser window should be jump up with http://0.0.0.0:8000/index.html.

###How did I carry out the optimization?

####Step 1: Optimize PageSpeed Insights score for index.html

* Removed unnecessary HTML tags
* Rewrite HTML with semantic tags
* Updated and inlined style.css
* Specified attribute media="print" for printing stylesheet file
* Added async attribute to the Google Analytics script
* Relocated external JS file link
* Resized and compressed all images

####Step 2: Optimize Frames per Second in pizza.html
On the Pizza page, there are randomly generated pizzas with different locations, when you are scrolling, background pizzas will move left to right. All static pizzas on the page could be resized by changing the slider with options for 'small', 'medium', or 'large'.

####Optimizations in views/js/main.js:

* Compressed and resized pizza image (images/pizza.png) and created a small version (pizza-xs.png) for background pizzas
* Replace querySelector with getElementById
* Replace querySelectorAll with getElementsByClassName
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

####Optimizations in views/css/style.css:

* Added settings to mover class for performance purpose
  * backface-visibility: hidden
  * transform: translateZ(0);
  * transform: translate3d(0,0,0);
* Created nav-menu class to polish the navigation menu
* Removed the minus symbol ahead of "box-sizing: border-box;"

####Optimizations in views/pizza.html:

* Updated HTML with semantic tags
* Re-write the navigation menu code

###Usage of the task-runner Grunt
Grunt is a task-runner that for this project was used to
minify CSS files (<a href="https://github.com/gruntjs/grunt-contrib-cssmin">cssmin</a>) and JavaScript files (<a href="https://github.com/gruntjs/grunt-contrib-uglify">uglify</a>), as
well as resize and compress images (<a href="https://github.com/andismith/grunt-responsive-images">responsive_images</a>) via <a href="http://www.imagemagick.org/script/index.php">ImageMagick</a>.

Getting Started with <a href="http://gruntjs.com/getting-started">Grunt</a>.

More <a href="https://github.com/javsalazar/grunt-boilerplate">specific instructions</a> on using Grunt for a Udacity project.

### Optimization Tips and Tricks provided by Udacity
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

###Author
Michael ZHANG

###Contact
geek.michael@live.com
