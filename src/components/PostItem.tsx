import * as React from "react"
import Link from "./Link"

export interface PostItemProps {
	title: string
	date: string
	url: string
	img?: string
}

export default class PostItem extends React.PureComponent<PostItemProps, {}> {
	render() {
		return (
			<div style={{ padding: 8 }}>
				<Link href={this.props.url}>
					{this.props.img && (
						<img
							src={this.props.img}
							style={{ width: "100%", maxWidth: 300 }}
						/>
					)}
					<div style={{ fontSize: 18 }}>{this.props.title}</div>
					<div style={{ fontSize: 14, color: "gray" }}>{this.props.date}</div>
				</Link>
			</div>
		)
	}
}
