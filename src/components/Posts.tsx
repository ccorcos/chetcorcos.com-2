import * as React from "react"
import Component from "reactive-magic/component"
import PostGallery from "./PostGallery"
import PostTags from "./PostTags"
import Link from "./Link"
import Layout from "./Layout"
import Header from "./Header"
import PostList from "./PostList"
import * as world from "../world"

export default class Posts extends Component<{}> {
	debug = true
	view() {
		const { width } = world.windowSize.get()
		console.log(width)
		return (
			<Layout>
				<p>
					<Link href="/about">About</Link>
				</p>
				<p>
					<Link href="/news">Chet's News</Link>
				</p>
				<Header title="Chet's Projects" />
				<PostTags />
				{width >= 538 ? <PostGallery /> : <PostList />}
			</Layout>
		)
	}
}
