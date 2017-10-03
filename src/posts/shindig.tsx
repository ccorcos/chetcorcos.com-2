import * as React from "react"
import Link from "../components/Link"

const series = [
	{
		title:
			"Shindig: An event discovery app built with Meteor.js, React.js, and Neo4j",
		url:
			"https://medium.com/@chetcorcos/shindig-an-event-discovery-app-built-with-meteor-js-react-js-and-neo4j-602afb483ae6",
	},
	{
		title: "Shindig: Integrating Neo4j with Meteor",
		url:
			"https://medium.com/@chetcorcos/shindig-integrating-neo4j-with-meteor-17b0fce644d",
	},
	{
		title: "Shindig: Reactive Meteor Publish/Subscribe with Any Database",
		url:
			"https://medium.com/@chetcorcos/shindig-reactive-meteor-publish-subscribe-with-any-database-feb09105c343",
	},
	{
		title: "Shindig: Subscription Caching and Latency Compensation",
		url:
			"https://medium.com/@chetcorcos/shindig-subscription-caching-and-latency-compensation-d2e01e708f31",
	},
	{
		title: "Shindig: React.js + Coffeescript",
		url:
			"https://medium.com/@chetcorcos/shindig-react-js-coffeescript-c79d01197203",
	},
	{
		title: "Shindig: React Component Instances",
		url:
			"https://medium.com/@chetcorcos/shindig-react-component-instances-e8b68bf398f4",
	},
	{
		title: "Shindig: React Tab View Controller",
		url:
			"https://medium.com/@chetcorcos/shindig-react-tab-view-controller-48af935a5cd9",
	},
	{
		title: "Shindig: React Proxy Component",
		url:
			"https://medium.com/@chetcorcos/shindig-react-proxy-component-bb368510aad4",
	},
	{
		title: "Shindig: React Nav View Controller",
		url:
			"https://medium.com/@chetcorcos/shindig-react-nav-view-controller-414328034e6a",
	},
	{
		title: "Shindig: React Transitions with Stylus",
		url:
			"https://medium.com/@chetcorcos/shindig-react-transitions-with-stylus-fab08e40818e",
	},
	{
		title: "Shindig: React Data Component",
		url:
			"https://medium.com/@chetcorcos/shindig-react-data-component-aa0d2c82059e",
	},
	{
		title: "Shindig: Patterns and Best Practices",
		url:
			"https://medium.com/@chetcorcos/shindig-patterns-and-best-practices-3baffa406a75",
	},
	{
		title: "Shindig: Deployment and DevOps",
		url:
			"https://medium.com/@chetcorcos/shindig-deployment-and-devops-a06db26aa833",
	},
]

export default () => (
	<div>
		<p>
			After gradschool and before starting work at Affirm, I spend a month and a
			half building a social app called Shindig. Along the way, I wrote about
			everything I learned in a series of articles on Medium:
		</p>
		<p>
			<ul>
				{series.map(({ title, url }) => (
					<li>
						<Link href={url}>{title}</Link>
					</li>
				))}
			</ul>
		</p>
		<p>
			The source code is also{" "}
			<Link href="https://github.com/ccorcos/shindig">
				available on Github
			</Link>.
		</p>
	</div>
)
