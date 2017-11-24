import * as React from "react"
import Component from "reactive-magic/component"
import * as colors from "../helpers/colors"
import Link from "./Link"

export interface FooterProps {}

export default class Footer extends Component<FooterProps> {
	view() {
		return (
			<div style={{ marginTop: "2em", fontSize: 14 }}>
				<Link
					href="https://www.twitter.com/ccorcos"
					style={{ color: colors.grey }}
				>
					Twitter
				</Link>
				{" • "}
				<Link
					href="https://www.github.com/ccorcos"
					style={{ color: colors.grey }}
				>
					Github
				</Link>
				{" • "}
				<Link href="mailto:ccorcos@gmail.com" style={{ color: colors.grey }}>
					Email
				</Link>
				{" • "}
				<Link
					href="http://old.chetcorcos.com/resume/"
					style={{ color: colors.grey }}
				>
					Resume
				</Link>
			</div>
		)
	}
}
