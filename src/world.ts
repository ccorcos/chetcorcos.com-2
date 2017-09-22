import { Value } from "reactive-magic"
import * as _ from "lodash"

export const windowSize = new Value({
	width: window.innerWidth,
	height: window.innerWidth,
})

window.addEventListener(
	"resize",
	_.throttle(event => {
		windowSize.set({
			width: window.innerWidth,
			height: window.innerWidth,
		})
	}, 100)
)
