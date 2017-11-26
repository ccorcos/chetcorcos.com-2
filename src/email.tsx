/* =============================================================================

	Generate email HTML

============================================================================= */

import * as React from "react"
import * as ReactDOM from "react-dom/server"
import * as _ from "lodash"
import NewsItem from "./components/NewsItem"
import Layout from "./components/Layout"
import { news } from "./newsData"
import * as colors from "./helpers/colors"

interface EmailProps {
	title: string
	since: number
}

class Email extends React.PureComponent<EmailProps, {}> {
	render() {
		const sorted = _.sortBy(news, item => {
			return -1 * item.date
		}).filter(item => item.date > this.props.since)

		return (
			<Layout
				style={{
					maxWidth: "40em",
					fontFamily: '-apple-system, "Helvetica", "Arial", sans-serif',
					color: colors.dark,
				}}
			>
				<div style={{ textAlign: "left" }}>
					<h1 style={{ margin: 0, fontSize: 28 }}>{this.props.title}</h1>
				</div>
				<div>
					{sorted.map(item => {
						return <NewsItem {...item} key={item.title} />
					})}
				</div>
			</Layout>
		)
	}
}

const w = window as any
w["email"] = () => {
	const html = ReactDOM.renderToString(
		<Email title="Chet's News - November 26, 2017" since={1501222477000} />
	)
	console.log(
		`
	<div>
		<style>
			a {
				color: inherit;
				text-decoration: none !important;
				text-decoration: none;
			}
		</style>
		${html}
	</div>
	`
			.split("\n")
			.map(l => l.trim())
			.join("")
			.trim()
	)
}
