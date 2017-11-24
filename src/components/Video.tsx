import * as React from "react"

export interface Videorops {
	style?: React.CSSProperties
}

export default class Image extends React.PureComponent<Videorops, {}> {
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
		return (
			<video style={this.getStyle()} controls={true}>
				{this.props.children}
			</video>
		)
	}
}
