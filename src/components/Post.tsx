import * as React from "react"
import Layout from "./Layout"
import Header from "./Header"
import Footer from "./Footer"
import Link from "./Link"

export interface PostProps {
	title: string
	date: string
}

export default class Post extends React.PureComponent<PostProps, {}> {
	render() {
		return (
			<Layout>
				<p>
					<Link href="/projects">back</Link>
				</p>
				<Header title={this.props.title} />
				<p style={{ fontSize: 14, color: "gray" }}>{this.props.date}</p>
				{this.props.children}
				<Footer />
			</Layout>
		)
	}
}
