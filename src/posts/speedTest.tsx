import * as React from "react"
import Image from "../components/Image"
import Link from "../components/Link"
import * as internetSpeed from "file-loader!../img/internetSpeed.png"

export default () => (
	<div>
		<p>
			Have you ever realized that your internet speed isn't as fast as your are
			paying for? Well I thought so. So I wrote a little program to run on my
			Raspberry Pi to test the internet speed once every hour and log it to a
			text file. This way, when I get my internet bill, I can verify that I am
			getting the internet speeds I am paying for. Here's the result:
		</p>
		<p>
			<Image src={internetSpeed} />
		</p>
		<p>
			Hey, I should get 9.69% off my internet bill! I'm calling Time Warner...
		</p>
		<p>
			Anyways, the code is all public online{" "}
			<Link href="https://github.com/ccorcos/internet-speed-log">here</Link>.
		</p>
	</div>
)
