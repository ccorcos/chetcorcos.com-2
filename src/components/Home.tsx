import * as React from "react"
import * as ReactDOM from "react-dom"
import * as _ from "lodash"
import * as moment from "moment"
import Component from "reactive-magic/component"
import { Value } from "reactive-magic"
import PostItem from "./PostItem"
import { allTags, Tag, myPosts, mediumPosts } from "../postData"
import Layout from "./Layout"
import Link from "./Link"
import Header from "./Header"

export default class Home extends Component<{}> {
	private selected = new Value<Array<Tag>>([])

	view() {
		return (
			<Layout>
				<Header
					title="Chet Corcos"
					links={[
						{ title: "Projects", url: "/projects" },
						{ url: "http://news.chetcorcos.com/", title: "News" },
						{ url: "https://www.github.com/ccorcos", title: "Github" },
						{ url: "https://www.twitter.com/ccorcos", title: "Twitter" },
						{ url: "https://www.facebook.com/ccorcos", title: "Facebook" },
						{ url: "mailto:ccorcos@gmail.com", title: "Email" },
					]}
				/>
			</Layout>
		)
	}
}
