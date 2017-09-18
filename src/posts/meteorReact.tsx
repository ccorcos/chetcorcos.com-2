import * as React from "react"

export default () => (
	<div>
		<hr />
		<h2>layout: post title: Meteor and React</h2>
		<p>
			After learning about{" "}
			<a href="http://jlongster.com/First-Impressions-using-React-Native">
				React Native
			</a>{" "}
			and all the hype about{" "}
			<a href="http://facebook.github.io/react/">React</a>, I decided to give it
			a serious try. I read the entire documentation (which was actually quite
			short) and I was suprised about its elegance. My favorite part about it is
			that you can create your entire UI in Javascript – no markup!
		</p>
		<p>
			It was very easily to integrate React with Meteor (I love Meteor). I
			created some syntax jazz that allowed me be very expressive in the DOM
			layout in Coffeescript, without having to use JSX. Check it out:
		</p>
		<pre>
			<code>{`  (Header  [
    (Title 'Signup')
  ])
  (Content {header: true}, [
    (form {onSubmit: @submitForm}, [
      (List {}, [
        (Item {input: true}, [
          (input {type:'text', placeholder:'username'})
        ])
        (Item {input: true}, [
          (input {type:'password', placeholder:'password'})
        ])
        (Item {input: true}, [
          (input {type:'password', placeholder:'verify'})
        ])
      ])
      do =&gt; if @state.error then (Error @state.error)
      (Padding [
        (Button {type:'block', color:'balanced'}, 'signup')
      ])
    ])
  ])
`}</code>
		</pre>
		<p>
			To do this, I did two things. Every component your create returns a
			function that wraps the <code>createElement</code> function so you can use
			them directly without having to call <code>createElement</code> every
			time. Also, the first argument (the props) is optional, and the second
			argument is either one elemnt, or an array of elements. Thus we don’t need
			a bunch of awkward commas.
		</p>
		<p>
			Next, I created some mixins that allow you to define subscriptions within
			the component and reactively update the state of the component using
			Meteor’s built in reactivity.
		</p>
		<pre>
			<code>{`getMeteorState:
  players:        -&gt; Meteor.users.find({}, { sort: { 'profile.score': -1, username: 1 } }).fetch()
  selectedPlayer: -&gt; Meteor.users.findOne(Session.get('selectedPlayerId'))

subscribe: -&gt;
  Reactor.subscribe('players')
`}</code>
		</pre>
		<p>
			Lastly, I created a new namespace and a{" "}
			<a href="https://github.com/ccorcos/meteor-reactor">
				package called Reactor
			</a>{" "}
			that wraps around Iron Router to render the correct React component for
			different routes.
		</p>
		<p>
			In conclusion, I’m really impressed with React. I absolutely love how I
			can use all abstraction powers I could possibly want. No longer do I feel
			like I’m fighting the framework or markup language. I really hope Meteor
			seriously considers React instead of Blaze.
		</p>
	</div>
)
