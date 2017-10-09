import * as React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Posts from "./Posts"
import { myPosts } from "../postData"
import Loader from "./Loader"
import Post from "./Post"
// import NotFound from "./NotFound"
import Home from "./Home"
import * as world from "../world"
import * as postHelpers from "../helpers/postHelpers"

const Router = () => (
	<BrowserRouter ref={world.saveRouter}>
		<div>
			<Switch>
				<Route exact={true} path="/" component={Home} />
				<Route exact={true} path="/projects" component={Posts} />
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
				<Redirect to="/" />
			</Switch>
		</div>
	</BrowserRouter>
)

export default Router
