import * as malibuCover from "file-loader!./img/malibu/done.jpg"
import * as electricTruckCover from "file-loader!./img/etruck/done.jpg"
import * as blazerCover from "file-loader!./img/blazer.jpg"
import * as hendrixCover from "file-loader!./img/hendrix/4.jpg"
import * as claremontMenuCover from "file-loader!./img/mudd.jpg"
import * as claremontMenuCover2 from "file-loader!./img/mudd2.jpeg"
import * as facebookGraphCover from "file-loader!./img/facebook-me.png"
import * as rsaCover from "file-loader!./img/rsa.png"
import * as passwordRhythmCover from "file-loader!./img/password/test-sample.png"

export interface Post {
	title: string
	date: string
	url: string
	img?: string
	component?: () => Promise<() => JSX.Element>
}

export const mediumPosts: Array<Post> = [
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
		url: "https://medium.com/@chetcorcos/dark-patterns-at-venmo-ef6e4a3db7fa",
	},
	{
		title: "Introduction to Parsers",
		date: "March 3, 2017",
		url: "https://medium.com/@chetcorcos/introduction-to-parsers-644d1b5d7f3d",
		img:
			"https://cdn-images-1.medium.com/max/1600/1*C3YpuL_Fo4K5rYyeAJul2w.png",
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
		date: "September 19, 2016",
		url:
			"https://tech.affirm.com/redux-patterns-and-anti-patterns-7d80ef3d53bc",
		img:
			"https://cdn-images-1.medium.com/max/1600/1*GVyqpS_9WUJDeaf2OEiynw.png",
	},
	{
		title: "How to hack your friends",
		date: "July 27, 2016",
		url:
			"https://medium.freecodecamp.org/how-to-hack-your-friends-eef055389344",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*CRdFzUjOuDE-qB0ASTk9yQ.jpeg",
	},
	{
		title: "Simple Backups with Rsync",
		date: "July 20, 2016",
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
		title: "What's the Point of GraphQL and Falcor?",
		date: "December 1, 2015",
		url:
			"https://medium.com/@chetcorcos/what-s-the-point-of-graphql-and-falcor-cdd0f35960c0",
	},
	{
		title: "Shindig: Deployment and DevOps",
		date: "November 23, 2015",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*tuHNFifrlokBT0Ixmphtgw.png",
		url:
			"https://medium.com/@chetcorcos/shindig-deployment-and-devops-a06db26aa833",
	},
	{
		title: "Shindig: Patterns and Best Practices",
		date: "November 23, 2015",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*tuHNFifrlokBT0Ixmphtgw.png",
		url:
			"https://medium.com/@chetcorcos/shindig-patterns-and-best-practices-3baffa406a75",
	},
	{
		title: "Shindig: React Data Component",
		date: "November 23, 2015",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*tuHNFifrlokBT0Ixmphtgw.png",
		url:
			"https://medium.com/@chetcorcos/shindig-react-data-component-aa0d2c82059e",
	},
	{
		title: "Shindig: React Transitions with Stylus",
		date: "November 23, 2015",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*tuHNFifrlokBT0Ixmphtgw.png",
		url:
			"https://medium.com/@chetcorcos/shindig-react-transitions-with-stylus-fab08e40818e",
	},
	{
		title: "Shindig: React Nav View Controller",
		date: "November 23, 2015",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*tuHNFifrlokBT0Ixmphtgw.png",
		url:
			"https://medium.com/@chetcorcos/shindig-react-nav-view-controller-414328034e6a",
	},
	{
		title: "Shindig: React Proxy Component",
		date: "November 23, 2015",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*tuHNFifrlokBT0Ixmphtgw.png",
		url:
			"https://medium.com/@chetcorcos/shindig-react-proxy-component-bb368510aad4",
	},
	{
		title: "Shindig: React Tab View Controller",
		date: "November 23, 2015",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*tuHNFifrlokBT0Ixmphtgw.png",
		url:
			"https://medium.com/@chetcorcos/shindig-react-tab-view-controller-48af935a5cd9",
	},
	{
		title: "Shindig: React Component Instances",
		date: "November 23, 2015",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*tuHNFifrlokBT0Ixmphtgw.png",
		url:
			"https://medium.com/@chetcorcos/shindig-react-component-instances-e8b68bf398f4",
	},
	{
		title: "Shindig: React.js + Coffeescript",
		date: "November 23, 2015",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*tuHNFifrlokBT0Ixmphtgw.png",
		url:
			"https://medium.com/@chetcorcos/shindig-react-js-coffeescript-c79d01197203",
	},
	{
		title: "Shindig: Subscription Caching and Latency Compensation",
		date: "November 23, 2015",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*tuHNFifrlokBT0Ixmphtgw.png",
		url:
			"https://medium.com/@chetcorcos/shindig-subscription-caching-and-latency-compensation-d2e01e708f31",
	},
	{
		title: "Shindig: Reactive Meteor Publish/Subscribe with Any Database",
		date: "November 23, 2015",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*tuHNFifrlokBT0Ixmphtgw.png",
		url:
			"https://medium.com/@chetcorcos/shindig-reactive-meteor-publish-subscribe-with-any-database-feb09105c343",
	},
	{
		title: "Shindig: Integrating Neo4j with Meteor",
		date: "November 23, 2015",
		img:
			"https://cdn-images-1.medium.com/max/2000/1*tuHNFifrlokBT0Ixmphtgw.png",
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
		url:
			"https://medium.com/@chetcorcos/stitching-react-components-effbec3236d4",
	},
]

