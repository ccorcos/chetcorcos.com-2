/* =============================================================================

	Vanilla router using HTML5 history.pushState.

============================================================================= */

import * as React from "react"
import * as ReactDOM from "react-dom"
import { internalPosts } from "./postData"
import Posts from "./components/Posts"
import News from "./components/News"
import Loader from "./components/Loader"
import Post from "./components/Post"
import * as postHelpers from "./helpers/postHelpers"
import * as world from "./world"

const root = document.createElement("div")
document.body.appendChild(root)

const routes: { [path: string]: () => void } = {}

routes["/"] = () => {
	const tags = getTags()
	world.selected.set(tags)
	ReactDOM.render(<Posts />, root)
}

routes["/news"] = () => {
	ReactDOM.render(<News />, root)
}

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

export function push(href: string) {
	window.history.pushState({}, "", href)
	render()
	window.scrollTo(0, 0)
}

// =============================================================================
// Use queryparams for tags.
// =============================================================================

export function getTags() {
	const result = window.location.search.match(/tags=([^&+]+)/)
	if (result) {
		return result[1].split(",") as Array<postHelpers.Tag>
	} else {
		return []
	}
}

export function setTags(tags: Array<postHelpers.Tag>) {
	if (tags.length > 0) {
		push(window.location.pathname + "?tags=" + tags.join(","))
	} else {
		push(window.location.pathname)
	}
}

// =============================================================================
// Start.
// =============================================================================

window.addEventListener("popstate", render)
render()
