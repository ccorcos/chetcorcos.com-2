import * as React from "react"
import * as glamor from "glamor"

interface SpinnerProps {
	style?: React.CSSProperties
}

glamor.css.insert(`
.spinner {
	animation: rotate 1000ms linear infinite;
	transform-origin: center center;
	width: 1em;
	height: 1em;
	opacity: 0.5;
	display: block;
}

@-webkit-keyframes rotate {
	0% {
		transform: rotate(0deg) translateZ(0);
	}
	100% {
		transform: rotate(360deg) translateZ(0);
	}
}

@keyframes rotate {
	0% {
		-webkit-transform: rotate(0deg) translateZ(0);
		transform: rotate(0deg) translateZ(0);
	}
	100% {
		-webkit-transform: rotate(360deg) translateZ(0);
		transform: rotate(360deg) translateZ(0);
	}
}
`)

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" data-ember-extension="1">
<defs>
		<linearGradient x1="28.1542969%" y1="63.7402344%" x2="74.6289062%" y2="17.7832031%" id="linearGradient-1">
				<stop stop-color="rgba(164, 164, 164, 1)" offset="0%"/>
				<stop stop-color="rgba(164, 164, 164, 0)" stop-opacity="0" offset="100%"/>
		</linearGradient>
</defs>
<g id="Page-1" stroke="none" stroke-width="1" fill="none" >
		<g transform="translate(-236.000000, -286.000000)">
				<g transform="translate(238.000000, 286.000000)">
						<circle id="Oval-2" stroke="url(#linearGradient-1)" stroke-width="4" cx="10" cy="12" r="10"/>
						<path d="M10,2 C4.4771525,2 0,6.4771525 0,12" id="Oval-2" stroke="rgba(164, 164, 164, 1)" stroke-width="4"/>
						<rect id="Rectangle-1" fill="rgba(164, 164, 164, 1)" x="8" y="0" width="4" height="4" rx="8"/>
				</g>
		</g>
</g>
</svg>
`

export default class Spinner extends React.PureComponent<SpinnerProps, {}> {
	render() {
		return (
			<img
				className="spinner"
				style={this.props.style}
				src={`data:image/svg+xml;utf8,${svg}`}
			/>
		)
	}
}