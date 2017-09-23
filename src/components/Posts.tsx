import * as React from "react"
import * as ReactDOM from "react-dom"
import * as _ from "lodash"
import Component from "reactive-magic/component"
import { Value } from "reactive-magic"
import PostItem from "./PostItem"
import Layout from "./Layout"
import Link from "./Link"
import Header from "./Header"
import { Tag, allTags } from "../postData"
import * as world from "../world"

const colors = [
	"rgb(255, 199, 214)",
	"rgb(165, 208, 255)",
	"rgb(163, 238, 202)",
	"rgb(222, 203, 230)",
	"rgb(249, 242, 180)",
	"rgb(217, 246, 255)",
	"rgb(247, 223, 182)",
	"rgb(237, 236, 232)",
]

export default class Posts extends Component<{}> {
	private handleClick = (tag: Tag) => {
		const tags = world.selected.get()
		if (tags[0] === tag) {
			world.selected.set([])
		} else {
			world.selected.set([tag])
		}
	}

	private handleClear = () => {
		world.selected.set([])
	}

	private renderTags() {
		const tags = world.selected.get()
		return (
			<div
				style={{
					display: "flex",
					//justifyContent: "center",
					marginBottom: 16,
				}}
			>
				{allTags.map((tag, index) => {
					const selected = tags.length === 0 || tags.some(t => t === tag)
					return (
						<div
							key={tag}
							style={this.getTagStyle(selected, index)}
							onClick={() => this.handleClick(tag)}
						>
							{tag}
						</div>
					)
				})}
				{tags.length > 0 && (
					<div style={this.getTagStyle(true, 7)} onClick={this.handleClear}>
						x
					</div>
				)}
			</div>
		)
	}

	private getTagStyle(selected: boolean, index: number) {
		const style: React.CSSProperties = {
			padding: "4px 12px",
			margin: "0 4px",
			backgroundColor: colors[index],
			borderRadius: 100,
			textAlign: "center",
			lineHeight: 1,
		}

		if (selected) {
			style.opacity = 1
		} else {
			style.opacity = 0.3
			style.filter = "grayscale(0.5)"
		}

		return style
	}

	view() {
		return (
			<Layout>
				<Header
					title="Chet Corcos"
					links={[
						{ url: "http://news.chetcorcos.com/", title: "News" },
						{ url: "https://www.github.com/ccorcos", title: "Github" },
						{ url: "https://www.twitter.com/ccorcos", title: "Twitter" },
						{ url: "https://www.facebook.com/ccorcos", title: "Facebook" },
						{ url: "mailto:ccorcos@gmail.com", title: "Email" },
					]}
				/>
				<div style={{ width: "100%", maxWidth: "30em" }}>
					{this.renderTags()}
					{world.posts
						.get()
						.map((post, index) => <PostItem key={index} {...post} />)}
				</div>
			</Layout>
		)
	}
}