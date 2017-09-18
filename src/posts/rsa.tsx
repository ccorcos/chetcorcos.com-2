import * as React from "react"
import rsa from "file!/img/rsa.png"

const data = {
	title: "RSA Encryption Tutorial",
	date: "February 22, 2014",
	url: "rsa",
}

export default () => (
	<div>
		<p><a href="https://github.com/ccorcos/rsa-tutorial">https://github.com/ccorcos/rsa-tutorial</a></p>
		<p>I’ve been interested in encryption lately and I came across the concept of <a href="http://en.wikipedia.org/wiki/Public-key_cryptography">asymmetric encryption</a> which is way cool.</p>
		<p>One such encryption scheme is <a href="http://en.wikipedia.org/wiki/RSA_(cryptosystem)">RSA</a> and it is widely used for SSL, SSH, and PGP. <a href="http://en.wikipedia.org/wiki/RSA_(cryptosystem)#Key_generation">Wikipedia has a good explanation of how the algorithm works</a> so I took the time to understand it and code up an implementation in python along with a tutorial explaining how it works. <a href="https://github.com/ccorcos/rsa-tutorial">The code is available on my Github</a> for you to check out.</p>
		<p>Simply run this at the commandline.</p>
		<pre>
			<code>
			$ git clone https://github.com/ccorcos/rsa-tutorial.git
			$ cd rsa-tutorial
			$ python rsa.py
			</code>
		</pre>
		<p>Here’s what the tutorial looks like.</p>
		<p><img src={rsa} /></p>
	</div>
	)