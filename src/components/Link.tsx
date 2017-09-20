import * as React from "react"
import { Link as A } from "react-router-dom"

export interface LinkProps {
	href: string
	style?: React.CSSProperties
}

export default class Link extends React.PureComponent<LinkProps, {}> {
	private static style: React.CSSProperties = {
		color: "#e81c4f",
	}

	render() {
		const style = { ...Link.style, ...this.props.style }
		if (this.props.href.startsWith("/")) {
			return (
				<A style={style} to={this.props.href}>
					{this.props.children}
				</A>
			)
		} else {
			return (
				<a style={style} href={this.props.href} target="_blank">
					{this.props.children}
				</a>
			)
		}
	}
}
