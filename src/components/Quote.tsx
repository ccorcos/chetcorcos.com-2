import * as React from "react"
import * as colors from "../helpers/colors"

export interface QuoteProps {}

export default class Quote extends React.PureComponent<QuoteProps, {}> {
	private static QuoteStyle: React.CSSProperties = {
		margin: 0,
		paddingLeft: "1em",
		paddingRight: "1em",
		borderLeft: `4px solid ${colors.accent}`,
	}

	render() {
		return (
			<blockquote style={Quote.QuoteStyle}>{this.props.children}</blockquote>
		)
	}
}
