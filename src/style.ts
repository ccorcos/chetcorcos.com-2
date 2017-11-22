/* =============================================================================

	Style uses glamor for injecting CSS.

============================================================================= */

import * as glamor from "glamor"
import * as comfortaaRegular from "file-loader!./comfortaa/Comfortaa-Regular.ttf"
import * as colors from "./helpers/colors"

glamor.fontFace({
	fontFamily: "Comfortaa-Regular",
	fontStyle: "normal",
	fontWeight: 400,
	src: `url(${comfortaaRegular})`,
})

glamor.css.global("html, body", {
	padding: 0,
	margin: 0,
	fontFamily: '"Comfortaa-Regular", "Helvetica", "Arial", sans-serif',
	color: colors.dark,
	tabSize: 4,
})

glamor.css.global("a", {
	color: "inherit",
	textDecoration: "none",
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

glamor.css.global(
	".button:hover:after,.button:active:after,.button:focus:after",
	{
		opacity: 0.06,
		transition: "opacity 200ms ease-in",
	}
)
