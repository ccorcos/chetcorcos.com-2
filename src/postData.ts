/* =============================================================================

	Metadata for all of my projects.

============================================================================= */

import * as malibuCover from "file-loader!./img/malibu/done.jpg"
import * as electricTruckCover from "file-loader!./img/etruck/done.jpg"
import * as blazerCover from "file-loader!./img/blazer.jpg"
import * as hendrixCover from "file-loader!./img/hendrix/4.jpg"
import * as claremontMenuCover from "file-loader!./img/mudd.jpg"
import * as claremontMenuCover2 from "file-loader!./img/mudd2.jpeg"
import * as facebookGraphCover from "file-loader!./img/facebook-me.png"
import * as rsaCover from "file-loader!./img/rsa.png"
import * as passwordRhythmCover from "file-loader!./img/password/test-sample.png"
import * as rocketDone from "file-loader!./img/e80/e80-done.jpg"
import * as microps1 from "file-loader!./img/microps/microps-1.jpg"
import * as internetSpeed from "file-loader!./img/internetSpeed.png"
import * as hearseCover from "file-loader!./img/hearse/hearse-done.jpg"
import * as colorMorph from "file-loader!./img/color-morph.png"
import * as gtoCover from "file-loader!./img/gto/gto-done.jpg"
import { ExternalPost, InternalPost } from "./helpers/postHelpers"

// =============================================================================
// Posts that link to an external site.
// =============================================================================

const externalPosts: Array<ExternalPost> = []

externalPosts.push({
	title: "Intuitive State Management with Reactive Magic",
	date: "July 23, 2017",
	tags: ["code"],
	url:
		"https://medium.com/@chetcorcos/intuitive-state-management-with-reactive-magic-28402fa8b73b",
	img: "https://cdn-images-1.medium.com/max/2000/1*7cW0pwtxjK0M3KGFeG7Jmw.jpeg",
})

externalPosts.push({
	title: "Martian Math",
	date: "March 16, 2017",
	tags: ["code"],
	img: "https://cdn-images-1.medium.com/max/2000/1*mK-q8ZwVLhz_XB5XUuItow.png",
	url: "https://medium.freecodecamp.org/martian-math-812a029e2ea0",
})

externalPosts.push({
	title: "Dark Patterns at Venmo",
	date: "February 9, 2017",
	tags: ["ignore"],
	img: "http://gal-aa.org/wp-content/uploads/2017/03/VenmoLogo.png",
	url: "https://medium.com/@chetcorcos/dark-patterns-at-venmo-ef6e4a3db7fa",
})

externalPosts.push({
	title: "Introduction to Parsers",
	date: "March 3, 2017",
	tags: ["code", "fp"],
	url: "https://medium.com/@chetcorcos/introduction-to-parsers-644d1b5d7f3d",
	img: "https://cdn-images-1.medium.com/max/1600/1*C3YpuL_Fo4K5rYyeAJul2w.png",
})

externalPosts.push({
	title: "Getting started with Docker in 2 minutes",
	date: "December 23, 2016",
	tags: ["code"],
	img: "https://cdn-images-1.medium.com/max/1600/1*xjh1TUq3yKAB-4HWNSCkSQ.png",
	url:
		"https://medium.com/@chetcorcos/getting-started-with-docker-in-2-minutes-fd6a7668eb39",
})

externalPosts.push({
	title: "Tolerance",
	tags: ["writing", "ignore"],
	date: "November 9, 2016",
	url: "https://medium.com/@chetcorcos/tolerance-26a446e8afbb",
	img:
		"https://images.urbanoutfitters.com/is/image/UrbanOutfitters/30968168_001_s",
})

externalPosts.push({
	title: "How much better is Yarn than NPM?",
	date: "November 3, 2016",
	tags: ["code", "ignore"],
	img: "https://cdn-images-1.medium.com/max/1600/1*ET9Q5-3_QiwxWuGw98veMg.png",
	url:
		"https://medium.com/@chetcorcos/how-much-better-is-yarn-than-npm-bd4a114a0ed5",
})

externalPosts.push({
	title: "Redux Patterns and Anti-Patterns",
	date: "September 19, 2016",
	tags: ["code", "fp"],
	url: "https://tech.affirm.com/redux-patterns-and-anti-patterns-7d80ef3d53bc",
	img: "https://cdn-images-1.medium.com/max/1600/1*GVyqpS_9WUJDeaf2OEiynw.png",
})

