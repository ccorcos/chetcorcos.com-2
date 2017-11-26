import * as React from "react"
import * as ReactDOM from "react-dom/server"
import * as _ from "lodash"
import NewsItem from "../components/NewsItem"
import Layout from "../components/Layout"
import { news } from "../newsData"

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
			<Layout style={{ maxWidth: "40em" }}>
				<div style={{ textAlign: "center" }}>
					<h1 style={{ margin: 0, fontSize: 42 }}>{this.props.title}</h1>
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

const html = ReactDOM.renderToString(
	<Email title="Chet's News - November 26, 2017" since={1501222477000} />
)

console.log(html)