export const claremontMenu: Post = {
	title: "5C Menu iPhone App",
	date: "June 2, 2012",
	url: "/posts/5cmenu",
	img: claremontMenuCover,
	component: () => import("./posts/5cMenu").then(m => m.default),
}

export const claremontMenu2: Post = {
	title: "5C Menu iPhone App - Round 2",
	date: "December 18, 2014",
	url: "/posts/5c-menu-2",
	img: claremontMenuCover2,
	component: () => import("./posts/5cMenu2").then(m => m.default),
}

export const anonymity: Post = {
	title: "Anonymity on the Internet",
	date: "September 10, 2014",
	url: "/posts/anonymity",
	component: () => import("./posts/anonymity").then(m => m.default),
}

export const blazeAnimation: Post = {
	title: "Animation with Meteor",
	date: "November 20, 2014",
	url: "/posts/blaze-animation",
	component: () => import("./posts/blazeAnimation").then(m => m.default),
}

export const blazer: Post = {
	title: "1971 Blazer Restoration",
	date: "January 1, 2010",
	url: "/posts/blazer",
	img: blazerCover,
	component: () => import("./posts/blazer").then(m => m.default),
}

export const craigslistWatch: Post = {
	title: "Craigslist Watch",
	date: "October 24, 2014",
	url: "/posts/craigslist-watch",
	component: () => import("./posts/craigslistWatch").then(m => m.default),
}

export const dns: Post = {
	title: "Configuring Your DNS",
	date: "June 6, 2014",
	url: "/posts/configure-dns",
	component: () => import("./posts/dns").then(m => m.default),
}

export const electricTruck: Post = {
	title: "Electric Truck Conversion",
	date: "September 1, 2008",
	url: "/posts/electric-truck",
	img: electricTruckCover,
	component: () => import("./posts/electricTruck").then(m => m.default),
}

export const fbGraph: Post = {
	title: "Facebook Social Network Visualization",
	date: "October 10, 2013",
	url: "/posts/fb-graph",
	img: facebookGraphCover,
	component: () => import("./posts/facebookGraph").then(m => m.default),
}