externalPosts.push({
	title: "How to hack your friends",
	date: "July 27, 2016",
	tags: ["code"],
	url: "https://medium.freecodecamp.org/how-to-hack-your-friends-eef055389344",
	img: "https://cdn-images-1.medium.com/max/2000/1*CRdFzUjOuDE-qB0ASTk9yQ.jpeg",
})

externalPosts.push({
	title: "Simple Backups with Rsync",
	date: "July 20, 2016",
	tags: ["code"],
	img: "http://www.freeiconspng.com/uploads/command-line-icon-1.png",
	url: "https://medium.com/@chetcorcos/simple-backups-with-rsync-b97535ca1703",
})

externalPosts.push({
	title: "Electron Dev Tool",
	date: "April 14, 2016",
	tags: ["code"],
	url: "https://medium.com/@chetcorcos/electron-dev-tool-13a4b4b3b0b",
	img: "https://cdn-images-1.medium.com/max/2000/1*GOKroXSkw0uvgX-NMAgOeg.png",
})

externalPosts.push({
	title: "Functional Programming for JavaScript People",
	date: "February 29, 2016",
	tags: ["code", "fp"],
	url:
		"https://medium.com/@chetcorcos/functional-programming-for-javascript-people-1915d8775504",
	img: "https://cdn-images-1.medium.com/max/2000/1*KPy3bUBCUFy6zqNFZys9lQ.png",
})

externalPosts.push({
	title: "Elmish: Functional Programming in Javascript",
	date: "February 24, 2016",
	tags: ["code"],
	img: "https://avatars2.githubusercontent.com/u/4359353",
	url:
		"https://medium.com/@chetcorcos/elmish-functional-programming-in-javascript-50995f1d4b9e",
})

externalPosts.push({
	title: "What's the Point of GraphQL and Falcor?",
	date: "December 1, 2015",
	tags: ["code", "ignore", "fp"],
	img: "http://graphql.org/img/logo.svg",
	url:
		"https://medium.com/@chetcorcos/what-s-the-point-of-graphql-and-falcor-cdd0f35960c0",
})

externalPosts.push({
	title: "Stitching React Components",
	date: "July 20, 2015",
	tags: ["code", "ignore"],
	img:
		"https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
	url: "https://medium.com/@chetcorcos/stitching-react-components-effbec3236d4",
})

externalPosts.push({
	title: "Smoothing and Mapping",
	date: "December 1, 2014",
	tags: ["code"],
	url: "https://github.com/ccorcos/robotics-smoothing-and-mapping",
	img:
		"https://raw.githubusercontent.com/ccorcos/robotics-smoothing-and-mapping/master/img/single-dense-after.png",
})

externalPosts.push({
	title: "Interactive Object Recognition",
	date: "July 1, 2014",
	tags: ["code", "ml"],
	url: "https://github.com/ccorcos/towards-interactive-object-recognition",
	img:
		"https://github.com/ccorcos/towards-interactive-object-recognition/raw/master/model.png",
})

externalPosts.push({
	title: "How does Meteor's Tracker work?",
	date: "April 22, 2015",
	tags: ["code", "writing", "ignore"],
	img:
		"https://raw.githubusercontent.com/mjhea0/meteor-in-action/master/images/meteor.jpeg",
	url: "https://github.com/ccorcos/meteor-track",
})

externalPosts.push({
	title: "Functional Declarative JavaScript",
	date: "November 14, 2016",
	tags: ["code", "ml"],
	img:
		"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
	url: "https://ccorcos.github.io/functional-decarative-javascript-preso/#/",
})

externalPosts.push({
	title: "Doug",
	date: "December 22, 2016",
	tags: ["code", "ignore"],
	img:
		"https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/hammer_1f528.png",
	url: "https://github.com/ccorcos/doug",
})

externalPosts.push({
	title: "Airtable Blog",
	date: "February 20, 2017",
	tags: ["code", "ignore"],
	img:
		"https://seeklogo.com/images/A/airtable-logo-216B9AF035-seeklogo.com.png",
	url: "https://github.com/ccorcos/airtable-blog",
})

externalPosts.push({
	title: "Cube",
	date: "March 12, 2017",
	tags: ["code"],
	url: "https://github.com/ccorcos/cube",
	img: "https://raw.githubusercontent.com/ccorcos/cube/master/cube.png",
})

externalPosts.push({
	title: "rURL",
	date: "March 14, 2017",
	tags: ["code", "ignore"],
	img: "http://www.freeiconspng.com/uploads/command-line-icon-1.png",
	url: "https://github.com/ccorcos/rURL",
})

