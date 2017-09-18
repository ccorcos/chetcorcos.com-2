import * as React from "react"
import mudd2 from "file!../img/mudd2.jpeg"
import scripps2 from "file!../img/scripps2.jpeg"
import pitzer2 from "file!../img/pitzer2.jpeg"
import frank2 from "file!../img/frank2.jpeg"
import frary2 from "file!../img/frary2.jpeg"

export default () => (
	<div>
		<p>
			This winter break, I’ve decided to rebuild the old{" "}
			<a href="/projects/2012/06/02/5c-menu-app.html">5C Menu iPhone App</a>.
			I’ve learned some lessons the the past few years and I figured I could
			make it much quicker this time.
		</p>
		<p>
			For one, I used <a href="https://www.meteor.com/">Meteor</a> and their new{" "}
			<a href="https://github.com/meteor/meteor/wiki/Meteor-Cordova-Phonegap-integration">
				Cordova integration
			</a>. I built a handy Meteor package for creating{" "}
			<a href="https://github.com/ccorcos/meteor-swipe">swipable views</a> for
			each menu. This version contains all 7 dining halls now and works on any
			platform (althrough I have yet to release it on Android).
		</p>
		<p>
			This project is{" "}
			<a href="https://itunes.apple.com/us/app/5c-menu/id512440171?mt=8">
				up and running in the App Store
			</a>. The{" "}
			<a href="https://github.com/ccorcos/5cmenu">code is open source</a>{" "}
			although the codebase is pretty messy (I only worked on this for 2 days).
			You can also visit the <a href="http://5cmenu.com/">5C Menu online</a>.
		</p>
		<img src={mudd2} />
		<img src={scripps2} />
		<img src={pitzer2} />
		<img src={frank2} />
		<img src={frary2} />
	</div>
)
