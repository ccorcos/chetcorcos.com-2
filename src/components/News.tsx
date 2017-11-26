import * as React from "react"
import Component from "reactive-magic/component"
import Layout from "./Layout"
import Footer from "./Footer"
import Link from "./Link"
import Markdown from "./Markdown"
import { news } from "../newsData"

export default class News extends Component<{}> {
	view() {
		return (
			<Layout>
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
		return (
			<div>
				{news.map(item => {
					return <NewsItem {...item} />
				})}
			</div>
		)
	}
}

export interface NewsItemProps {
	title: string
	date: number
	url: string
	description?: string
}

class NewsItem extends Component<NewsItemProps> {
	view() {
		return (
			<Link
				href={this.props.url}
				style={{
					color: "#444",
					padding: 8,
					margin: "0px -8px",
					display: "flex",
				}}
			>
				<div style={{ flex: 1 }}>
					<div>
						<span style={{ fontSize: 14, fontWeight: "bold" }}>
							{this.props.title}
						</span>
						<span style={{ fontSize: 14, color: "gray" }}>
							{" • "}
							{this.renderDate()}
						</span>
					</div>
					<div style={{ fontSize: 14, color: "gray" }}>
						<Markdown text={this.props.description || ""} />
					</div>
				</div>
			</Link>
		)
	}

	private renderDate() {
		const date = new Date(this.props.date)
		const year = date.getFullYear()
		const month = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		][date.getMonth()]
		const day = date.getDate()
		return `${month} ${day}, ${year}`
	}
}
