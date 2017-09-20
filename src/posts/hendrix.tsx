import * as React from "react"
import * as hendrix0 from "file-loader!../img/hendrix/0.jpg"
import * as hendrix1 from "file-loader!../img/hendrix/1.jpg"
import * as hendrix2 from "file-loader!../img/hendrix/2.jpg"
import * as hendrix3 from "file-loader!../img/hendrix/3.jpg"
import * as hendrix5 from "file-loader!../img/hendrix/5.jpg"
import * as hendrix4 from "file-loader!../img/hendrix/4.jpg"
import Image from "../components/Image"

export default () => (
	<div>
		<p>
			One of the many awesome things about Harvey Mudd College is that you can
			petition to paint your dorm room. I've wanted to do something for a while
			and I finally found something I want to make. I found this image online of
			Jimi Hendrix. I don't know who made it or how, but I thought it was really
			cool and easy enough to paint (if I traced it 😉).
		</p>
		<p>
			<Image src={hendrix0} />
		</p>
		<p>
			Anyways, that's what I did. I borrowed a projector from a friend,
			positioned it precariously on a pile of books and tables, and got all of
			my roomates to help me trace any lines or edges.
		</p>
		<p>
			<Image src={hendrix1} />
		</p>
		<p>
			Then we got to painting it. It took about a week of causally painting in
			the evenings, looking at ridiculously zoomed in portions of the image to
			make sense of the weird edges that wound up traces on the wall.
		</p>
		<p>
			<Image src={hendrix2} />
		</p>
		<p>In the end, it turned out AWESOME.</p>
		<p>
			<Image src={hendrix3} />
		</p>
		<p>
			I was so impressed with myself. Now, I did trace this. No one is denying
			that. But I couldn't believe how well it turned out! I'm super pumped to
			do this again sometime. All you need is a projector, some patience, and
			some kind of graphic to trace. This is how it looks in my dorm room.
		</p>
		<p>
			<Image src={hendrix5} />
		</p>
		<p>And here's a before/after pic.</p>
		<p>
			<Image src={hendrix0} />
			<Image src={hendrix4} />
		</p>
		<p>
			I've got to say, there were many moments when we thought this wasn't going
			to turn out well. If you zoom in and focus only on the lips or the
			fingers, you realize how weird this image is. But when you step away, it
			all looks great.
		</p>
	</div>
)
