import * as React from "react"

export interface ImageProps {
	src: string
}

export default class Image extends React.PureComponent<ImageProps, {}> {
	private static imageStyle: React.CSSProperties = {
		maxWidth: "100%",
	}

	render() {
		return <img style={Image.imageStyle} src={this.props.src} />
	}
}
