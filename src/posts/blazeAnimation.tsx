import * as React from "react"
import Code from "../components/Code"
import Link from "../components/Link"

export default () => (
	<div>
		<p>
			I was messing around the other day trying to figure out how to get Blaze
			to do animation. I discovered an undocumented function{" "}
			<code>_uihooks</code> that gives you control over how elements are
			inserted, moved, and removed from the DOM.
		</p>
		<p>
			I created a{" "}
			<Link href="https://github.com/ccorcos/meteor-blaze-animations">
				repo and started playing around
			</Link>. My big insight from this is that we can use{" "}
			<Link href="http://julian.com/research/velocity/#uiPack">
				VelocityJS UI Pack animations
			</Link>{" "}
			to call animations via a block helper.
		</p>
		<p>This lead to two packages that I find immensely useful.</p>
		<p>
			First, there is the bare-bones{" "}
			<Link href="https://github.com/ccorcos/meteor-animate">
				ccorcos:animate
			</Link>{" "}
			package that allows you to wrap an element with a block helper that
			specifies the UI Pack animation.
		</p>
		<Code
			value={`
{% raw %}
{{#animate in='transitions.fadeIn' out='transitions.fadeOut'}}
  ...
{{/animate}}
{% endraw %}
`}
		/>
		<p>
			And you can create your own animations using{" "}
			<code>$.Velocity.RegisterEffect</code>!
		</p>
		<p>
			A more popular package{" "}
			<Link href="https://github.com/ccorcos/meteor-transitioner">
				ccorcos:transitioner
			</Link>{" "}
			integrates with Iron Router to specify transitions between routes! It
			basically the same package with an autorun to specify the transitions
			around your <code>{`{% raw %}{{>yeild}}{% endraw %}`}</code> template.
		</p>
	</div>
)
