import * as React from "react"
import Component from "reactive-magic/component"
import PostGallery from "./PostGallery"
import PostTags from "./PostTags"
import Layout from "./Layout"
import Header from "./Header"
import PostList from "./PostList"
import * as world from "../world"

export default class Posts extends Component<{}> {
	debug = true
	view() {
		return (
			<Layout>
				<Header title="Chet's Projects" />
				<PostTags />
				{world.isMobileWidth() ? <PostList /> : <PostGallery />}
			</Layout>
		)
	}
}
