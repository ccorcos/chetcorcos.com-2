/* =============================================================================

	Style uses glamor for injecting CSS.

============================================================================= */

import * as glamor from "glamor"
import * as colors from "./helpers/colors"

glamor.css.global("html, body", {
	padding: 0,
	margin: 0,
	fontFamily: '-apple-system, "Helvetica", "Arial", sans-serif',
	color: colors.dark,
	tabSize: 4,
})

glamor.css.global(".button", {
	position: "relative",
})

glamor.css.global(".button:after", {
	content: " ",
	position: "absolute",
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	pointerEvents: "none",
	borderRadius: "inherit",
	background: colors.dark,
	opacity: 0,
})

glamor.css.global(".button:hover:after,.button:active:after", {
	opacity: 0.06,
	transition: "opacity 200ms ease-in",
})
