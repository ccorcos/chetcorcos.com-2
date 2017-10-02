import * as React from "react"

export interface IFrameProps {
	src: string
}

export default class IFrame extends React.PureComponent<IFrameProps, {}> {
	private static IFrameContainerStyle: React.CSSProperties = {
		position: "relative",
		height: 0,
		// 16:9 ratio for YouTube videos
		paddingBottom: `${9 / 16 * 100}%`,
	}

	private static IFrameStyle: React.CSSProperties = {
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
	}

	render() {
		return (
			// https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php
			<div style={IFrame.IFrameContainerStyle}>
				<iframe style={IFrame.IFrameStyle} src={this.props.src} />
			</div>
		)
	}
}
