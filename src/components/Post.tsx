import * as React from "react"

export interface PostProps {
	title: string
	date: string
}

export default class Post extends React.PureComponent<PostProps, {}> {
	private static postStyle: React.CSSProperties = {
		margin: "0 auto",
		maxWidth: "50em",
		fontFamily: '"Helvetica", "Arial", sans-serif',
		lineHeight: 1.5,
		padding: "4em 1em",
		color: "#555",
	}

	private static titleStyle: React.CSSProperties = {
		marginTop: "1em",
		paddingTop: "1em",
		color: "#333",
	}

	render() {
		return (
			<div style={Post.postStyle}>
				<h1 style={Post.titleStyle}>{this.props.title}</h1>
				<p>{this.props.date}</p>
				{this.props.children}
			</div>
		)
	}
}
