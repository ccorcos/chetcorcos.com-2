import * as React from "react"
import Link from "./Link"
import Component from "reactive-magic/component"
import * as postHelpers from "../helpers/postHelpers"
import * as world from "../world"
import * as _ from "lodash"
import * as colors from "../helpers/colors"

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
					color: colors.dark,
					margin: 12,
					flex: 1,
				}}
			>
				<div
					style={{
						position: "relative",
						width: "100%",
						paddingBottom: "100%",
						height: 0,
					}}
				>
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							bottom: 0,
							right: 0,
							backgroundImage: `url(${this.props.img})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							borderRadius: 4,
							marginBottom: 8,
						}}
					/>
				</div>
				<div style={{ fontSize: 18 }}>{this.props.title}</div>
				<div style={{ fontSize: 14, color: colors.grey }}>
					{this.props.date}
				</div>
			</Link>
		)
	}
}

export default class PostGallery extends Component<{}> {
	private getChunks() {
		const { width } = world.windowSize.get()
		if (width > 700) {
			return 3
		} else if (width > 400) {
			return 2
		} else {
			return 1
		}
	}

	private getRows() {
		return _.chunk(world.posts.get(), this.getChunks())
	}

	view() {
		const rows = this.getRows()
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					margin: -12,
				}}
			>
				{rows.map((row, i) => {
					return (
						<div key={i} style={{ display: "flex", flex: 1 }}>
							{row.map((post, j) => <PostGalleryItem key={j} {...post} />)}
							{Array(rows[0].length - row.length)
								.fill(undefined)
								.map((x, i) => {
									return (
										<div key={row.length + i} style={{ flex: 1, margin: 12 }} />
									)
								})}
						</div>
					)
				})}
			</div>
		)
	}
}
