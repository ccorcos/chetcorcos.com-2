import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Posts from "./components/Posts"
import { css, fontFace } from "glamor"
import { myPosts } from "./postData"
import Loader from "./components/Loader"
import Post from "./components/Post"
import Home from "./components/Home"
import * as comfortaaRegular from "file-loader!./comfortaa/Comfortaa-Regular.ttf"
import * as comfortaaLight from "file-loader!./comfortaa/Comfortaa-Light.ttf"
import * as comfortaaBold from "file-loader!./comfortaa/Comfortaa-Bold.ttf"

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
	color: "#555",
})

css.global("a", {
	color: "inherit",
	textDecoration: "none",
})

const App = () => (
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Posts} />
			{myPosts.map(post => (
				<Route
					key={post.url}
					path={post.url}
					component={() => (
						<Post {...post}>
							<Loader component={post.component} />
						</Post>
					)}
				/>
			))}
		</div>
	</BrowserRouter>
)

const root = document.createElement("div")
document.body.appendChild(root)

ReactDOM.render(<App />, root)
