import * as React from "react"
import { Link as A } from "react-router-dom"

export interface LinkProps {
	href: string
}

export default class Link extends React.PureComponent<LinkProps, {}> {
	private static style: React.CSSProperties = {
		color: "#e81c4f",
	}

	render() {
		return (
			<A style={Link.style} href={this.props.href}>
				{this.props.children}
			</A>
		)
	}
}
