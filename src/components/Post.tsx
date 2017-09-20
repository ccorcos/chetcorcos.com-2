import * as React from "react"
import Layout from "./Layout"

export interface PostProps {
	title: string
	date: string
}

export default class Post extends React.PureComponent<PostProps, {}> {
	private static titleStyle: React.CSSProperties = {
		marginTop: "1em",
		paddingTop: "1em",
		color: "#333",
	}

	render() {
		return (
			<Layout>
				<h1 style={Post.titleStyle}>{this.props.title}</h1>
				<p>{this.props.date}</p>
				{this.props.children}
			</Layout>
		)
	}
}
