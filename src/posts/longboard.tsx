import * as React from "react"
import Image from "../components/Image"
import * as board1 from "file-loader!../img/longboard/board-1.jpg"
import * as board2 from "file-loader!../img/longboard/board-2.jpg"
import * as board3 from "file-loader!../img/longboard/board-3.jpg"

export default () => (
	<div>
		<p>
			In college, I spent some time making a longboard. I don't have as many
			pictures as I'd like about the process but it was pretty easy.
		</p>
		<p>
			You need to make a mold to get some curvature to the board. Then you glue
			some birch plywood together, throw it ontop of the mold, and press it
			together. My buddy had a vacuum bag to press the board to the mold which
			is much easier than using clamps.
		</p>
		<p>
			Anyways, my first try was with four 1/8 inch ply birch and it eventually
			started to crack after a couple weeks of riding.
		</p>
		<p>
			<Image src={board1} />
		</p>
		<p>
			So I made another board with five plys and this one held up really nice.
		</p>
		<p>
			<Image src={board2} />
		</p>
		<p>
			A buddy of mine is really good at making cool psychedelic art and he
			painted this little guy on there for me!
		</p>
		<p>
			<Image src={board3} />
		</p>
		<p>
			Sadly, this board was stolen from me. Please let me know if you ever find
			it!
		</p>
	</div>
)
