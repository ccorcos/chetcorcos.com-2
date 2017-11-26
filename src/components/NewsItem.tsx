import * as React from "react"
import Component from "reactive-magic/component"
import Link from "./Link"
import Markdown from "./Markdown"

export interface NewsItemProps {
	title: string
	date: number
	url: string
	description?: string
	style?: React.CSSProperties
}

export default class NewsItem extends Component<NewsItemProps> {
	view() {
		return (
			<Link
				href={this.props.url}
				style={{
					color: "#444",
					padding: 8,
					margin: "0px -8px",
					display: "flex",
					...this.props.style,
				}}
			>
				<div style={{ flex: 1, fontSize: 14 }}>
					<div>
						<span style={{ fontWeight: "bold" }}>{this.props.title}</span>
						<span style={{ color: "gray" }}>
							{" • "}
							{this.renderDate()}
						</span>
					</div>
					<div style={{ color: "gray" }}>
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
