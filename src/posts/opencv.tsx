import * as React from "react"
import IFrame from "../components/IFrame"
import Link from "../components/Link"

export default () => (
	<div>
		<p>
			I wanted to learn how to use the open source computer vision library,
			OpenCV, so a friend, Garrett Menghini, and I set out to learn it ourselves
			for a computer science seminar class. We documented out work on a Google{" "}
			<a href="https://sites.google.com/site/learningopencv1/">site</a> as well
			and all of our code is available. The other great thing about this site,
			is we include instructions on how to install and use OpenCV on a Mac which
			is really a pain. It took us a week or two to figure it out.
		</p>
		<p>
			For more information, check out our Google site:{" "}
			<Link href="https://sites.google.com/site/learningopencv1/">
				Learning OpenCV
			</Link>
		</p>
		<IFrame src="http://www.youtube.com/embed/LHfUeyxhgvk" />
		<IFrame src="http://www.youtube.com/embed/zAJ6muAZdX4" />
	</div>
)
