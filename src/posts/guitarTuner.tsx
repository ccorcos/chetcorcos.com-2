import * as React from "react"

const data = {
	title: "Raw Guitar Tuner",
	url: "/guitar-tuner",
	date: "January 5, 2015",
}

export default () => (
	<div>
		<p>
			Using the code from my{" "}
			<a href="/projects/2014/12/20/webaudio-waterfall.html">last post</a> I
			created what I like to call a “raw” guitar tuner. This tuner is just a
			zoomed in waterfall plot of the frequency spectrum of a guitar in standard
			tuner. The white lines are guides for the E-A-D-G-B-E frequencies. Now you
			can tune your guitar based on the raw frequency information!
		</p>
		<p>Here you can see me tuning the A on my guitar.</p>
		<p>
			<img src="https://raw.githubusercontent.com/ccorcos/webaudio-guitar-tuner/master/public/screenshot.png" />
		</p>
		<p>
			One thing I like about this kind of tuner is that you have finer-grained
			tuning in some sense. While the sample rate isn’t phenomenal, you get
			harmonic information to tune from. In the image above, you can see the A
			frequency on the left, but you can also see the first harmonic (the
			octive) and the second harmonic (the high-E). You might notice that the
			high-E harmonic isn’t perfect. That because, mathematically,{" "}
			<a href="http://blogs.scientificamerican.com/roots-of-unity/2014/11/30/the-saddest-thing-i-know-about-the-integers/">
				we can’t have perfect fifths
			</a>! Mind-blowing, if you ask me.
		</p>
		<p>
			<a href="https://github.com/ccorcos/webaudio-guitar-tuner">
				Play with code
			</a>, check out the{" "}
			<a href="http://webaudio-guitar-tuner.meteor.com/">demo</a> and{" "}
			<a href="mailto:ccorcos@gmail.com">let me know what you think</a>!
		</p>
	</div>
)
