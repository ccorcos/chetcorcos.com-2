import * as React from "react"
import * as ReactDOM from "react-dom"
import * as _ from "lodash"
import * as moment from "moment"
import Component from "reactive-magic/component"
import { Value } from "reactive-magic"
import PostItem from "../components/PostItem"
import { allTags, Tag, myPosts, mediumPosts } from "../postData"
import Layout from "../components/Layout"

const allPosts = [...myPosts, ...mediumPosts]
const orderedPosts = _.sortBy(allPosts, post => {
	const value = moment(post.date, ["MMM DD, YYYY"]).valueOf()
	return -1 * value
})

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
	private selected = new Value<Array<Tag>>([])

	private handleClick = (tag: Tag) => {
		const tags = this.selected.get()
		if (tags.some(t => t === tag)) {
			const withoutTag = tags.filter(t => t !== tag)
			this.selected.set(withoutTag)
		} else {
			this.selected.set([...tags, tag])
		}
	}

	private renderTags() {
		const tags = this.selected.get()
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginBottom: "2em",
				}}
			>
				{allTags.map((tag, index) => {
					const selected = tags.length === 0 || tags.some(t => t === tag)
					return (
						<div
							key={tag}
							style={{
								padding: "4px 12px",
								margin: "0 4px",
								backgroundColor: colors[index],
								borderRadius: 100,
								textAlign: "center",
								lineHeight: 1,
								opacity: selected ? 1 : 0.3,
								filter: selected ? undefined : "grayscale(0.5)",
							}}
							onClick={() => this.handleClick(tag)}
						>
							{tag}
						</div>
					)
				})}
			</div>
		)
	}

	private getPosts() {
		const tags = this.selected.get()
		const allPosts = [...myPosts, ...mediumPosts]
		const filterestPosts =
			tags.length === 0
				? allPosts
				: allPosts.filter(post => _.intersection(post.tags, tags).length > 0)
		const orderedPosts = _.sortBy(filterestPosts, post => {
			const value = moment(post.date, ["MMM DD, YYYY"]).valueOf()
			return -1 * value
		})
		return orderedPosts
	}

	view() {
		return (
			<Layout>
				<div style={{ width: "100%", maxWidth: "30em", margin: "0 auto" }}>
					{this.renderTags()}
					{this.getPosts().map((post, index) => (
						<PostItem key={index} {...post} />
					))}
				</div>
			</Layout>
		)
	}
}
