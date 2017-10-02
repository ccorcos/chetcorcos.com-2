import * as React from "react"
import * as mudd2 from "file-loader!../img/mudd2.jpeg"
import * as scripps2 from "file-loader!../img/scripps2.jpeg"
import * as pitzer2 from "file-loader!../img/pitzer2.jpeg"
import * as frank2 from "file-loader!../img/frank2.jpeg"
import * as frary2 from "file-loader!../img/frary2.jpeg"
import Link from "../components/Link"
import Image from "../components/Image"
import { claremontMenu } from "../postData"

export default () => (
	<div>
		<p>
			This winter break, I've decided to rebuild the old{" "}
			<Link href={claremontMenu.url}>5C Menu iPhone App</Link>. I've learned
			some lessons the the past few years and I figured I could make it much
			quicker this time.
		</p>
		<p>
			For one, I used <Link href="https://www.meteor.com/">Meteor</Link> and
			their new{" "}
			<Link href="https://github.com/meteor/meteor/wiki/Meteor-Cordova-Phonegap-integration">
				Cordova integration
			</Link>. I built a handy Meteor package for creating{" "}
			<Link href="https://github.com/ccorcos/meteor-swipe">
				swipable views
			</Link>{" "}
			for each menu. This version contains all 7 dining halls now and works on
			any platform (althrough I have yet to release it on Android).
		</p>
		<p>
			This project is{" "}
			<Link href="https://itunes.apple.com/us/app/5c-menu/id512440171?mt=8">
				up and running in the App Store
			</Link>. The{" "}
			<Link href="https://github.com/ccorcos/5cmenu">
				code is open source
			</Link>{" "}
			although the codebase is pretty messy (I only worked on this for 2 days).
			You can also visit the{" "}
			<Link href="http://5cmenu.com/">5C Menu online</Link>.
		</p>
		<p>
			<Image src={mudd2} />
		</p>
		<p>
			<Image src={scripps2} />
		</p>
		<p>
			<Image src={pitzer2} />
		</p>
		<p>
			<Image src={frank2} />
		</p>
		<p>
			<Image src={frary2} />
		</p>
	</div>
)
