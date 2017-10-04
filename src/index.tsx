import * as React from "react"
import * as ReactDOM from "react-dom"
import { css, fontFace } from "glamor"
import * as comfortaaRegular from "file-loader!./comfortaa/Comfortaa-Regular.ttf"
import Router from "./components/Router"
import * as colors from "./helpers/colors"
import * as world from "./world"
window["world"] = world

fontFace({
	fontFamily: "Comfortaa-Regular",
	fontStyle: "normal",
	fontWeight: 400,
	src: `url(${comfortaaRegular})`,
})

css.global("html, body", {
	padding: 0,
	margin: 0,
	fontFamily: '"Comfortaa-Regular", "Helvetica", "Arial", sans-serif',
	color: colors.dark,
	tabSize: 4,
})

css.global("a", {
	color: "inherit",
	textDecoration: "none",
})

const root = document.createElement("div")
document.body.appendChild(root)

ReactDOM.render(<Router />, root)
