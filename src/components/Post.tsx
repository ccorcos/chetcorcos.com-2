import * as React from "react"
import Layout from "./Layout"
import Header from "./Header"
import Link from "./Link"
import * as world from "../world"
import * as postHelpers from "../helpers/postHelpers"

export interface PostProps {
	title: string
	date: string
}

export default class Post extends React.PureComponent<PostProps, {}> {
	render() {
		const posts = world.posts.get()
		const index = posts.findIndex(post => post.title === this.props.title)
		const next = index < posts.length - 1 ? index + 1 : null
		const prev = index > 0 ? index - 1 : null

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
				<p>
					{prev !== null && (
						<Link href={postHelpers.getUrl(posts[prev])}>Previous</Link>
					)}
					{prev !== null && next !== null && ", "}
					{next !== null && (
						<Link href={postHelpers.getUrl(posts[next])}>Next</Link>
					)}
				</p>
				{this.props.children}
			</Layout>
		)
	}
}
