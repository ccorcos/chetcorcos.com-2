import * as React from "react"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import Posts from "./Posts"
import { myPosts } from "../postData"
import Loader from "./Loader"
import Post from "./Post"
import Home from "./Home"
import NotFound from "./NotFound"
import * as world from "../world"
import * as postHelpers from "../helpers/postHelpers"

const Router = () => (
	<BrowserRouter ref={world.saveRouter}>
		<div>
			<Switch>
				<Route exact={true} path="/" component={Posts} />
				{myPosts.map(post => (
					<Route
						key={postHelpers.getUrl(post)}
						path={postHelpers.getUrl(post)}
						component={() => (
							<Post {...post}>
								<Loader component={post.component} />
							</Post>
						)}
					/>
				))}
				<Route component={NotFound} />
			</Switch>
		</div>
	</BrowserRouter>
)

export default Router
