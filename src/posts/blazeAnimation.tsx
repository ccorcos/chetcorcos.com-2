import * as React from "react"

const data = {
	title: "Animation with Meteor",
	date: "November 20, 2014",
	url: "blaze-animation",
}

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
			<a href="https://github.com/ccorcos/meteor-blaze-animations">
				repo and started playing around
			</a>. My big insight from this is that we can use{" "}
			<a href="http://julian.com/research/velocity/#uiPack">
				VelocityJS UI Pack animations
			</a>{" "}
			to call animations via a block helper.
		</p>
		<p>This lead to two packages that I find immensely useful.</p>
		<p>
			First, there is the bare-bones{" "}
			<a href="https://github.com/ccorcos/meteor-animate">
				ccorcos:animate
			</a>{" "}
			package that allows you to wrap an element with a block helper that
			specifies the UI Pack animation.
		</p>
		<pre>
			<code>
				{`{% raw %}
{{#animate in='transitions.fadeIn' out='transitions.fadeOut'}}
  ...
{{/animate}}
{% endraw %}`}
			</code>
		</pre>
		<p>
			And you can create your own animations using{" "}
			<code>$.Velocity.RegisterEffect</code>!
		</p>
		<p>
			A more popular package{" "}
			<a href="https://github.com/ccorcos/meteor-transitioner">
				ccorcos:transitioner
			</a>{" "}
			integrates with Iron Router to specify transitions between routes! It
			basically the same package with an autorun to specify the transitions
			around your <code>{`{% raw %}{{&gt;yeild}}{% endraw %}`}</code> template.
		</p>
	</div>
)
