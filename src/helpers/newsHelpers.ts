export type NewsTags = "code" | "design"

export interface NewsItem {
	date: number
	url: string
	title: string
	description?: string
	tags: Array<string>
}
