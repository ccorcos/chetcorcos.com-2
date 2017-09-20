import * as React from "react"
import Link from "../components/Link"

export default () => (
	<div>
		<p>
			Over past year, I've learned a lot about anonymity on the internet so I
			thought I'd share.
		</p>
		<ul>
			<li>
				<p>
					Install a VPN. I've found{" "}
					<Link href="https://privateinternetaccess.com">
						privateinternetaccess.com
					</Link>{" "}
					to be the best. Its $40/yr and it doesn't seem to hinder my internet
					speed. What this does is route all of your internet traffic through
					one of their servers so the outside world doesn't see your IP address.
				</p>
			</li>
			<li>
				<p>
					Get a <Link href="hushmail.com">hushmail</Link> email address. You
					have to pay for privacy. If you want, you can still use Gmail or
					whatever service, but encrypt your emails yourself using PGP. The most
					simple solution is{" "}
					<Link href="http://ppgp.sourceforge.net/">Portable PGP</Link>. Its
					simple and you have to handle your own keys and copy paste into
					emails, but you know what you're getting. I mostly just use{" "}
					<Link href="https://gpgtools.org/">GPGTools for Mac Mail</Link>. It
					gives you some nice buttons in Mail for doing all this stuff and
					encrypts / decrypts everything for you. Last but not least,{" "}
					<Link href="https://code.google.com/p/end-to-end/">
						Google's end-to-end
					</Link>{" "}
					is brand new and not fully supported but its something to keep an eye
					on.
				</p>
			</li>
			<li>
				<p>
					Bitcoins! I use <Link href="https://multibit.org/">MultiBit</Link> as
					my bitcoin wallet. Its simple and lightweight. If you buy bitcoins via
					Coinbase or any of the US Government regulated exchanges, make sure to{" "}
					<Link href="https://bitlaunder.com/">anonymize them</Link>!
				</p>
			</li>
			<li>
				<p>
					If you want to host a website while remaining anonymous, I like using{" "}
					<Link href="bithost.io">Bithost</Link> and paying with bitcoins. Using{" "}
					<Link href="https://www.namecheap.com">namecheap</Link>, you can also
					buy a domain name with bitcoins.
				</p>
			</li>
			<li>
				<p>
					The <Link href="https://www.torproject.org/">Tor network</Link> is a
					project started by the US Navy for internet anonymity. This is where
					you hear about people buying drugs, guns, fake ids, and human
					trafficking, mostly transacting through bitcoins. Its also how
					government dissidents avoid getting in trouble from oppresive
					governments and how whistleblowers protect their anonymity. The
					Electronic Frontier Foundation (EFF) supports the{" "}
					<Link href="https://www.torproject.org/download/download.html">
						Vidalia Tor browser
					</Link>{" "}
					which is built off of Firefox. I'd recommend using this.
				</p>
			</li>
			<li>
				<p>
					Just because I thought this was so cool, its now easier than ever to
					implement your own WikiLeaks-like whistleblower platform through the
					Tor network. All you need is an available computer with Ubuntu Linux
					and{" "}
					<Link href="https://github.com/globaleaks/globaleaks/">
						GlobaLeaks
					</Link>{" "}
					installed. A cheap netbook will work just fine and its really easy to
					install.
				</p>
			</li>
			<li>
				<p>
					For just normal web browsing, I'd also recommend installing the{" "}
					<Link href="https://disconnect.me/">Disconnect Me</Link> browser
					extension which prevents 3rd party websites from tracking you across
					the web.
				</p>
			</li>
		</ul>
	</div>
)
