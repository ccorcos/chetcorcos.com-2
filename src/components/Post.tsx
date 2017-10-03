import * as React from "react"
import Layout from "./Layout"
import Header from "./Header"

export interface PostProps {
	title: string
	date: string
}

export default class Post extends React.PureComponent<PostProps, {}> {
	render() {
		return (
			<Layout>
				<Header
					title={this.props.title}
					links={[
						{
							title: "Chet Corcos",
							url: "/",
						},
					]}
				/>
				<p style={{ fontSize: 14, color: "gray" }}>{this.props.date}</p>
				{this.props.children}
			</Layout>
		)
	}
}
