import * as React from "react"

export interface PostProps {
	title: string
	date: string
}

export default class Post extends React.PureComponent<PostProps, {}> {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.date}</p>
				{this.props.children}
			</div>
		)
	}
}
