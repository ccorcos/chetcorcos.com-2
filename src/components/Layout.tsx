import * as React from "react"
import Component from "reactive-magic/component"
import * as scrollActions from "../actions/scrollActions"
export interface LayoutProps {}

export default class Layout extends Component<LayoutProps> {
	didMount() {
		scrollActions.restoreScrollPosition()
	}

	private static layoutStyle: React.CSSProperties = {
		margin: "0 auto",
		maxWidth: "50em",
		lineHeight: 1.5,
		padding: "4em 1em",
	}

	render() {
		return <div style={Layout.layoutStyle}>{this.props.children}</div>
	}
}