externalPosts.push({
	title: "Spiral",
	date: "March 20, 2017",
	tags: ["code", "art"],
	url: "https://github.com/ccorcos/spiral",
	img:
		"https://static1.squarespace.com/static/534da071e4b09a268e6bd84a/t/58d27f01f5e231be5b2aea86/1490190086885/Chet+Corcos+v2.jpg",
})

externalPosts.push({
	title: "Reason for fun (and profit)",
	date: "March 28, 2017",
	tags: ["code", "ignore", "fp"],
	url: "https://github.com/ccorcos/reason-for-fun",
	img: "https://pbs.twimg.com/profile_images/750811941778567168/xXynKg9m.jpg",
})

externalPosts.push({
	title: "Arbol",
	date: "April 2, 2017",
	tags: ["code", "ignore"],
	img: "https://pythonschool.net/data-structures-algorithms/images/tree.jpg",
	url: "https://github.com/ccorcos/arbol",
})

externalPosts.push({
	title: "Circle",
	date: "April 23, 2017",
	tags: ["code", "art", "music"],
	img:
		"https://raw.githubusercontent.com/ccorcos/circle/master/assets/logo.png",
	url: "https://github.com/ccorcos/circle",
})

externalPosts.push({
	title: "Groove Salad",
	date: "May 13, 2017",
	tags: ["code", "music"],
	img: "https://tonejs.github.io/assets/images/groove-salad.png",
	url: "https://github.com/ccorcos/groove-salad",
})

externalPosts.push({
	title: "Key Wheel",
	date: "June 25, 2017",
	tags: ["code", "music"],
	img: "https://raw.githubusercontent.com/ccorcos/key-wheel/master/logo.png",
	url: "https://ccorcos.github.io/key-wheel/",
})

externalPosts.push({
	title: "Roland RD-100 Midi Patch",
	date: "August 7, 2017",
	tags: ["code", "music", "ignore"],
	img: "http://www.dartlist.com/wp-content/uploads/2015/06/IMG_1489.jpg",
	url: "https://github.com/ccorcos/roland-midi-patch",
})

externalPosts.push({
	title: "Theano Deep Learning Models",
	date: "February 25, 2015",
	tags: ["code", "ignore", "ml"],
	img:
		"https://qph.ec.quoracdn.net/main-thumb-t-449747-200-vosprwwgrsgxbcuogpvzqfdrnccpscnt.jpeg",
	url: "https://github.com/ccorcos/deep-learning",
})

externalPosts.push({
	title: "Color Morph",
	date: "April 19, 2017",
	tags: ["code", "art"],
	url: "https://www.shadertoy.com/view/XsSyWw",
	img: colorMorph,
	// https://github.com/ccorcos/morph
})

// =============================================================================
// Posts that link to an internal link.
// =============================================================================

const internalPosts: Array<InternalPost> = []

export const claremontMenu: InternalPost = {
	title: "5C Menu iPhone App",
	date: "June 2, 2012",
	tags: ["code"],
	alias: "/projects/2012/06/02/5c-menu-app.html",
	img: claremontMenuCover,
	component: () => import("./posts/5cMenu").then(m => m.default),
}
internalPosts.push(claremontMenu)

export const claremontMenu2: InternalPost = {
	title: "5C Menu iPhone App - Round 2",
	date: "December 18, 2014",
	tags: ["code"],
	alias: "/projects/2014/12/18/5c-menu-round-2.html",
	img: claremontMenuCover2,
	component: () => import("./posts/5cMenu2").then(m => m.default),
}
internalPosts.push(claremontMenu2)

export const anonymity: InternalPost = {
	title: "Anonymity on the Internet",
	date: "September 10, 2014",
	tags: ["writing", "ignore"],
	alias: "/projects/2014/09/10/anonymity-no-the-internet.html",
	img:
		"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Tor-logo-2011-flat.svg/1200px-Tor-logo-2011-flat.svg.png",
	component: () => import("./posts/anonymity").then(m => m.default),
}
internalPosts.push(anonymity)

export const blazeAnimation: InternalPost = {
	title: "Animation with Meteor",
	date: "November 20, 2014",
	tags: ["code", "ignore"],
	img:
		"https://images.techhive.com/images/article/2013/12/meteor-js-background-100160552-primary.idge.jpg",
	alias: "/projects/2014/11/20/blaze-animation.html",
	component: () => import("./posts/blazeAnimation").then(m => m.default),
}
internalPosts.push(blazeAnimation)

export const blazer: InternalPost = {
	title: "1971 Blazer Restoration",
	date: "January 1, 2010",
	tags: ["cars"],
	alias: "/projects/2010/01/01/1971-blazer.html",
	img: blazerCover,
	component: () => import("./posts/blazer").then(m => m.default),
}
internalPosts.push(blazer)

