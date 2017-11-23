import * as React from "react"
import * as poster from "file-loader!../img/morph/poster.jpg"
import Image from "../components/Image"

export default () => (
	<div>
		<p>Color Morph</p>
		<p>
			I went to the 50th Anniversary "Summer of Love" exhibit at the De Young
			Museum and one of the things that really stood out was this poster.
		</p>
		<p>
			<Image src={poster} />
		</p>
		<p>But when you shine an RGB strobe light on it, it moves!</p>
		<p>
			[](//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FKX3HicNC_cY%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKX3HicNC_cY&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FKX3HicNC_cY%2Fhqdefault.jpg&key=8a35babe1ca54595895b591feaccf81f&type=text%2Fhtml&schema=youtube)
		</p>
		<p>This one too:</p>
		<p>
			[](//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FJRGFYkBC3lM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJRGFYkBC3lM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJRGFYkBC3lM%2Fhqdefault.jpg&key=8a35babe1ca54595895b591feaccf81f&type=text%2Fhtml&schema=youtube)
		</p>
		<p>
			So I thought, with modern technology, we could have a hue sweep instead of
			an RGB strobe and ideally, create something that's a totally static image
			that continuously morphs under a light that runs a hue sweep.
		</p>
		<p>
			Printed it out. I tried some different color systems and it didn't work
			very well. RGB just stand out so much I think because they're orthogonal.
			Maybe we just need to focus on that.
		</p>

		<p>
			First GLSL shaders I've ever built. Spend about 4 hours on this tonight (I
			did the GLSL tutorial a year ago after my ankle surgery). I'm pretty
			satisfied with them :)
		</p>
		<p>Started out with this swirl:</p>
		<p>
			[](https://www.shadertoy.com/embed/ldjcDD?gui=true&t=10&paused=true&muted=false)
		</p>
		<p>
			And I was able to tile them together with opposite hue sweeps to get this
			cool visualization:
		</p>
		<p>
			[](https://www.shadertoy.com/embed/XsSyWw?gui=true&t=10&paused=true&muted=false)
		</p>
		<p>
			The inspiration for this is actually pretty interesting as well, and I'm
			not done just yet :)
		</p>
	</div>
)
