import * as React from "react"

export interface LayoutProps {}

export default class Layout extends React.PureComponent<LayoutProps, {}> {
	private static layoutStyle: React.CSSProperties = {
		margin: "0 auto",
		maxWidth: "50em",
		fontFamily: '"Helvetica", "Arial", sans-serif',
		lineHeight: 1.5,
		padding: "4em 1em",
		color: "#555",
	}

	render() {
		return <div style={Layout.layoutStyle}>{this.props.children}</div>
	}
}
