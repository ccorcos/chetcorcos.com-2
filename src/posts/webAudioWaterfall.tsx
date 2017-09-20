import * as React from "react"
import Link from "../components/Link"
import Image from "../components/Image"

export default () => (
	<div>
		<p>
			Waterfall plots are my favorite intersection engineering, math,
			algorithms, machine learning, music, and art. The FFT was a ground
			breaking algorthm that runs in <code>O(n*log(n))</code>. Interestingly,
			this is the fastest way to do a convolution as well. Using the FFT, we can
			take a time-signal and get the frequency spectrum of that signal. This is
			used everywhere in engineering, from stuctural analysis from earthquakes
			to filtering sensor signals. The underlying math is amazing as well. It is
			the first time I understood the usefulness of imaginary numbers! In
			machine learning, this is the first step to audio analysis to determine
			spoken words from an audio signal. Whenever you speak to Siri, this
			algorithm is running. In music, the FFT is used for filtering and
			visualizing sound. And as far as art, you can make cool visualizations of
			sound. For example, here's a screenshot from listing to{" "}
			<Link href="https://www.youtube.com/watch?v=tPqLfsmL0bM">
				GRiZ - The Future Is Now
			</Link>.
		</p>
		<Image src="https://raw.githubusercontent.com/ccorcos/webaudio-waterfall/master/public/screenshot.png" />
		<p>
			Anyways,{" "}
			<Link href="https://github.com/ccorcos/webaudio-waterfall">
				play with code
			</Link>, check out the{" "}
			<Link href="http://webaudio-waterfall.meteor.com/">demo</Link> and{" "}
			<Link href="mailto:ccorcos@gmail.com">let me know what you think</Link>!
		</p>
	</div>
)
