import * as React from "react"
import Component from "reactive-magic/component"

export interface HeaderProps {
	title: string
}

export default class Header extends Component<HeaderProps> {
	view() {
		return (
			<div style={{ marginBottom: 16 }}>
				<h1
					style={{
						position: "relative",
						display: "inline-block",
						marginRight: 16,
						marginBottom: 0,
						lineHeight: 1,
					}}
				>
					{this.props.title}
				</h1>
			</div>
		)
	}
}
