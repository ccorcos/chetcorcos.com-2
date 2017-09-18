import * as React from "react"

export interface LoaderProps {
	component: () => Promise<() => JSX.Element>
}

export default class Loader extends React.PureComponent<LoaderProps, {}> {
	private child: JSX.Element = null

	async componentWillMount() {
		const renderer = await this.props.component()
		this.child = renderer()
		this.forceUpdate()
	}

	render() {
		return this.child
	}
}
