import * as React from "react"
import Code from "../components/Code"

export default () => (
	<div>
		<p>
			<a href="https://www.gnupg.org/">GnuPG</a> is one of the most widely
			distributed encryption tools. I've used{" "}
			<a href="https://gpgtools.org/">GPGTools</a> before but I like being at
			the commandline and knowing what I'm getting. Something about going
			through the Mail application makes me think it can't possibly be secure.
			Anyways, I like to take notes when I try new things so here's a getting
			started for you.
		</p>
		<p>
			Install with <a href="http://brew.sh/">Homebrew</a>.
		</p>
		<Code value={`brew install gnupg`} />
		<p>Create a key pair</p>
		<Code value={`gpg --gen-key`} />
		<p>You can get a copy of the public key like this</p>
		<Code value={`gpg -a --export "Name or email"`} />
		<p>
			You can also publish your public key to a key server. First get the
			fingerprint of the key you want to export:
		</p>
		<Code value={`gpg --fingerprint`} />
		<p>Then send it off like this</p>
		<Code value={`gpg --send-keys "fingerprint of your key"`} />
		<p>
			If someone sent you their public key in a file, you and import it like
			this
		</p>
		<Code value={`gpg --import pub.key`} />
		<p>Or you can search for them on a public key server</p>
		<Code value={`gpg --search-keys "name or email address"`} />
		<p>
			To send a message, first write it up in a text file. Then you can encrypt
			it with their public key using ASCII armor, and signing it with your
			private key with the following
		</p>
		<Code value={`gpg -e -a -s -r email message.txt`} />
		<p>To decrypt the message, you simply use</p>
		<Code value={`gpg message.txt.asm`} />
		<p>
			Another cool think about GnuPG is that you can use symmetric encryption
		</p>
		<Code value={`gpg -o doc.gpg -c doc`} />
	</div>
)
