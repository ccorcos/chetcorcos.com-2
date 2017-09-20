import * as React from "react"
import Link from "../components/Link"

export default () => (
	<div>
		<p>
			One thing that's always bothered me is how we create so much software
			using markup. I understand how markup can be useful, but it always bothers
			me when your markup language does not contain a turing-complete language
			as well!
		</p>
		<p>
			CSS has always bothered me. There seem to be so many problem with it, and
			I don't understand why people don't move on to a{" "}
			<Link href="http://gridstylesheets.org/">
				constraint-based layout system
			</Link>{" "}
			like Apple has done for iPhone.
		</p>
		<p>
			To aleviate the pain, people have created CSS preprocessors like LESS,
			SCSS, Stylus, etc., but these are mere bandaids. While I can't say I have
			the best solution,{" "}
			<Link href="https://github.com/ccorcos/meteor-reactive-css">
				I created a package
			</Link>{" "}
			that I believe is a step in the right direction.
		</p>
		<p>
			This package was fun to make for a few reasons. It let me exercise my
			functional programming skills creating an API much like{" "}
			<Link href="https://lodash.com/docs">lodash</Link> creating a powerful
			library in only a few hundred lines of code. I've also always thought it
			would be really cool to have an app with a rotating color scheme. This
			package allows you to define CSS rules in JavaScript or Coffeescript and
			is “Tracker aware”, meaning you can define CSS rules with functions and
			any reactive variables within that function will reactively update the
			appropriate CSS rule.
		</p>
		<p>
			While this isn't necessarily recommended for performance, it allows for
			some interesting concepts. For example, you can reactively update your
			color scheme, or the entire layout based on the window size. Most of all,
			you get all the powers of abstraction from your favorite programming
			language to define your CSS rules!{" "}
			<Link href="mailto:ccorcos@gmail.com">Let me know what you think</Link>!
		</p>
	</div>
)
