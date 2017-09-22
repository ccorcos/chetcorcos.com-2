import * as React from "react"
import Link from "./Link"
import Image from "./Image"
import Component from "reactive-magic/component"

export interface HeaderProps {
	title: string
	links: Array<{ title: string; url: string }>
}

export default class Header extends Component<HeaderProps> {
	view() {
		const links = this.props.links.map(({ title, url }) => {
			return (
				<Link key={url} href={url}>
					{title}
				</Link>
			)
		})
		const [first, ...rest] = links
		const subtitle: Array<JSX.Element | string> = [first]
		rest.forEach(item => {
			subtitle.push(", ")
			subtitle.push(item)
		})

		return (
			<div style={{ marginBottom: 16 }}>
				<h1
					style={{
						display: "inline-block",
						marginRight: 16,
						marginBottom: 0,
						lineHeight: 1,
					}}
				>
					{this.props.title}
				</h1>
				<div style={{ display: "inline-block" }}>{subtitle}</div>
			</div>
		)
	}
}
