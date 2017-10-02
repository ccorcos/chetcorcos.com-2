import * as React from "react"
import * as rsa from "file-loader!../img/rsa.png"
import Code from "../components/Code"
import Link from "../components/Link"
import Image from "../components/Image"

export default () => (
	<div>
		<p>
			I've been interested in encryption lately and I came across the concept of{" "}
			<Link href="http://en.wikipedia.org/wiki/Public-key_cryptography">
				asymmetric encryption
			</Link>{" "}
			which is way cool.
		</p>
		<p>
			One such encryption scheme is{" "}
			<Link href="http://en.wikipedia.org/wiki/RSA_(cryptosystem)">
				RSA
			</Link>{" "}
			and it is widely used for SSL, SSH, and PGP.{" "}
			<Link href="http://en.wikipedia.org/wiki/RSA_(cryptosystem)#Key_generation">
				Wikipedia has a good explanation of how the algorithm works
			</Link>{" "}
			so I took the time to understand it and code up an implementation in
			python along with a tutorial explaining how it works.{" "}
			<Link href="https://github.com/ccorcos/rsa-tutorial">
				The code is available on my Github
			</Link>{" "}
			for you to check out.
		</p>
		<p>Simply run this at the commandline.</p>
		<Code
			value={`
$ git clone https://github.com/ccorcos/rsa-tutorial.git
$ cd rsa-tutorial
$ python rsa.py
		`}
		/>
		<p>Here's what the tutorial looks like.</p>
		<p>
			<Link href={rsa}>
				<Image src={rsa} />
			</Link>
		</p>
	</div>
)
