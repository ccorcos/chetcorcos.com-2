import * as React from "react"
import * as mudd from "file-loader!../img/mudd.jpg"
import * as scripps from "file-loader!../img/scripps.jpg"
import * as pitzer from "file-loader!../img/pitzer.jpg"
import * as cmc from "file-loader!../img/cmc.jpg"
import * as pomona from "file-loader!../img/pomona.jpg"
import Link from "../components/Link"
import Image from "../components/Image"

export default () => (
	<div>
		<p>
			At the Claremont Colleges, pretty much everyone eats at the dining halls
			all four years. My freshman year, I had the idea of putting creating an
			iPhone app for the dining hall menus. That summer, I tried and failed. In
			fact, the following summer I tried and failed yet again. Then, my junior
			year at Harvey Mudd, I started to figure it out. Objective-C and its
			incredibly object-orientated nature was totally foreign to me. At this
			point, I had only taken an introductory computer science course.
		</p>
		<p>
			I implemented this app using Google App Engine (GAE) to run a python
			script that parses the dining hall menus periodically, formatting the data
			into XML and JSON. I used python because there is an awesome library
			called Beautiful Soup for parsing HTML trees.{" "}
			<Link href="https://github.com/ccorcos/5cmenuparser">
				The code is publicly available on Github
			</Link>.
		</p>
		<p>
			You can find this app on the{" "}
			<Link href="https://itunes.apple.com/us/app/5c-menu/id512440171">
				App Store
			</Link>, but it hasn't been working lately – apparently the dining hall
			websites have changed causing the parser to break. I haven't dealt with it
			since. If you are interested in helping on this front, feel free to
			contact me.
		</p>
		<p>
			If I were to rewrite this app, I would make a web app using{" "}
			<Link href="https://github.com/meteor/meteor/wiki/Meteor-Cordova-Phonegap-integration">
				Meteor's epic Cordova integration
			</Link>{" "}
			to port over to all mobile platforms. I would also use{" "}
			<Link href="http://import.io">Import.io</Link> to extract the data because
			the python parser sadly took the most time of anything and now its
			basically worthless.
		</p>
		<p>
			<Image src={mudd} />
		</p>
		<p>
			<Image src={scripps} />
		</p>
		<p>
			<Image src={pitzer} />
		</p>
		<p>
			<Image src={cmc} />
		</p>
		<p>
			<Image src={pomona} />
		</p>
	</div>
)
