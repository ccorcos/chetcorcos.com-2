import * as React from "react"
import blazer from "file!../img/blazer.jpg"

const data = {
	title: "1971 Blazer Restoration",
	date: "January 1, 2010",
	url: "blazer",
}

export default () => (
	<div>
		<p>
			When I was home for winter break after my freshman year of college, my dad
			and I did a quick restoration of a 1970 Blazer. We wanted to keep this one
			rugged which allowed us to work a lot quicker. It took us only a month to
			everything except the paint. We rebuilt the motor which was already in
			pretty good condition. And we refurbished all the interior.
		</p>
		<p>
			<img src={blazer} />
		</p>
		<iframe src="http://www.youtube.com/embed/fWozxL50oEI" />
	</div>
)
