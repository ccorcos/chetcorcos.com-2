# chetcorcos.com

- polish up each project
	- write briefly about each project
		- consolidate shindig into one post
	- better tags?

- add more content
	- about
	- resume
	- ui code designs!
	- number system visualization using aparatus
	- hack github project
	- Longboard article on website
	- Eye Tracker
		- https://www.youtube.com/watch?v=zAJ6muAZdX4&feature=player_embedded




<template name="opencv">
	<h2 align="center">OpenCV Eye Feature Tracker</h2>
	<h4 align="center">Spring 2012</h4>

	<p>
		I wanted to learn how to use the open source computer vision library, OpenCV, so a friend, Garrett Menghini, and I set out to learn it ourselves for a computer science seminar class. We documented out work on a Google <a href="https://sites.google.com/site/learningopencv1/">site</a> as well and all of our code is available. The other great thing about this site, is we include instructions on how to install and use OpenCV on a Mac which is really a pain. It took us a week or two to figure it out.
	</p>
	<p>
		For more information, check out our Google site: <a href="https://sites.google.com/site/learningopencv1/">https://sites.google.com/site/learningopencv1/</a></br>
	</p>

	<div class="row images" align="middle">
	<iframe width="420" height="315" src="http://www.youtube.com/embed/LHfUeyxhgvk" frameborder="0" allowfullscreen></iframe>
	<iframe width="420" height="315" src="http://www.youtube.com/embed/zAJ6muAZdX4" frameborder="0" allowfullscreen></iframe>
	</div>
</template>



<template name="speedtest">
	<h2 align="center">Internet Speed Tester</h2>
	<h4 align="center">Fall 2013</h4>

	<p>
		Have you ever realized that your internet speed isn't as fast as your are paying for? Well I thought so. So I wrote a little program to run on my Raspberry Pi to test the internet speed once every hour and log it to a text file. This way, when I get my internet bill, I can verify that I am getting the internet speeds I am paying for. Here's the result:
	</p>

	<div class="row images" align="middle">
		<image src="/internetSpeed.png" width="800" style="padding:1%;">
	</div>

	<p>
		Hey, I should get 9.69% off my internet bill! I'm calling Time Warner...
	</p>

	<p>
		Anyways, the code is all public online <a href="https://github.com/ccorcos/InternetSpeedLog">here</a>.
	</p>

</template>

<template name="5cmenu">
	<h2 align="center">5C Menu iPhone App</h2>
	<h4 align="center">Spring 2012</h4>

	<div class="row images" align="middle">
		<image src="/5cmenu/mudd.jpg" width="200" style="padding:1%;">
		<image src="/5cmenu/scripps.jpg" width="200" style="padding:1%;">
		<image src="/5cmenu/pitzer.jpg" width="200" style="padding:1%;">
		<image src="/5cmenu/cmc.jpg" width="200" style="padding:1%;">
		<image src="/5cmenu/pomona.jpg" width="200" style="padding:1%;">
	</div>

	<p>
		At the Claremont Colleges, pretty much everyone eats at the dining halls all four years. My freshman year, I had the idea of putting creating an iPhone app with the dining hall menus on it. That summer, I tried and failed. In fact, the following summer I tried and failed yet again. Then, my junior year at HMC, I started to figure it out. Objective-C and its incredibly object-orientated nature was totally foreign to me. At this point, I had only taken an introductory computer science course.

	</p>
	<p>
		The way I implemented this was app was using Google App Engine (GAE) to run a python script that parses the dining hall menus periodically and posts XML and JSON formatted data. I used python because there is an awesome library called Beautiful Soup for parsing HTML trees. The code is publicly available and can be found <a href="https://github.com/ccorcos/5cmenuparser">here</a>.
	</p>
	<p>
		The iPhone then pulls this formatted data from the internet and puts fills out some custom UITableView's within a UIScrollView with PageControl.
	</p>
	<p>
		If you are interested in learning how to make iPhone apps, here is where I would recommend starting (assuming you already know programming): <a href="http://www.raywenderlich.com/tutorials">raywenderlich.com</a>.
	</p>

	<p>
		Also, you can find this app on the app store <a href="https://itunes.apple.com/us/app/5c-menu/id512440171">here</a>, however, it hasn't been working lately -- apparently the dining hall websites have changed causing the parser to break. Writing parsing code is such a pain. I haven't dealt with it since. If you are interested in helping on this front, feel free to contact me.
	</p>

