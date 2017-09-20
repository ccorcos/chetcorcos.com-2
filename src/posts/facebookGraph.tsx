import * as React from "react"
import * as fbMe from "file-loader!../img/facebook-me.png"
import * as fbOthers from "file-loader!../img/facebook-others.png"
import Link from "../components/Link"

export default () => (
	<div>
		<p>
			I discovered <Link href="http://d3js.org/">D3.js</Link> the other day and
			was really impressed with the visualizations produced with it, especially
			the interactive ones. One of my favorite visualizations is the{" "}
			<Link href="https://github.com/mbostock/d3/wiki/Force-Layout">
				force directed layout
			</Link>{" "}
			so{" "}
			<Link href="https://github.com/ccorcos/meteor-reactive-d3-force">
				I set out to make a Meteor app that could reactively add and remove
				nodes and links from this graph
			</Link>.{" "}
			<Link href="http://reactive-force.meteor.com/">Here's a live demo!</Link>
		</p>
		<p>
			I thought it would be really cool to visualize my facebook social network
			using the force directed layout so I set out to download my social graph.
			This proved to be challenging. Facebook makes it very difficult to do this
			but I found a loophole that allows me to download my mutual friends with
			all my other friends using their old API.{" "}
			<Link href="https://github.com/ccorcos/facebook-graph-api">
				I made a python library for doing this but I'm not sure this loophole
				works anymore
			</Link>.
		</p>
		<p>
			Anyways, I plugged I plugged in my network with 750+ nodes and 20,000+
			edges. It took about ten minutes to render and about a second per
			animation frame – web browsers aren't meant for this amount of
			computation. I let it run all day until it stabilized and took some screen
			shots.
		</p>
		<p>
			In this first image, I'm at the center of the network, linked to all other
			nodes. This probably made the computation way slower because every node
			was no more than two links away from every other node. Thus local
			approximations don't help very much.
		</p>
		<p>
			<Link href={fbMe}>
				<img src={fbMe} />
			</Link>
		</p>
		<p>
			I ran it again removing myself and you can see the structures spread out a
			bit more. The three main groups are Fair Oaks, Claremont McKenna College,
			and Harvey Mudd College. The are also some outlying groups that clearly
			outline Pitzer College, SpaceX, and USC graduate school.
		</p>
		<p>
			<Link href={fbOthers}>
				<img src={fbOthers} />
			</Link>
		</p>
	</div>
)
