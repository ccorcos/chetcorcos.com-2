import * as React from "react"
import Component from "reactive-magic/component"
import Layout from "./Layout"
import Link from "./Link"

export default class Home extends Component<{}> {
	view() {
		return (
			<Layout style={{ maxWidth: "30em" }}>
				<p>Hello,</p>
				<p>
					I am Chet Corcos. I live in San Francisco and work at a startup called{" "}
					<Link href="https://www.notion.so">Notion</Link>. I like to work on
					various <Link href="/projects">projects</Link> in my free time. You
					can find me on{" "}
					<Link href="https://www.github.com/ccorcos">Github</Link> or{" "}
					<Link href="https://www.twitter.com/ccorcos">Twitter</Link>. Or feel
					tree to send me an <Link href="mailto:ccorcos@gmail.com">email</Link>.
				</p>
			</Layout>
		)
	}
}
