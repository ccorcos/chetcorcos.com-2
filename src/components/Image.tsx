import * as React from "react"
import * as colors from "../helpers/colors"

export interface ImageProps {
	src: string
	style?: React.CSSProperties
}

export default class Image extends React.PureComponent<ImageProps, {}> {
	private getStyle(): React.CSSProperties {
		return {
			maxWidth: "100%",
			display: "block",
			margin: "0 auto",
			background: colors.grey,
			...this.props.style,
		}
	}

	render() {
		return <img style={this.getStyle()} src={this.props.src} />
	}
}
