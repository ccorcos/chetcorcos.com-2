/* =============================================================================

	Vanilla router using HTML5 history.pushState.

============================================================================= */

interface newActionArgs {}

export const newAction = (args: newActionArgs) => {}

import * as React from "react"
import * as ReactDOM from "react-dom"
import { internalPosts } from "./postData"
import Posts from "./components/Posts"
import Loader from "./components/Loader"
import Post from "./components/Post"
import * as postHelpers from "./helpers/postHelpers"

const root = document.createElement("div")
document.body.appendChild(root)

const routes: { [path: string]: () => void } = {}

routes["/"] = () => ReactDOM.render(<Posts />, root)

for (const post of internalPosts) {
	routes[postHelpers.getUrl(post)] = () => {
		ReactDOM.render(
			<Post {...post}>
				<Loader component={post.component} />
			</Post>,
			root
		)
	}
}

export function render() {
	const route = routes[window.location.pathname]
	if (route) {
		route()
	} else {
		// Redirect unknown urls to root.
		window.setTimeout(() => {
			window.history.replaceState(undefined, "", "/")
			render()
		})
	}
}

// =============================================================================
// Preserve scroll position when routing.
// =============================================================================

export interface RouteState {
	scrollTop: number
}

function getScrollState() {
	const routeState: RouteState = { scrollTop: document.body.scrollTop }
	return routeState
}

export function push(href: string) {
	window.history.pushState(getScrollState(), "", href)
	render()
}

export function restoreScrollState() {
	const routeState: RouteState = window.history.state
	if (routeState && routeState.scrollTop) {
		document.body.scrollTop = routeState.scrollTop
	} else {
		document.body.scrollTop = 0
	}
}

// =============================================================================
// Start.
// =============================================================================

window.addEventListener("popstate", render)
render()
