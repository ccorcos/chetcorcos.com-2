import * as React from "react"
import Spinner from "./Spinner"

export interface LoaderProps {
	component?: () => Promise<() => JSX.Element>
}

export default class Loader extends React.PureComponent<LoaderProps, {}> {
	private child: JSX.Element

	state = { showSpinner: false }

	async componentWillMount() {
		if (this.props.component) {
			const renderer = await this.props.component()
			this.child = renderer()
			this.forceUpdate()
		}
	}

	render() {
		return this.child || <Spinner />
	}
}
