import * as React from "react"
import Component from "reactive-magic/component"
import Layout from "./Layout"

// { title: "Projects", url: "/projects" },
// { url: "http://news.chetcorcos.com/", title: "News" },
// { url: "https://www.github.com/ccorcos", title: "Github" },
// { url: "https://www.twitter.com/ccorcos", title: "Twitter" },
// { url: "https://www.facebook.com/ccorcos", title: "Facebook" },
// { url: "mailto:ccorcos@gmail.com", title: "Email" },

export default class Home extends Component<{}> {
	view() {
		return <Layout>Hello</Layout>
	}
}