export const gitTutorial: Post = {
	title: "Git Tutorial",
	date: "May 21, 2012",
	url: "/posts/git-tutorial",
	component: () => import("./posts/gitTutorial").then(m => m.default),
}

export const gpg: Post = {
	title: "GNU Privacy Guard Tutorial",
	date: "February 10, 2014",
	url: "/posts/gpg",
	component: () => import("./posts/gpg").then(m => m.default),
}

export const guitarTuner: Post = {
	title: "Raw Guitar Tuner",
	date: "January 5, 2015",
	url: "/posts/guitar-tuner",
	img:
		"https://raw.githubusercontent.com/ccorcos/webaudio-guitar-tuner/master/public/screenshot.png",
	component: () => import("./posts/guitarTuner").then(m => m.default),
}

export const hendrixMural: Post = {
	title: "Jimi Hendrix Mural",
	date: "August 29, 2011",
	url: "/posts/hendrix",
	img: hendrixCover,
	component: () => import("./posts/hendrix").then(m => m.default),
}

export const macSetup: Post = {
	title: "Mac Development Setup",
	date: "October 17, 2014",
	url: "/posts/mac-dev-setup",
	component: () => import("./posts/macSetup").then(m => m.default),
}

export const malibu: Post = {
	title: "1965 Malibu Restoration",
	date: "September 1, 2007",
	url: "/posts/malibu",
	img: malibuCover,
	component: () => import("./posts/malibu").then(m => m.default),
}

export const meteorReact: Post = {
	title: "Meteor and React",
	date: "February 20, 2015",
	url: "/posts/meteor-react",
	component: () => import("./posts/meteorReact").then(m => m.default),
}

export const observableStreams: Post = {
	title: "Observable Streams",
	date: "February 7, 2015",
	url: "/posts/observable-streams",
	component: () => import("./posts/observableStreams").then(m => m.default),
}

export const passwordRhythm: Post = {
	title: "Password Rhythm Authentication",
	date: "March 11, 2014",
	url: "/posts/password-rhythm",
	img: passwordRhythmCover,
	component: () => import("./posts/passwordRhythm").then(m => m.default),
}

export const raspberryPiSetup: Post = {
	title: "Raspberry Pi Setup",
	date: "October 25, 2014",
	url: "/posts/raspberry-pi-setup",
	component: () => import("./posts/raspberryPiSetup").then(m => m.default),
}

export const reactiveCss: Post = {
	title: "Reactive CSS",
	date: "February 16, 2015",
	url: "/posts/reactive-css",
	component: () => import("./posts/reactiveCss").then(m => m.default),
}

export const roomTuner: Post = {
	title: "Room Tuner",
	date: "December 16, 2014",
	url: "/posts/room-tuner",
	img:
		"https://raw.githubusercontent.com/ccorcos/room-tuner/master/public/screenshot.png",
	component: () => import("./posts/roomTuner").then(m => m.default),
}

export const rsa: Post = {
	title: "RSA Encryption Tutorial",
	date: "February 22, 2014",
	url: "/posts/rsa",
	img: rsaCover,
	component: () => import("./posts/rsa").then(m => m.default),
}

export const waterfall: Post = {
	title: "Web Audio API Waterfall",
	date: "December 28, 2014",
	url: "/posts/waterfall",
	img:
		"https://raw.githubusercontent.com/ccorcos/webaudio-waterfall/master/public/screenshot.png",
	component: () => import("./posts/webAudioWaterfall").then(m => m.default),
}

export const myPosts = [
	claremontMenu,
	claremontMenu2,
	anonymity,
	blazeAnimation,
	blazer,
	craigslistWatch,
	dns,
	electricTruck,
	fbGraph,
	gitTutorial,
	gpg,
	guitarTuner,
	hendrixMural,
	macSetup,
	malibu,
	meteorReact,
	observableStreams,
	passwordRhythm,
	raspberryPiSetup,
	reactiveCss,
	roomTuner,
	rsa,
	waterfall,
]
