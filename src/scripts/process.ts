// For processing curated export data

const _ = require("lodash")
const all = require("./all.json")
const fs = require("fs")

const result = _.flatten(
	_.flatten(
		_.flatten(
			all.map(issue => {
				return issue.categories.map(category => {
					return category.items.map(item => {
						return {
							date: new Date(issue.published_at).valueOf(),
							tags: [category.code],
							title: item.title,
							description: item.description_markdown,
							url: item.url,
						}
					})
				})
			})
		)
	)
)

fs.writeFileSync("./result.json", JSON.stringify(result, undefined, 2), "utf8")
