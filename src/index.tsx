import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Posts from "./pages/posts"
import { css } from "glamor"

css.global("html, body", {
	padding: 0,
	margin: 0,
})

css.global("a", {
	color: "inherit",
	textDecoration: "none",
})

const App = () => (
	<Router>
		<Route exact path="/" component={Posts} />
	</Router>
)

const root = document.createElement("div")
document.body.appendChild(root)

ReactDOM.render(<App />, root)
