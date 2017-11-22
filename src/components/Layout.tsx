import * as React from "react"
import Component from "reactive-magic/component"
import * as router from "../router"
import * as world from "../world"

export interface LayoutProps {
	style?: React.CSSProperties
}

export default class Layout extends Component<LayoutProps> {
	didMount() {
		router.restoreScrollState()
	}

	render() {
		return <div style={this.getStyle()}>{this.props.children}</div>
	}

	private getStyle() {
		const style: React.CSSProperties = {
			margin: "0 auto",
			maxWidth: "50em",
			lineHeight: 1.5,
			...this.props.style,
		}
		if (world.isMobileWidth()) {
			style.padding = "1em 1em"
		} else {
			style.padding = "4em 1em"
		}
		return style
	}
}
