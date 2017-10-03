import * as React from "react"
import Image from "../components/Image"
import * as hearseDone from "file-loader!../img/hearse/hearse-done.jpg"
import * as hearse1 from "file-loader!../img/hearse/hearse-1.jpg"
import * as hearse2 from "file-loader!../img/hearse/hearse-2.jpg"
import * as hearse3 from "file-loader!../img/hearse/hearse-3.jpg"
import * as hearse4 from "file-loader!../img/hearse/hearse-4.jpg"
import * as hearse5 from "file-loader!../img/hearse/hearse-5.jpg"
import * as hearse6 from "file-loader!../img/hearse/hearse-6.jpg"

export default () => (
	<div>
		<p>
			My Mom owns a costume store called Evangeline's Costume Mansion in Old
			Sacramento. She wanted my dad to rebuild a hearse to advertise her store.
			I didn't help too much other than just sandblasting car parts and helping
			out here and there, but this car is just awesome.
		</p>
		<p>
			<Image src={hearseDone} />
		</p>
		<p>
			<Image src={hearse1} />
		</p>
		<p>
			<Image src={hearse2} />
		</p>
		<p>
			<Image src={hearse3} />
		</p>
		<p>
			<Image src={hearse4} />
		</p>
		<p>
			<Image src={hearse6} />
		</p>
		<p>
			<Image src={hearse5} />
		</p>
	</div>
)
