import * as React from "react"
import * as _ from "lodash"
import Component from "reactive-magic/component"
import Layout from "./Layout"
import Footer from "./Footer"
import NewsItem from "./NewsItem"
import Subscribe from "./Subscribe"
import { news } from "../newsData"

export default class News extends Component<{}> {
	view() {
		return (
			<Layout style={{ maxWidth: "40em" }}>
				<div style={{ textAlign: "center" }}>
					<h1 style={{ margin: 0, fontSize: 42 }}>Chet's News</h1>
				</div>
				<NewsList />
				<Footer />
			</Layout>
		)
	}
}

class NewsList extends Component<{}> {
	view() {
		const sorted = _.sortBy(news, item => {
			return -1 * item.date
		})
		return (
			<div>
				<Subscribe />
				{sorted.map(item => {
					return <NewsItem {...item} key={item.title} />
				})}
			</div>
		)
	}
}
