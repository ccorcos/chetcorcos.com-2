import { Value, DerivedValue } from "reactive-magic"
import * as _ from "lodash"
import * as moment from "moment"
import { allTags, Tag, myPosts, mediumPosts } from "./postData"

export const windowSize = new Value({
	width: window.innerWidth,
	height: window.innerWidth,
})

window.addEventListener(
	"resize",
	_.throttle(event => {
		windowSize.set({
			width: window.innerWidth,
			height: window.innerWidth,
		})
	}, 100)
)

export const selected = new Value<Array<Tag>>([])

export const posts = new DerivedValue(() => {
	const tags = selected.get()
	const allPosts = [...myPosts, ...mediumPosts]
	const filterestPosts =
		tags.length === 0
			? allPosts
			: allPosts.filter(post => _.intersection(post.tags, tags).length > 0)
	const orderedPosts = _.sortBy(filterestPosts, post => {
		const value = moment(post.date, ["MMM DD, YYYY"]).valueOf()
		return -1 * value
	})
	return orderedPosts
})
