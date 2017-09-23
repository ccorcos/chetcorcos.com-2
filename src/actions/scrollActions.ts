import * as world from "../world"
import { RouteState } from "../components/Link"

export function restoreScrollPosition() {
	if (world.history) {
		const routeState: RouteState = world.history.location.state
		if (routeState && routeState.scrollTop) {
			document.body.scrollTop = routeState.scrollTop
		} else {
			document.body.scrollTop = 0
		}
	} else {
		document.body.scrollTop = 0
	}
}

export function saveScrollPosition() {
	const routeState: RouteState = { scrollTop: document.body.scrollTop }
	world.history.replace(world.history.location.pathname, routeState)
}
