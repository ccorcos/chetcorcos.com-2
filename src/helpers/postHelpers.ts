export type Tag =
	// Don't actually display ignored articles but their links are still valid.
	| "ignore"
	// Article tags.
	| "code"
	| "music"
	| "writing"
	| "cars"
	| "art"
	// Some tags are helpful for spending specific links to different people.
	| "fp"
	| "ml"
	| "eng"

export const allTags: Array<Tag> = ["code", "music", "art", "cars"]

export interface InternalPost {
	title: string
	date: string
	alias?: string
	tags: Array<Tag>
	img: string
	component: () => Promise<() => JSX.Element>
}

export interface ExternalPost {
	title: string
	date: string
	alias?: string
	tags: Array<Tag>
	img: string
	url: string
}

export type Post = InternalPost | ExternalPost

export const titleToUrl = (title: string) => {
	return (
		"/projects/" +
		title
			.toLowerCase()
			.replace(/[^a-z0-9]/g, " ")
			.trim()
			.replace(/ +/g, "-")
	)
}

export const getUrl = (args: { title: string; url?: string }) => {
	return args.url || titleToUrl(args.title)
}
