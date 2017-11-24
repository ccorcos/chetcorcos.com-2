import * as React from "react"
import Component from "reactive-magic/component"
import PostGallery from "./PostGallery"
import PostTags from "./PostTags"
import Layout from "./Layout"
import Footer from "./Footer"
import PostList from "./PostList"
import * as world from "../world"

export default class Posts extends Component<{}> {
	debug = true
	view() {
		return (
			<Layout>
				<div style={{ textAlign: "center" }}>
					<h1 style={{ margin: 0, fontSize: 42 }}>Chet's Projects</h1>
					<PostTags />
				</div>
				{world.isMobileWidth() ? <PostList /> : <PostGallery />}
				<Footer />
			</Layout>
		)
	}
}
