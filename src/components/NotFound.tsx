import Component from "reactive-magic/component"
import * as world from "../world"

export interface NotFoundProps {}

export default class NotFound extends Component<NotFoundProps> {
	willMount() {
		setTimeout(() => world.history.push("/"), 0)
	}
}
