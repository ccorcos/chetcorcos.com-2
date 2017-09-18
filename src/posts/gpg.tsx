import * as React from "react"

const data = {
	title: "GNU Privacy Guard Tutorial",
	date: "February 10, 2014",
	url: "gpg",
}

export default () => (
	<div>
		<p>
			<a href="https://www.gnupg.org/">GnuPG</a> is one of the most widely
			distributed encryption tools. I’ve used{" "}
			<a href="https://gpgtools.org/">GPGTools</a> before but I like being at
			the commandline and knowing what I’m getting. Something about going
			through the Mail application makes me think it can’t possibly be secure.
			Anyways, I like to take notes when I try new things so here’s a getting
			started for you.
		</p>
		<p>
			Install with <a href="http://brew.sh/">Homebrew</a>.
		</p>
		<pre>
			<code>brew install gnupg</code>
		</pre>
		<p>Create a key pair</p>
		<pre>
			<code>gpg --gen-key</code>
		</pre>
		<p>You can get a copy of the public key like this</p>
		<pre>
			<code>gpg -a --export &quot;Name or email&quot;</code>
		</pre>
		<p>
			You can also publish your public key to a key server. First get the
			fingerprint of the key you want to export:
		</p>
		<pre>
			<code>gpg --fingerprint</code>
		</pre>
		<p>Then send it off like this</p>
		<pre>
			<code>gpg --send-keys &quot;fingerprint of your key&quot;</code>
		</pre>
		<p>
			If someone sent you their public key in a file, you and import it like
			this
		</p>
		<pre>
			<code>gpg --import pub.key</code>
		</pre>
		<p>Or you can search for them on a public key server</p>
		<pre>
			<code>gpg --search-keys &quot;name or email address&quot;</code>
		</pre>
		<p>
			To send a message, first write it up in a text file. Then you can encrypt
			it with their public key using ASCII armor, and signing it with your
			private key with the following
		</p>
		<pre>
			<code>gpg -e -a -s -r email message.txt</code>
		</pre>
		<p>To decrypt the message, you simply use</p>
		<pre>
			<code>gpg message.txt.asm</code>
		</pre>
		<p>
			Another cool think about GnuPG is that you can use symmetric encryption
		</p>
		<pre>
			<code>gpg -o doc.gpg -c doc</code>
		</pre>
	</div>
)
