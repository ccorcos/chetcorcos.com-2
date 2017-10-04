import * as React from "react"
import Link from "./Link"
import Component from "reactive-magic/component"
import * as postHelpers from "../helpers/postHelpers"
import * as world from "../world"

export interface PostGalleryItemProps {
	title: string
	date: string
	url?: string
	img?: string
}

class PostGalleryItem extends Component<PostGalleryItemProps> {
	view() {
		return (
			<Link
				href={postHelpers.getUrl(this.props)}
				style={{
					color: "#444",
					width: 240,
					margin: 12,
				}}
			>
				<div
					style={{
						width: 240,
						height: 240,
						backgroundImage: `url(${this.props.img})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						borderRadius: 0,
						marginBottom: 8,
					}}
				/>
				<div style={{ fontSize: 18 }}>{this.props.title}</div>
				<div style={{ fontSize: 14, color: "gray" }}>{this.props.date}</div>
			</Link>
		)
	}
}

export default class PostGallery extends Component<{}> {
	view() {
		return (
			<div
				style={{
					display: "inline-flex",
					flexWrap: "wrap",
					//justifyContent: "space-between",
					margin: -12,
				}}
			>
				{world.posts
					.get()
					.map((post, index) => <PostGalleryItem key={index} {...post} />)}
			</div>
		)
	}
}
