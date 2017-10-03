import * as React from "react"
import Component from "reactive-magic/component"
import PostGallery from "./PostGallery"
import PostTags from "./PostTags"

export default class Posts extends Component<{}> {
	private renderTitle() {
		return (
			<div
				style={{
					fontSize: "6em",
					textAlign: "center",
					margin: "0.6em 0em 0.2em 0em",
				}}
			>
				Chet Corcos
			</div>
		)
	}

	view() {
		return (
			<div>
				{this.renderTitle()}
				<PostTags />
				<PostGallery />
			</div>
		)
	}
}