export const craigslistWatch: InternalPost = {
	title: "Craigslist Watch",
	date: "October 24, 2014",
	tags: ["code", "ignore"],
	img: "http://askthemanager.com/wp-content/uploads/2016/12/cl1.jpg",
	alias: "/projects/2014/10/24/craigslist-watch.html",
	component: () => import("./posts/craigslistWatch").then(m => m.default),
}
internalPosts.push(craigslistWatch)

export const dns: InternalPost = {
	title: "Configuring Your DNS",
	date: "June 6, 2014",
	tags: ["code", "ignore"],
	alias: "/projects/2014/06/20/configuring-your-dns.html",
	img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/World_wide_web.jpg",
	component: () => import("./posts/dns").then(m => m.default),
}
internalPosts.push(dns)

export const electricTruck: InternalPost = {
	title: "Electric Truck Conversion",
	date: "September 1, 2008",
	tags: ["cars", "eng"],
	alias: "/projects/2008/09/01/electric-truck.html",
	img: electricTruckCover,
	component: () => import("./posts/electricTruck").then(m => m.default),
}
internalPosts.push(electricTruck)

export const fbGraph: InternalPost = {
	title: "Facebook Social Network Visualization",
	date: "October 10, 2013",
	tags: ["code"],
	alias: "/projects/2013/10/10/facebook-network.html",
	img: facebookGraphCover,
	component: () => import("./posts/facebookGraph").then(m => m.default),
}
internalPosts.push(fbGraph)

export const gitTutorial: InternalPost = {
	title: "Git Tutorial",
	date: "May 21, 2012",
	tags: ["code"],
	img: "https://git-for-windows.github.io/img/git_logo.png",
	alias: "/projects/2012/05/21/git-tutorial.html",
	component: () => import("./posts/gitTutorial").then(m => m.default),
}
internalPosts.push(gitTutorial)

export const gpg: InternalPost = {
	title: "GNU Privacy Guard Tutorial",
	date: "February 10, 2014",
	tags: ["code"],
	img:
		"http://4.bp.blogspot.com/-bTyvY1fiIms/UJUvW6kx-hI/AAAAAAAAANw/qRfbfEKJ6sU/s400/gnupg.png",
	alias: "/projects/2014/02/10/gnupg-tutorial.html",
	component: () => import("./posts/gpg").then(m => m.default),
}
internalPosts.push(gpg)

export const guitarTuner: InternalPost = {
	title: "Raw Guitar Tuner",
	date: "January 5, 2015",
	tags: ["music"],
	alias: "/projects/2015/01/05/guitar-tuner.html",
	img:
		"https://raw.githubusercontent.com/ccorcos/webaudio-guitar-tuner/master/public/screenshot.png",
	component: () => import("./posts/guitarTuner").then(m => m.default),
}
internalPosts.push(guitarTuner)

export const hendrixMural: InternalPost = {
	title: "Jimi Hendrix Mural",
	date: "August 29, 2011",
	tags: ["art"],
	alias: "/projects/2011/08/29/hendrix-mural.html",
	img: hendrixCover,
	component: () => import("./posts/hendrix").then(m => m.default),
}
internalPosts.push(hendrixMural)

export const macSetup: InternalPost = {
	title: "Mac Development Setup",
	date: "October 17, 2014",
	tags: ["code", "writing", "ignore"],
	img:
		"https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png",
	alias: "/projects/2014/10/17/mac-dev-setup.html",
	component: () => import("./posts/macSetup").then(m => m.default),
}
internalPosts.push(macSetup)

export const malibu: InternalPost = {
	title: "1965 Malibu Restoration",
	date: "September 1, 2007",
	tags: ["cars", "eng"],
	alias: "/projects/2007/09/01/1965-mailibu.html",
	img: malibuCover,
	component: () => import("./posts/malibu").then(m => m.default),
}
internalPosts.push(malibu)

export const hearse: InternalPost = {
	title: "1960 Cadillac Hearse Restoration",
	date: "August 1, 2006",
	tags: ["cars", "eng"],
	img: hearseCover,
	component: () => import("./posts/hearse").then(m => m.default),
}
internalPosts.push(hearse)

export const gto: InternalPost = {
	title: "1966 Pontiac GTO Restoration",
	date: "August 1, 2009",
	tags: ["cars", "eng"],
	img: gtoCover,
	component: () => import("./posts/gto").then(m => m.default),
}
internalPosts.push(gto)

