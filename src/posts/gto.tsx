import * as React from "react"
import Image from "../components/Image"
import * as gtoDone from "file-loader!../img/gto/gto-done.jpg"
import * as gto1 from "file-loader!../img/gto/gto-1.jpg"
import * as gto2 from "file-loader!../img/gto/gto-2.jpg"
import * as gto3 from "file-loader!../img/gto/gto-3.jpg"
import * as gto4 from "file-loader!../img/gto/gto-4.jpg"
import * as gto5 from "file-loader!../img/gto/gto-5.jpg"
import * as gto6 from "file-loader!../img/gto/gto-6.jpg"
import * as gto7 from "file-loader!../img/gto/gto-7.jpg"
import * as gto8 from "file-loader!../img/gto/gto-8.jpg"
import * as gto9 from "file-loader!../img/gto/gto-9.jpg"
import * as gto10 from "file-loader!../img/gto/gto-10.jpg"

export default () => (
	<div>
		<p>
			<Image src={gtoDone} />
		</p>
		<p>
			This is one of my favorite cars. Sadly, we sold it to make more room. My
			dad and cousin did most of the work on this, but I helped out here and
			there. This is a GTO clone, meaning the serial number is a Le Mans. This
			involved some body work changing the tail lights. It is convertible
			4-speed and quite a fun car to drive
		</p>
		<p>
			<Image src={gto1} />
		</p>
		<p>
			<Image src={gto2} />
		</p>
		<p>
			<Image src={gto3} />
		</p>
		<p>
			<Image src={gto4} />
		</p>
		<p>
			<Image src={gto5} />
		</p>
		<p>
			<Image src={gto9} />
		</p>
		<p>
			<Image src={gto7} />
		</p>
		<p>
			<Image src={gto10} />
		</p>
		<p>
			<Image src={gto6} />{" "}
		</p>
		<p>
			<Image src={gto8} />
		</p>
	</div>
)
