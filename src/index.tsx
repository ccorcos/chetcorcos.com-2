import * as React from "react"
import * as ReactDOM from "react-dom"
import { css, fontFace } from "glamor"
import * as comfortaaRegular from "file-loader!./comfortaa/Comfortaa-Regular.ttf"
import * as comfortaaLight from "file-loader!./comfortaa/Comfortaa-Light.ttf"
import * as comfortaaBold from "file-loader!./comfortaa/Comfortaa-Bold.ttf"
import Router from "./components/Router"
import * as colors from "./helpers/colors"

fontFace({
	fontFamily: "Comfortaa-Regular",
	fontStyle: "normal",
	fontWeight: 400,
	src: `url(${comfortaaRegular})`,
})

// fontFace({
// 	fontFamily: "Comfortaa-Light",
// 	fontStyle: "normal",
// 	fontWeight: 300,
// 	src: `url(${comfortaaLight})`,
// })

// fontFace({
// 	fontFamily: "Comfortaa-Bold",
// 	fontStyle: "normal",
// 	fontWeight: 600,
// 	src: `url(${comfortaaBold})`,
// })

css.global("html, body", {
	padding: 0,
	margin: 0,
	fontFamily: '"Comfortaa-Regular", "Helvetica", "Arial", sans-serif',
	color: colors.dark,
})

css.global("a", {
	color: "inherit",
	textDecoration: "none",
})

const root = document.createElement("div")
document.body.appendChild(root)

ReactDOM.render(<Router />, root)
