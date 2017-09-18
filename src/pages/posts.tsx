import * as React from "react"
import * as ReactDOM from "react-dom"
import * as _ from "lodash"
import * as moment from "moment"
import PostItem from "../components/PostItem"
import { myPosts, mediumPosts } from "../posts"

const allPosts = [...myPosts, ...mediumPosts]
const orderedPosts = _.sortBy(allPosts, post => {
	const value = moment(post.date, ["MMM DD, YYYY"]).valueOf()
	return -1 * value
})

export default class Posts extends React.PureComponent<{}, {}> {
	render() {
		return (
			<div>
				{orderedPosts.map((post, index) => <PostItem key={index} {...post} />)}
			</div>
		)
	}
}
