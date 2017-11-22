/* =============================================================================

	Button with hover functionality.

============================================================================= */

import * as React from "react"

export interface ButtonProps {
	onClick?: React.EventHandler<React.MouseEvent<HTMLDivElement>>
	style?: React.CSSProperties
}

export default class Button extends React.PureComponent<ButtonProps, {}> {
	render() {
		return <div className="button" {...this.props} />
	}
}
