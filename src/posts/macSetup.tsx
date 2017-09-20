import * as React from "react"
import Code from "../components/Code"
import Link from "../components/Link"

export default () => (
	<div>
		<p>
			Every year, when the new OS X operating system comes out, I like to do a
			clean install, getting rid of all the junk on my computer that accumulated
			over the past year. Over the years, I've created some scripts to help me
			automate the process of setting up my new machine the way I like it.{" "}
			<Link href="https://github.com/ccorcos/mac-setup">
				I've create a repository on my Github elaborating on this process and
				providing some useful scripts
			</Link>.
		</p>
		<p>
			There are a few things you have to do manually first. You'll need to
			install the Xcode commandline tools which you can do directly from the
			commandline without installing Xcode.
		</p>
		<Code value={`$ xcode-select --install`} />
		<p>
			Next, you'll want to install any apps you have already purchased from the
			App Store. You'll probably want to install Xcode anyways.
		</p>
		<h2>Homebrew</h2>
		<p>
			Then you'll want to install <Link href="http://brew.sh/">homebrew</Link>,
			a commandline tool to manage installations on your Mac. Checkout my{" "}
			<Link href="https://github.com/ccorcos/mac-setup/blob/master/install.sh">
				<code>install.sh</code>
			</Link>{" "}
			script which install homebrew, various applications and some python
			modules.
		</p>
		<h2>Zsh</h2>
		<p>
			Zsh (Z shell) is a modern shell with a handful of perks. Among others, it
			has excellent fuzzy-autocomplete.{" "}
			<Link href="https://github.com/ccorcos/prezto">
				I have also forked the amazing Prezto configuration framework to version
				control my own zsh settings here
			</Link>. This gives you some great perks like <code>cat</code> syntax
			highlighting, command highlighting for valid and invalid commands, and git
			status icons. To get started, install zsh through brew.
		</p>
		<Code value={`$ brew install zsh`} />
		<p>
			Then open zsh, don't worry about the initial configuration it asks you
			for.
		</p>
		<Code value={`$ zsh`} />
		<p>
			Then{" "}
			<Link href="https://github.com/ccorcos/prezto">
				follow the instructions here
			</Link>{" "}
			to clone and symlink all the resource files and finally, set your default
			shell to zsh.
		</p>
		<Code value={`$ chsh -s /bin/zsh`} />
		<h2>Atom Editor</h2>
		<p>
			I prefer to use the <Link href="https://atom.io/">Atom Editor</Link> as
			opposed to Sublime Text because it is open source and offers a huge amount
			of configuration. You can get setup with my atom settings by running my{" "}
			<Link href="https://github.com/ccorcos/mac-setup/blob/master/setup_atom.sh">
				<code>setup_atom.sh</code>
			</Link>{" "}
			script, or simply the following.
		</p>
		<Code
			value={`
$ brew cask install atom
$ git clone https://github.com/ccorcos/atom-editor-settings.git ~/.atom
			`}
		/>
		<p>This gives you a slew of amazing packages and themes.</p>
		<h2>OSX Defaults</h2>
		<p>
			I also have a{" "}
			<Link href="https://github.com/ccorcos/mac-setup/blob/master/osx_defaults.sh">
				script to setup some default preferences here
			</Link>. I suggest you go through one-by-one and comment out lines to suit
			your taste. Many of these settings cannot be configured through System
			Preferences like adding spacers to your dock. You may have to restart your
			computer for some of these configurations to take place.
		</p>
	</div>
)
