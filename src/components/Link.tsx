/* =============================================================================

	Anchor tags that works with the router.

============================================================================= */

import * as React from "react"
import * as colors from "../helpers/colors"
import * as router from "../router"

export interface LinkProps {
	href: string
	style?: React.CSSProperties
}

export default class Link extends React.PureComponent<LinkProps, {}> {
	private static style: React.CSSProperties = {
		color: colors.accent,
	}

	// https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/Link.js
	private handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		if (
			// onClick prevented default
			!event.defaultPrevented &&
			// ignore everything but left clicks
			event.button === 0 &&
			// ignore clicks with modifier keys
			!event.metaKey &&
			!event.altKey &&
			!event.ctrlKey &&
			!event.shiftKey
		) {
			event.preventDefault()
			router.push(this.props.href)
		}
	}

	render() {
		if (
			// Internal link
			this.props.href.startsWith("/") &&
			// Not a file
			this.props.href.indexOf(".") === -1
		) {
			const style = { ...Link.style, ...this.props.style }
			return (
				<a style={style} onClick={this.handleClick} href={this.props.href}>
					{this.props.children}
				</a>
			)
		} else {
			const style = { ...Link.style, ...this.props.style, cursor: "alias" }
			return (
				<a style={style} href={this.props.href} target="_blank">
					{this.props.children}
				</a>
			)
		}
	}
}