</template>


<template name="1960hearse">
	<h2 align="center">1960 Cadillac Hearse Restoration</h2>
	<h4 align="center"> 2005-2007</h4>

	<div class="row" align="middle">
	<image src="/hearse/hearse-done.jpg" width="700" align="middle" style="padding:1%;">
	</div>

	<p>
		My Mom owns a costume store called Evangeline's Costume Mansion in Old Sacramento. She wanted my dad to rebuild a hearse to advertise her store. I didn't help too much other than just sandblasting car parts and helping out here and there, but this car is just awesome.
	</p>

	<div class="row images" align="middle">
		<image src="/hearse/hearse-1.jpg" width="340"><image src="/hearse/hearse-2.jpg" width="340">
	</div>

	<div class="row images" align="middle"></br>
		<image src="/hearse/hearse-3.jpg" width="340"><image src="/hearse/hearse-4.jpg" width="340">
	</div>

	<div class="row images" align="middle"></br>
		<image src="/hearse/hearse-6.jpg" width="340"><image src="/hearse/hearse-5.jpg" width="340">
	</div>
</template>

<template name="1966gto">
	<h2 align="center">1966 Pontiac GTO Restoration</h2>
	<h4 align="center">Summer 2008 - Summer 2009</h4>

	<div class="row" align="middle">
	<image src="/gto/gto-done.jpg" width="700" align="middle" style="padding:1%;">
	</div>

	<p>
		This is one of my favorite cars. Sadly, we sold it to make more room. My dad and cousin did most of the work on this, but I helped out here and there. This is a GTO clone, meaning the serial number is a Le Mans. This involved some body work changing the tail lights. It is convertible 4-speed and quite a fun car to drive
	</p>

	<div class="row images" align="middle">
		<image src="/gto/gto-1.jpg" width="340"><image src="/gto/gto-2.jpg" width="340">
	</div>

	<div class="row images" align="middle"></br>
		<image src="/gto/gto-3.jpg" width="340"><image src="/gto/gto-4.jpg" width="340">
	</div>

	<div class="row images" align="middle"></br>
		<image src="/gto/gto-5.jpg" width="340"><image src="/gto/gto-9.jpg" width="340">
	</div>

	<div class="row images" align="middle"></br>
		<image src="/gto/gto-7.jpg" width="340"><image src="/gto/gto-10.jpg" width="340">
	</div>

	<div class="row images" align="middle"></br>
		<image src="/gto/gto-6.jpg" width="340"><image src="/gto/gto-8.jpg" width="340">
	</div>
</template>

















- filter query params

- Photos / Albums

- education
	- USC
	- Harvey Mudd
	- Publication
	- Research
	- Projects
	- Rockets
	- MIPS Multicycle Processor Implementation
	- JavaScript (React, Redux, Webpack, Babel, Meteor, Node, d3, Coffeescript, FlowType)
	- Python (Theano, Numpy, iPython, TensorFlow)
	- C (Arduino)
	- C++ (OpenCV)
	- Clojure (Overtone, ClojureScript)
	- CAD (OpenSCAD, NX 7.5)
	- iOS (Objective-C, Swift, React Native)
	- Prolog
	- System Verilog
	- 3D Printing
	- Machine Shop
	- Work
	- Affirm, Notion, SpaceX, AuraLabs,

- photography

- favorites tag?

- move chetcorcos.com to old.chetcorcos.com and point surge to dns

- image optimization
- favicon
- better common chunk js optimization
- babel optimizers for const styles

- design

- fuzzy search
- chets news!


  -Featured tag
  -Links / news
  -Fuzzy search
  -webworker cache
