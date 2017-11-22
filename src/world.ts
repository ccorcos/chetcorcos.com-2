/* =============================================================================

	World contains global variables.

============================================================================= */

import { Value, DerivedValue } from "reactive-magic"
import * as _ from "lodash"
import * as moment from "moment"
import { internalPosts, externalPosts } from "./postData"
import { Tag } from "./helpers/postHelpers"

// =============================================================================
// Use windowSize instead of CSS media queries
// =============================================================================

export const windowSize = new Value({
	width: window.innerWidth,
	height: window.innerHeight,
})

window.addEventListener(
	"resize",
	_.throttle(event => {
		windowSize.set({
			width: window.innerWidth,
			height: window.innerHeight,
		})
	}, 100)
)

// =============================================================================
// Filtering posts based on selected tags.
// =============================================================================

export const selected = new Value<Array<Tag>>([])

export const posts = new DerivedValue(() => {
	const tags = selected.get()
	const allPosts = [...internalPosts, ...externalPosts].filter(
		post => post.tags.indexOf("ignore") === -1
	)
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
