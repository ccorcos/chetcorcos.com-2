import * as React from "react"

export interface CodeProps {
	value: string
}

export default class Code extends React.PureComponent<CodeProps, {}> {
	private static preStyle: React.CSSProperties = {
		backgroundColor: "#eee",
		padding: "1em",
	}

	private static codeStyle: React.CSSProperties = {
		verticalAlign: "text-bottom",
	}

	render() {
		return (
			<pre style={Code.preStyle}>
				<code style={Code.codeStyle}>{this.props.value.trim()}</code>
			</pre>
		)
	}
}
