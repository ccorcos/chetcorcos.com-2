export type Tag = "code" | "music" | "writing" | "cars" | "art"

export const allTags: Array<Tag> = ["code", "music", "writing", "cars", "art"]

export interface Post {
	title: string
	date: string
	url?: string
	alias?: string
	tags: Array<Tag>
	img?: string
	component?: () => Promise<() => JSX.Element>
}

export interface Post {
	title: string
	date: string
	url?: string
	alias?: string
	tags: Array<Tag>
	img?: string
	component?: () => Promise<() => JSX.Element>
}

export const titleToUrl = (title: string) => {
	return (
		"/" +
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
