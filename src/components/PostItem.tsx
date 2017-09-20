import * as React from "react"
import Link from "./Link"
import Image from "./Image"

export interface PostItemProps {
	title: string
	date: string
	url: string
	img?: string
}

export default class PostItem extends React.PureComponent<PostItemProps, {}> {
	render() {
		return (
			<Link href={this.props.url}>
				<div style={{ padding: 8, display: "flex" }}>
					{this.props.img && (
						<div
							style={{
								width: 65,
								height: 65,
								background: `url(${this.props.img})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								borderRadius: 6,
							}}
						/>
					)}
					<div style={{ flex: 1, paddingLeft: 8 }}>
						<div style={{ fontSize: 18 }}>{this.props.title}</div>
						<div style={{ fontSize: 14, color: "gray" }}>{this.props.date}</div>
					</div>
				</div>
			</Link>
		)
	}
}
