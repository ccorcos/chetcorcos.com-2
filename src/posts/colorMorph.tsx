import * as React from "react"
import * as poster from "file-loader!../img/morph/poster.jpg"
import * as strobe from "file-loader!../img/morph/strobe-poster.m4v"
import * as hsl from "file-loader!../img/morph/hsl.m4v"
import * as hcl from "file-loader!../img/morph/hcl.m4v"
import Image from "../components/Image"
import IFrame from "../components/IFrame"
import Video from "../components/Video"
import Link from "../components/Link"

export default () => (
	<div>
		<p>Color Morph</p>
		<p>
			I went to the 50th Anniversary Summer of Love exhibit at the De Young
			Museum and one of the things that really stood out was this poster.
		</p>
		<p>
			<Image src={poster} />
		</p>
		<p>When you shine an RGB strobe light on it, it moves!</p>
		<p>
			<Video>
				<source src={strobe} type="video/mp4" />
			</Video>
		</p>
		<p>
			So I thought, with modern technology, we could use a color sweep instead
			of an RGB strobe and ideally, create something that's a totally static
			image that continuously morphs under a light that runs a the same color
			sweep.
		</p>
		<p>
			I started building this using HTML5 canvas, but then I wanted to animate
			it to simulate what the morphing effect should look like and it just
			wasn't performant so I built my first GLSL shader! For others who want to
			learn how to build shaders, I'd recommend following this{" "}
			<Link href="https://www.shadertoy.com/view/Md23DV">this tutorial</Link>.
		</p>
		<p>Anyways, I started out by building a swirl using a HSL hue sweep:</p>
		<p>
			<IFrame src="https://www.shadertoy.com/embed/ldjcDD?gui=true&t=10&paused=true&muted=false" />
		</p>
		<p>
			And then I was able to tile them together with opposite sweeps to get this
			cool visualization:
		</p>
		<p>
			<IFrame src="https://www.shadertoy.com/embed/XsSyWw?gui=true&t=10&paused=true&muted=false" />
		</p>
		<p>
			I made <Link href="https://github.com/ccorcos/morph">this program</Link>{" "}
			to turn that shader into a static image that I could print out. I also
			made a simple shader that runs the HSL hue sweep.
		</p>
		<p>
			<IFrame src="https://www.shadertoy.com/embed/lsjyzy?gui=true&t=10&paused=true&muted=false" />
		</p>
		<p>
			I displayed the hue sweep with the projector over the image I printed out
			and here was the first result.
		</p>
		<p>
			<Video>
				<source src={hsl} type="video/mp4" />
			</Video>
		</p>
		<p>
			You can see some morphing effect but not quite as strong as I was hoping
			for. I remember reading about the{" "}
			<Link href="http://www.mrao.cam.ac.uk/~dag/CUBEHELIX/">
				cubehelix color scheme
			</Link>{" "}
			and how different hues in HSL have varying perceived brightness. After
			some research, I tried using the HCL colorspace for the hue sweep. Here's
			the new swirl I came up with.
		</p>
		<p>
			<IFrame src="https://www.shadertoy.com/embed/Ms2yzy?gui=true&t=10&paused=true&muted=false" />
		</p>
		<p>And here's the color sweep for the projector.</p>
		<p>
			<IFrame src="https://www.shadertoy.com/embed/lsjczy?gui=true&t=10&paused=true&muted=false" />
		</p>
		<p>The result seems to be even less morphing!</p>
		<p>
			<Video>
				<source src={hcl} type="video/mp4" />
			</Video>
		</p>
		<p>
			I suppose the RBG strobe works really well because they're orthoganol
			colors. It's hard to say though. I still think it must be possible to do
			this, I'm just trying to figure out the right color scheme. There are some
			cool articles out there like{" "}
			<Link href="https://mycarta.wordpress.com/2013/02/21/perceptual-rainbow-palette-the-method/">
				this one
			</Link>{" "}
			about interesting color spaces that have goals of balancing perception.
		</p>
		<p>
			That's it for now. But imagine wallpaper and clothes that continuously
			morph under a light that sweeps through a rainbow. That would be so cool!
		</p>
	</div>
)
