import * as React from "react"

export interface ImageProps {
	src: string
	style?: React.CSSProperties
}

export default class Image extends React.PureComponent<ImageProps, {}> {
	private getStyle(): React.CSSProperties {
		return {
			maxWidth: "100%",
			maxHeight: "80vh",
			display: "block",
			margin: "0 auto",
			...this.props.style,
		}
	}

	render() {
		return <img style={this.getStyle()} src={this.props.src} />
	}
}
