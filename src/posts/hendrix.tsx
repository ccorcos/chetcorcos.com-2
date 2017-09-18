import * as React from "react"
import hendrix0 from "file!/img/hendrix/0.jpg"
import hendrix1 from "file!/img/hendrix/1.jpg"
import hendrix2 from "file!/img/hendrix/2.jpg"
import hendrix3 from "file!/img/hendrix/3.jpg"
import hendrix5 from "file!/img/hendrix/5.jpg"
import hendrix4 from "file!/img/hendrix/4.jpg"

const data = {
	title: "Jimi Hendrix Mural",
	date: "August 29, 2011",
	url: "hendrix",
}

export default () => (
	<div>
		<p>
			One of the many awesome things about Harvey Mudd College is that you can
			petition to paint your dorm room. I’ve wanted to do something for a while
			and I finally found something I want to make. I found this image online of
			Jimi Hendrix. I don’t know who made it or how, but I thought it was really
			cool and easy enough to paint (if I traced it 😉).
		</p>
		<p>
			<img src={hendrix0} />
		</p>
		<p>
			Anyways, that’s what I did. I borrowed a projector from a friend,
			positioned it precariously on a pile of books and tables, and got all of
			my roomates to help me trace any lines or edges.
		</p>
		<p>
			<img src={hendrix1} />
		</p>
		<p>
			Then we got to painting it. It took about a week of causally painting in
			the evenings, looking at ridiculously zoomed in portions of the image to
			make sense of the weird edges that wound up traces on the wall.
		</p>
		<p>
			<img src={hendrix2} />
		</p>
		<p>In the end, it turned out AWESOME.</p>
		<p>
			<img src={hendrix3} />
		</p>
		<p>
			I was so impressed with myself. Now, I did trace this. No one is denying
			that. But I couldn’t believe how well it turned out! I’m super pumped to
			do this again sometime. All you need is a projector, some patience, and
			some kind of graphic to trace. This is how it looks in my dorm room.
		</p>
		<p>
			<img src={hendrix5} />
		</p>
		<p>And here’s a before/after pic.</p>
		<p>
			<img src={hendrix0} />
			<img src={hendrix4} />
		</p>
		<p>
			I’ve got to say, there were many moments when we thought this wasn’t going
			to turn out well. If you zoom in and focus only on the lips or the
			fingers, you realize how weird this image is. But when you step away, it
			all looks great.
		</p>
		<p>
			And, by the way, my friend{" "}
			<a href="http://www.amandalipp.com/crayon-art">Amanda Lipp</a> does art as
			well. Go check out her crayon art.
		</p>
	</div>
)
