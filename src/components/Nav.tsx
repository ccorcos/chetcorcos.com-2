import * as React from "react"
import Component from "reactive-magic/component"
import * as icon from "file-loader!../img/icon.jpg"
import * as colors from "../helpers/colors"
import Link from "./Link"
import * as world from "../world"

export interface NavProps {}

export default class Nav extends Component<NavProps> {
	view() {
		return (
			<div
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					height: 70,
					background: "white",
					zIndex: 10,
					boxShadow: world.scrollY.get() > 5 ? "#DDD 0px 0px 10px" : "none",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						padding: "16px 20px",
						display: "flex",
						alignItems: "center",
						height: 38,
					}}
				>
					<img
						src={icon}
						style={{ height: 38, width: 38, borderRadius: 38, marginRight: 10 }}
					/>
					<span style={{ color: colors.grey }}>Chet Corcos</span>
				</div>

				<div
					style={{
						position: "absolute",
						top: 0,
						right: 0,
						padding: "16px 20px",
						display: "flex",
						alignItems: "center",
						height: 38,
					}}
				>
					<Link href="/news" style={{ color: colors.grey }}>
						chet's news
					</Link>
				</div>
			</div>
		)
	}
}