export const meteorReact: InternalPost = {
	title: "Meteor and React",
	date: "February 20, 2015",
	tags: ["code", "ignore"],
	alias: "/projects/2015/02/20/meteor-react.html",
	img:
		"https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
	component: () => import("./posts/meteorReact").then(m => m.default),
}
internalPosts.push(meteorReact)

export const observableStreams: InternalPost = {
	title: "Observable Streams",
	date: "February 7, 2015",
	tags: ["code", "ignore"],
	alias: "/projects/2015/02/07/observable-streams.html",
	img: "http://notes.lucida.me/images/rxjava/marble_flatmap.png",
	component: () => import("./posts/observableStreams").then(m => m.default),
}
internalPosts.push(observableStreams)

export const passwordRhythm: InternalPost = {
	title: "Password Rhythm Authentication",
	date: "March 11, 2014",
	tags: ["code", "ml"],
	alias: "/projects/2014/03/11/password-rhythm.html",
	img: passwordRhythmCover,
	component: () => import("./posts/passwordRhythm").then(m => m.default),
}
internalPosts.push(passwordRhythm)

export const raspberryPiSetup: InternalPost = {
	title: "Raspberry Pi Setup",
	date: "October 25, 2014",
	tags: ["code"],
	img: "https://www.raspberrypi.org/app/uploads/2011/10/Raspi-PGB001.png",
	alias: "/projects/2014/10/25/raspberry-pi-setup.html",
	component: () => import("./posts/raspberryPiSetup").then(m => m.default),
}
internalPosts.push(raspberryPiSetup)

export const reactiveCss: InternalPost = {
	title: "Reactive CSS",
	date: "February 16, 2015",
	tags: ["code", "ignore"],
	alias: "/projects/2015/02/16/reactive-css.html",
	img: "http://www.codingdojo.com/blog/wp-content/uploads/css.jpg",
	component: () => import("./posts/reactiveCss").then(m => m.default),
}
internalPosts.push(reactiveCss)

export const roomTuner: InternalPost = {
	title: "Room Tuner",
	date: "December 16, 2014",
	tags: ["music"],
	alias: "/projects/2014/12/16/room-tuner.html",
	img:
		"https://raw.githubusercontent.com/ccorcos/room-tuner/master/public/screenshot.png",
	component: () => import("./posts/roomTuner").then(m => m.default),
}
internalPosts.push(roomTuner)

export const rsa: InternalPost = {
	title: "RSA Encryption Tutorial",
	date: "February 22, 2014",
	tags: ["code"],
	alias: "/projects/2014/02/22/rsa-tutorial.html",
	img: rsaCover,
	component: () => import("./posts/rsa").then(m => m.default),
}
internalPosts.push(rsa)

export const waterfall: InternalPost = {
	title: "Web Audio API Waterfall",
	date: "December 28, 2014",
	tags: ["art", "music"],
	alias: "/projects/2014/12/20/webaudio-waterfall.html",
	img:
		"https://raw.githubusercontent.com/ccorcos/webaudio-waterfall/master/public/screenshot.png",
	component: () => import("./posts/webAudioWaterfall").then(m => m.default),
}
internalPosts.push(waterfall)

export const e80: InternalPost = {
	title: "High Power Rockets",
	date: "May 30, 2011",
	tags: ["eng"],
	img: rocketDone,
	component: () => import("./posts/e80").then(m => m.default),
}
internalPosts.push(e80)

export const microps: InternalPost = {
	title: "One-Handed Keyboard",
	date: "December 10, 2011",
	tags: ["code", "eng"],
	img: microps1,
	component: () => import("./posts/microps").then(m => m.default),
}
internalPosts.push(microps)

export const opencv: InternalPost = {
	title: "OpenCV Eye Feature Tracker",
	date: "May 30, 2012",
	tags: ["code", "ml"],
	img: "https://i.ytimg.com/vi/LHfUeyxhgvk/hqdefault.jpg",
	component: () => import("./posts/opencv").then(m => m.default),
}
internalPosts.push(opencv)

export const speedtest: InternalPost = {
	title: "Internet Speed Logger",
	date: "September 18, 2013",
	tags: ["code"],
	img: internetSpeed,
	component: () => import("./posts/speedtest").then(m => m.default),
}
internalPosts.push(speedtest)

export const shindig: InternalPost = {
	title: "Shindig",
	date: "November 23, 2015",
	tags: ["code"],
	img: "https://cdn-images-1.medium.com/max/2000/1*tuHNFifrlokBT0Ixmphtgw.png",
	component: () => import("./posts/shindig").then(m => m.default),
}
internalPosts.push(shindig)

export { externalPosts, internalPosts }
