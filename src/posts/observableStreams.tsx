import * as React from "react"

const data = {
	title: "Observable Streams",
	url: "/observable-streams",
	date: "February 7, 2015",
}

export default () => (
	<div>
		<p>
			Observable streams are one of the coolest programming patterns I’ve read
			about in a long time. If you don’t know about them, check out{" "}
			<a href="https://www.youtube.com/watch?v=XRYN2xt11Ek">
				this awesome talk
			</a>{" "}
			and this{" "}
			<a href="http://jhusain.github.io/learnrx/">
				awesome interactive tutorial
			</a>.
		</p>
		<p>
			Being a huge meteor fan, I’ve come to love{" "}
			<a href="https://www.meteor.com/tracker">Tracker</a>. It is the heart and
			soul of any meteor app and its only{" "}
			<a href="https://github.com/meteor/meteor/blob/devel/packages/tracker/tracker.js">
				500 lines of code
			</a>! It is incredibly elegant and I recommend you{" "}
			<a href="http://manual.meteor.com/#deps">learn how it works</a>.
		</p>
		<p>
			The reason I want to bring up Tracker is because that’s how we integrate
			reactivity into Meteor. Observable streams are another way of integrating
			reactivity into your app. I want to show you a perfect example of why
			observable streams can be very useful.
		</p>
		<p>
			Observable streams are perfect for UI events. Once upon a time, I{" "}
			<a href="https://github.com/ccorcos/meteor-swipe">
				wrote this horrible mess
			</a>{" "}
			to create a swipable UI. Writing this component with a slew of state
			variables turned into a giant headache of listening to events and changing
			state variables appropriately. However, using observable streams, we can
			handle UI events more concicely and understandably.
		</p>
		<p>
			I created a{" "}
			<a href="https://github.com/ccorcos/meteor-tracker-streams">
				meteor package for observable streams that uses Tracker
			</a>. I could have use <a href="https://baconjs.github.io/">Bacon.js</a>,{" "}
			<a href="https://github.com/Reactive-Extensions/RxJS">RxJS</a>, or{" "}
			<a href="http://highlandjs.org/">Highland.js</a> but I chose to implement
			observable streams with Tracker for two reasons:
		</p>
		<ol>
			<li>
				<p>I wanted to get a better understanding of how streams work.</p>
			</li>
			<li>
				<p>I wanted observable streams seamlessly integrate into Meteor.</p>
			</li>
		</ol>
		<p>
			Using Tracker, we can define observable streams within our Template
			helpers and they’ll reactively update!
		</p>
		<p>
			So whats the big hype? Check out this{" "}
			<a href="http://tracker-streams-menu.meteor.com/">
				swipe menu I made
			</a>{" "}
			and notice how smooth the physics are, it works on desktop or mobile, and
			it has no jank. This slide menu was created in only 50 lines of code.
			Here’s how:
		</p>
		<p>
			Everything is defined within the <code>menu.rendered</code> function:
		</p>
		<pre>
			<code>Template.menu.rendered = -&gt; self = this</code>
		</pre>
		<p>
			We create some streams, purify, and merge them to keep track of the start,
			movement, and end of the menu UI events.
		</p>
		<pre>
			<code>
				{" "}
				# start stream of x position values toushStart =
				@eventStream(&quot;touchstart&quot;, &quot;.handle&quot;) .map (e) -&gt;
				e.originalEvent.touches[0].pageX mouseDown =
				@eventStream(&quot;mousedown&quot;, &quot;.handle&quot;) .map (e) -&gt;
				e.pageX startStream = Tracker.mergeStreams(toushStart, mouseDown) #
				cancel on a variety of annoying events touchEnd =
				self.eventStream(&quot;touchend&quot;, &quot;.page&quot;, true)
				touchCancel = self.eventStream(&quot;touchcancel&quot;,
				&quot;.page&quot;, true) touchLeave =
				self.eventStream(&quot;touchleave&quot;, &quot;.page&quot;, true)
				mouseUp = self.eventStream(&quot;mouseup&quot;, &quot;.page&quot;, true)
				mouseOut = self.eventStream(&quot;mouseout&quot;, &quot;.page&quot;,
				true) mouseOffPage = mouseOut .filter (e) -&gt; (e.relatedTarget or
				e.toElement) is undefined endStream = Tracker.mergeStreams(mouseUp,
				mouseOffPage, touchEnd, touchCancel, touchLeave) # create a move stream
				on demand returning the x position values mouseMove =
				self.eventStream(&quot;mousemove&quot;, &quot;.page&quot;, true) .map
				(e) -&gt; e.pageX touchMove = self.eventStream(&quot;touchmove&quot;,
				&quot;.page&quot;, true) .map (e) -&gt; e.originalEvent.touches[0].pageX
				moveStream = Tracker.mergeStreams(mouseMove, touchMove)
			</code>
		</pre>
		<p>
			We also keep track of when the menu is animating so we don’t interrupt any
			animations with a new animation.
		</p>
		<pre>
			<code>
				{" "}
				# create an animation stream to block the start stream from interrupting
				an animation animatingStream = @stream(false)
			</code>
		</pre>
		<p>
			And here somes the meat of our component. We map over every startSteam
			unless we are currently animating. We record the initial position of the
			menu handle and the offset within the handle that we touched. We also keep
			track of the velocity of the touch so we can flick it.
		</p>
		<pre>
			<code>
				{" "}
				# get the jquery object we're going to drag $menu = $(@find('.menu'))
				startStream .unless(animatingStream) .map (x) -&gt; initLeft =
				$menu.position().left offset = initLeft - x lastLeft = initLeft velocity
				= 0
			</code>
		</pre>
		<p>
			If we touch the menu without moving, we must assume its a toggle. We use
			the amazing <a href="http://julian.com/research/velocity/">
				VelocityJS
			</a>{" "}
			library for creating the animation classes.
		</p>
		<pre>
			<code>{`      # toggle menu position
      toggle = -&gt;
        if lastLeft &gt; -menuWidth/2
          # close it
          $menu.velocity({translateX: [-menuWidth, 0], translateZ: [0, 0]}, {duration: 400, easing: 'ease-in-out', complete: -&gt; animatingStream.set(false)})
        else
          # open it
          $menu.velocity({translateX: [0, -menuWidth], translateZ: [0, 0]}, {duration: 400, easing: 'ease-in-out', complete: -&gt; animatingStream.set(false)})
`}</code>
		</pre>
		<p>
			When the swiping ends, we call this resolve function. This takes care of
			calling toggle if necessary and otherwise calculated the position of the
			menu using momentum and animates the menu closed based on the speed of the
			flick!
		</p>
		<pre>
			<code>{`      # resolve menu position
      resolve = -&gt;
        animatingStream.set(true)
        # wait for animation to finish
        if initLeft is lastLeft and velocity is 0
          toggle()
          return

        momentum = velocity*3
        if lastLeft + momentum &gt; -menuWidth/2
          momentum = Math.abs(momentum)
          duration = Math.min(-lastLeft/momentum*100, 400)
          $menu.velocity({translateX: 0, translateZ: 0}, {duration: duration, easing: 'ease-out', complete: -&gt; animatingStream.set(false)})
        else
          momentum = Math.abs(momentum)
          duration = Math.min((200-lastLeft)/momentum*100, 400)
          $menu.velocity({translateX: -menuWidth, translateZ: 0}, {duration: duration, easing: 'ease-out', complete: -&gt; animatingStream.set(false)})
`}</code>
		</pre>
		<p>
			The utilize the previous two functions here. On every startStream event,
			we listen to the moveStream until the endStream first in which we call the
			resolve function. For each move, we simply update the position of the
			element, and update the variables for the position and the velocity.
		</p>
		<pre>
			<code>{`      moveStream
        .takeUntil(endStream, resolve)
        .forEach (x) -&gt;
          # wait for animation to finish
          left = strangle(x + offset, [-menuWidth, 0])
          velocity = left - lastLeft
          lastLeft = left
          $menu.velocity({translateX: left, translateZ: 0}, {duration: 0})
`}</code>
		</pre>
		<p>
			Anyways, that’s it. Pretty slick right?! My mind was blown once I realized
			how useful observable streams are for abstracting the state of UI events.{" "}
			<a href="https://github.com/ccorcos/meteor-tracker-streams/tree/master/examples/slide-menu">
				Here’s the code for the menu
			</a>{" "}
			and <a href="mailto:ccorcos@gmail.com">let me know what you think</a>!
		</p>
	</div>
)
