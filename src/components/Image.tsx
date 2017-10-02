import * as React from "react"

export interface ImageProps {
	src: string
	style?: React.CSSProperties
}

export default class Image extends React.PureComponent<ImageProps, {}> {
	private static imageStyle: React.CSSProperties = {
		maxWidth: "100%",
	}

	render() {
		return (
			<img
				style={{ ...Image.imageStyle, ...this.props.style }}
				src={this.props.src}
			/>
		)
	}
}
