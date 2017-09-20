import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Posts from "./pages/posts"
import { css } from "glamor"
import { myPosts } from "./postData"
import Loader from "./components/Loader"
import Post from "./components/Post"

css.global("html, body", {
	padding: 0,
	margin: 0,
})

css.global("a", {
	color: "inherit",
	textDecoration: "none",
})

const App = () => (
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Posts} />
			{myPosts.map(post => (
				<Route
					key={post.url}
					path={post.url}
					component={() => (
						<Post {...post}>
							<Loader component={post.component} />
						</Post>
					)}
				/>
			))}
		</div>
	</BrowserRouter>
)

const root = document.createElement("div")
document.body.appendChild(root)

ReactDOM.render(<App />, root)
