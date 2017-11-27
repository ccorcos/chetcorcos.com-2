/* =============================================================================

	Generate email HTML

============================================================================= */

import * as React from "react"
import * as ReactDOM from "react-dom/server"
import * as _ from "lodash"
import NewsItem from "./components/NewsItem"
import Link from "./components/Link"
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
			<div
				style={{
					lineHeight: 1.5,
					fontFamily: '-apple-system, "Helvetica", "Arial", sans-serif',
					color: colors.dark,
				}}
			>
				<div style={{ textAlign: "left" }}>
					<h1 style={{ margin: 0, fontSize: 28 }}>
						<Link
							href={"http://www.chetcorcos.com/news"}
							padding={Link.Padding.None}
							style={{ color: colors.dark }}
						>
							{this.props.title}
						</Link>
					</h1>
				</div>
				<div>
					{sorted.map(item => {
						return (
							<NewsItem
								{...item}
								key={item.title}
								style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
							/>
						)
					})}
				</div>
			</div>
		)
	}
}

const w = window as any
w["email"] = () => {
	const html = ReactDOM.renderToString(
		<Email title="Chet's News - November 26, 2017" since={1500752791000 + 1} />
	)
	console.log(html)
}
