import * as React from "react"

const data = {
	title: "Room Tuner",
	url: "/room-tuner",
	date: "December 16, 2014",
}

export default () => (
	<div>
		<p>
			With my signals background, I’ve always been interested in the concept of
			room tuning. Have you ever been in a loud bar with terrible sound quality?
			Maybe the sound echos off of every wall before you hear it. Maybe the
			trebble is way to loud and its ripping your ear drums?
		</p>
		<p>
			Imagine setting up the sound system for a giant concert. There are a
			variety of speakers in various places. How so can you make sure all the
			speakers sound good together? The answer is{" "}
			<a href="http://hyperphysics.phy-astr.gsu.edu/hbase/audio/equal.html">
				equalization
			</a>. Of course you can sit there an listen to the speakers, adjusting the
			sound as you please, but there is an engineering approach. If you play a
			known signal through the speakers, you can set up a microphone hooked up
			to a spectrum analyser and make sure you are hearing the appropriate
			spectrum.
		</p>
		<p>
			With the new{" "}
			<a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API">
				Web Audio API
			</a>{" "}
			avaiable on Firefox and Chrome, we can create a spectrum analyzer in our
			web browser. After reading and experimenting for a couple hours, I was
			able to get a simple spectrum analyzer up and running.{" "}
			<a href="https://github.com/ccorcos/room-tuner">Here’s the code</a> and{" "}
			<a href="http://room-tuner.meteor.com">demo</a>! This app plays{" "}
			<a href="http://hyperphysics.phy-astr.gsu.edu/hbase/audio/equal.html">
				pink noise
			</a>{" "}
			and the microphone listens to the response and plots the spectrum
		</p>
		<p>
			<img src="https://raw.githubusercontent.com/ccorcos/room-tuner/master/public/screenshot.png" />
		</p>
		<p>Now, this setup has all sorts if problems.</p>
		<ol>
			<li>
				<p>
					There is no internal Mac equalizer. However, you can use{" "}
					<a href="https://github.com/RogueAmoeba/Soundflower">
						Soundflower
					</a>{" "}
					or a hardware equalizer if you have one.
				</p>
			</li>
			<li>
				<p>
					The microphone on your Mac is probably terrible. Not to mention the
					location of the microphone is right next to a big reflective screen.
					So you’ll probably want to use an external microphone.
				</p>
			</li>
		</ol>
		<p>
			These problems aren’t unsurmountable though.{" "}
			<a href="mailto:ccorcos@gmail.com">Let me know how it works for you</a>!
		</p>
	</div>
)
