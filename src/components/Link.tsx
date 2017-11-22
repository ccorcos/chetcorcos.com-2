/* =============================================================================

	Anchor tags that works with the router.

============================================================================= */

import * as React from "react"
import * as colors from "../helpers/colors"
import * as router from "../router"

export enum Padding {
	None,
	Small,
	Large,
}

export interface LinkProps {
	href: string
	padding?: Padding
	style?: React.CSSProperties
}

export default class Link extends React.PureComponent<LinkProps, {}> {
	public static Padding = Padding

	private static style: React.CSSProperties = {
		color: colors.accent,
	}

	private static smallPadding: React.CSSProperties = {
		margin: "-2px -3px",
		padding: "2px 3px",
		borderRadius: "2px",
	}

	private static largePadding: React.CSSProperties = {
		margin: "-6px -6px",
		padding: "6px 6px",
		borderRadius: "4px",
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

	private getPaddingStyle() {
		switch (this.props.padding) {
			case undefined:
			case Padding.Small:
				return Link.smallPadding
			case Padding.Large:
				return Link.largePadding
			case Padding.None:
				return {}
		}
	}

	render() {
		if (
			// Internal link
			this.props.href.startsWith("/") &&
			// Not a file
			this.props.href.indexOf(".") === -1
		) {
			const style = {
				...Link.style,
				...this.getPaddingStyle(),
				...this.props.style,
			}
			return (
				<a
					className="button"
					style={style}
					onClick={this.handleClick}
					href={this.props.href}
				>
					{this.props.children}
				</a>
			)
		} else {
			const style = {
				...Link.style,
				...this.getPaddingStyle(),
				...this.props.style,
				cursor: "alias",
			}
			return (
				<a
					className="button"
					style={style}
					href={this.props.href}
					target="_blank"
				>
					{this.props.children}
				</a>
			)
		}
	}
}
