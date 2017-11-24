import * as React from "react"
import Component from "reactive-magic/component"
import { Tag, allTags } from "../helpers/postHelpers"
import * as world from "../world"
import * as router from "../router"
import Button from "./Button"
import * as colors from "../helpers/colors"

// const colors = [
// 	"rgb(255, 199, 214)",
// 	"rgb(165, 208, 255)",
// 	"rgb(163, 238, 202)",
// 	"rgb(222, 203, 230)",
// 	"rgb(249, 242, 180)",
// 	"rgb(217, 246, 255)",
// 	"rgb(247, 223, 182)",
// 	"rgb(237, 236, 232)",
// ]

export default class PostTags extends Component<{}> {
	private handleClick = (tag: Tag) => {
		const tags = world.selected.get()
		if (tags[0] === tag) {
			router.setTags([])
		} else {
			router.setTags([tag])
		}
	}

	view() {
		const tags = world.selected.get()
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginBottom: 24,
					marginLeft: -4,
					marginRight: -4,
					fontSize: 14,
				}}
			>
				{allTags.map(tag => {
					const selected = tags.some(t => t === tag)
					return (
						<Button
							key={tag}
							style={this.getTagStyle(selected)}
							onClick={() => this.handleClick(tag)}
						>
							{tag}
						</Button>
					)
				})}
			</div>
		)
	}

	private getTagStyle(selected: boolean) {
		const style: React.CSSProperties = {
			padding: "4px 12px",
			margin: "0 4px",
			color: selected ? "white" : colors.grey,
			backgroundColor: selected ? colors.blue : "transparent",
			borderRadius: 100,
			textAlign: "center",
			lineHeight: 1,
			cursor: "pointer",
		}

		return style
	}
}
