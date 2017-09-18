import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Posts from "./pages/posts"
import { css } from "glamor"
import { myPosts } from "./posts"
import Loader from "./components/Loader"

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
					component={() => <Loader component={post.component} />}
				/>
			))}
		</div>
	</BrowserRouter>
)

const root = document.createElement("div")
document.body.appendChild(root)

ReactDOM.render(<App />, root)
