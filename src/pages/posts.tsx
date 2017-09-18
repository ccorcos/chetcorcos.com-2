import * as React from "react"
import * as ReactDOM from "react-dom"
import PostItem from "../components/PostItem"

export interface Post {
	title: string
	date: string
	url: string
	img: string
}

const posts = [
	{
		title: "Intuitive State Management with Reactive Magic",
		date: "July 23, 2017",
		url:
			"https://medium.com/@chetcorcos/intuitive-state-management-with-reactive-magic-28402fa8b73b",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*7cW0pwtxjK0M3KGFeG7Jmw.jpeg",
	},

	{
		title: "Martian Math",
		date: "March 16, 2017",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*mK-q8ZwVLhz_XB5XUuItow.png",
		url: "https://medium.freecodecamp.org/martian-math-812a029e2ea0",
	},
	{
		title: "Dark Patterns at Venmo",
		date: "February 9, 2017",
		img: null,
		url: "https://medium.com/@chetcorcos/dark-patterns-at-venmo-ef6e4a3db7fa",
	},
	{
		title: "Introduction to Parsers",
		date: "March 3, 2017",
		img: null,
		url: "https://medium.com/@chetcorcos/introduction-to-parsers-644d1b5d7f3d",
	},
	{
		title: "Getting started with Docker in 2 minutes",
		date: "December 23, 2016",
		img:
			"https://cdn-images-1.medium.com/max/1600/1*xjh1TUq3yKAB-4HWNSCkSQ.png",
		url:
			"https://medium.com/@chetcorcos/getting-started-with-docker-in-2-minutes-fd6a7668eb39",
	},
	{
		title: "Tolerance",
		date: "November 9, 2016",
		img: null,
		url: "https://medium.com/@chetcorcos/tolerance-26a446e8afbb",
	},
	{
		title: "How much better is Yarn than NPM?",
		date: "November 3, 2016",
		img:
			"https://cdn-images-1.medium.com/max/1600/1*ET9Q5-3_QiwxWuGw98veMg.png",
		url:
			"https://medium.com/@chetcorcos/how-much-better-is-yarn-than-npm-bd4a114a0ed5",
	},
	{
		title: "Redux Patterns and Anti-Patterns",
		date: "September 19, 2017",
		url:
			"https://tech.affirm.com/redux-patterns-and-anti-patterns-7d80ef3d53bc",
		img:
			"https://cdn-images-1.medium.com/max/1600/1*GVyqpS_9WUJDeaf2OEiynw.png",
	},
	{
		title: "How to hack your friends",
		date: "July 27, 2017",
		url:
			"https://medium.freecodecamp.org/how-to-hack-your-friends-eef055389344",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*CRdFzUjOuDE-qB0ASTk9yQ.jpeg",
	},
	{
		title: "Simple Backups with Rsync",
		date: "July 20, 2016",
		img: null,
		url:
			"https://medium.com/@chetcorcos/simple-backups-with-rsync-b97535ca1703",
	},
	{
		title: "Electron Dev Tool",
		date: "April 14, 2016",
		url: "https://medium.com/@chetcorcos/electron-dev-tool-13a4b4b3b0b",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*GOKroXSkw0uvgX-NMAgOeg.png",
	},
	{
		title: "Functional Programming for JavaScript People",
		url:
			"https://medium.com/@chetcorcos/functional-programming-for-javascript-people-1915d8775504",
		date: "February 29, 2016",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*KPy3bUBCUFy6zqNFZys9lQ.png",
	},
	{
		title: "Elmish: Functional Programming in Javascript",
		date: "February 24, 2016",
		url:
			"https://medium.com/@chetcorcos/elmish-functional-programming-in-javascript-50995f1d4b9e",
	},
	{
		title: "What’s the Point of GraphQL and Falcor?",
		date: "December 1, 2015",
		url:
			"https://medium.com/@chetcorcos/what-s-the-point-of-graphql-and-falcor-cdd0f35960c0",
		img: null,
	},
	{
		title: "Shindig: Deployment and DevOps",
		date: "November 23, 2015",
		url:
			"https://medium.com/@chetcorcos/shindig-deployment-and-devops-a06db26aa833",
		img: null,
	},
	{
		title: "Shindig: Patterns and Best Practices",
		date: "November 23, 2015",
		img: null,
		url:
			"https://medium.com/@chetcorcos/shindig-patterns-and-best-practices-3baffa406a75",
	},
	{
		title: "Shindig: React Data Component",
		date: "November 23, 2015",
		img: null,
		url:
			"https://medium.com/@chetcorcos/shindig-react-data-component-aa0d2c82059e",
	},
	{
		title: "Shindig: React Transitions with Stylus",
		date: "November 23, 2015",
		img: null,
		url:
			"https://medium.com/@chetcorcos/shindig-react-transitions-with-stylus-fab08e40818e",
	},
	{
		title: "Shindig: React Nav View Controller",
		date: "November 23, 2015",
		img: null,
		url:
			"https://medium.com/@chetcorcos/shindig-react-nav-view-controller-414328034e6a",
	},
	{
		title: "Shindig: React Proxy Component",
		date: "November 23, 2015",
		img: null,
		url:
			"https://medium.com/@chetcorcos/shindig-react-proxy-component-bb368510aad4",
	},
	{
		title: "Shindig: React Tab View Controller",
		date: "November 23, 2015",
		img: null,
		url:
			"https://medium.com/@chetcorcos/shindig-react-tab-view-controller-48af935a5cd9",
	},
	{
		title: "Shindig: React Component Instances",
		date: "November 23, 2015",
		img: null,
		url:
			"https://medium.com/@chetcorcos/shindig-react-component-instances-e8b68bf398f4",
	},
	{
		title: "Shindig: React.js + Coffeescript",
		date: "November 23, 2015",
		img: null,
		url:
			"https://medium.com/@chetcorcos/shindig-react-js-coffeescript-c79d01197203",
	},
	{
		title: "Shindig: Subscription Caching and Latency Compensation",
		date: "November 23, 2015",
		img: null,
		url:
			"https://medium.com/@chetcorcos/shindig-subscription-caching-and-latency-compensation-d2e01e708f31",
	},
	{
		title: "Shindig: Reactive Meteor Publish/Subscribe with Any Database",
		date: "November 23, 2015",
		img: null,
		url:
			"https://medium.com/@chetcorcos/shindig-reactive-meteor-publish-subscribe-with-any-database-feb09105c343",
	},
	{
		title: "Shindig: Integrating Neo4j with Meteor",
		date: "November 23, 2015",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*OFtES_T_6COaiynIUWgQUA.png",
		url:
			"https://medium.com/@chetcorcos/shindig-integrating-neo4j-with-meteor-17b0fce644d",
	},
	{
		title:
			"Shindig: An event discovery app built with Meteor.js, React.js, and Neo4j",
		date: "November 23, 2015",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*tuHNFifrlokBT0Ixmphtgw.png",
		url:
			"https://medium.com/@chetcorcos/shindig-an-event-discovery-app-built-with-meteor-js-react-js-and-neo4j-602afb483ae6",
	},
	{
		title: "Stitching React Components",
		date: "July 20, 2015",
		img: null,
		url:
			"https://medium.com/@chetcorcos/stitching-react-components-effbec3236d4",
	},
]

export default class Posts extends React.PureComponent<{}, {}> {
	render() {
		return (
			<div>
				{posts.map((post, index) => <PostItem key={index} {...post} />)}
			</div>
		)
	}
}
