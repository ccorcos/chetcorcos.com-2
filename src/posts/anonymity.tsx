import * as React from "react"

export default () => (
	<div>
		<p>
			Over past year, I’ve learned a lot about anonymity on the internet so I
			thought I’d share.
		</p>
		<ul>
			<li>
				<p>
					Install a VPN. I’ve found{" "}
					<a href="https://privateinternetaccess.com">
						privateinternetaccess.com
					</a>{" "}
					to be the best. Its $40/yr and it doesn’t seem to hinder my internet
					speed. What this does is route all of your internet traffic through
					one of their servers so the outside world doesn’t see your IP address.
				</p>
			</li>
			<li>
				<p>
					Get a <a href="hushmail.com">hushmail</a> email address. You have to
					pay for privacy. If you want, you can still use Gmail or whatever
					service, but encrypt your emails yourself using PGP. The most simple
					solution is <a href="http://ppgp.sourceforge.net/">Portable PGP</a>.
					Its simple and you have to handle your own keys and copy paste into
					emails, but you know what you’re getting. I mostly just use{" "}
					<a href="https://gpgtools.org/">GPGTools for Mac Mail</a>. It gives
					you some nice buttons in Mail for doing all this stuff and encrypts /
					decrypts everything for you. Last but not least,{" "}
					<a href="https://code.google.com/p/end-to-end/">
						Google’s end-to-end
					</a>{" "}
					is brand new and not fully supported but its something to keep an eye
					on.
				</p>
			</li>
			<li>
				<p>
					Bitcoins! I use <a href="https://multibit.org/">MultiBit</a> as my
					bitcoin wallet. Its simple and lightweight. If you buy bitcoins via
					Coinbase or any of the US Government regulated exchanges, make sure to{" "}
					<a href="https://bitlaunder.com/">anonymize them</a>!
				</p>
			</li>
			<li>
				<p>
					If you want to host a website while remaining anonymous, I like using{" "}
					<a href="bithost.io">Bithost</a> and paying with bitcoins. Using{" "}
					<a href="https://www.namecheap.com">namecheap</a>, you can also buy a
					domain name with bitcoins.
				</p>
			</li>
			<li>
				<p>
					The <a href="https://www.torproject.org/">Tor network</a> is a project
					started by the US Navy for internet anonymity. This is where you hear
					about people buying drugs, guns, fake ids, and human trafficking,
					mostly transacting through bitcoins. Its also how government
					dissidents avoid getting in trouble from oppresive governments and how
					whistleblowers protect their anonymity. The Electronic Frontier
					Foundation (EFF) supports the{" "}
					<a href="https://www.torproject.org/download/download.html">
						Vidalia Tor browser
					</a>{" "}
					which is built off of Firefox. I’d recommend using this.
				</p>
			</li>
			<li>
				<p>
					Just because I thought this was so cool, its now easier than ever to
					implement your own WikiLeaks-like whistleblower platform through the
					Tor network. All you need is an available computer with Ubuntu Linux
					and <a href="https://github.com/globaleaks/globaleaks/">
						GlobaLeaks
					</a>{" "}
					installed. A cheap netbook will work just fine and its really easy to
					install.
				</p>
			</li>
			<li>
				<p>
					For just normal web browsing, I’d also recommend installing the{" "}
					<a href="https://disconnect.me/">Disconnect Me</a> browser extension
					which prevents 3rd party websites from tracking you across the web.
				</p>
			</li>
		</ul>
	</div>
)
