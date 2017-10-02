import * as React from "react"
import * as rocketDone from "file-loader!../img/e80/e80-done.jpg"
import * as rocket0 from "file-loader!../img/e80/e80-0.jpg"
import * as rocket1 from "file-loader!../img/e80/e80-1.jpg"
import * as rocket2 from "file-loader!../img/e80/e80-2.jpg"
import * as rocket3 from "file-loader!../img/e80/e80-3.jpg"
import * as rocket4 from "file-loader!../img/e80/e80-4.jpg"
import * as rocket5 from "file-loader!../img/e80/e80-5.jpg"
import * as rocket6 from "file-loader!../img/e80/e80-6.jpg"
import * as rocket7 from "file-loader!../img/e80/e80-7.jpg"
import * as rocket8 from "file-loader!../img/e80/e80-8.jpg"
import * as rocket9 from "file-loader!../img/e80/e80-9.jpg"
import * as rocket10 from "file-loader!../img/e80/e80-10.jpg"
import * as rocketSchematic from "file-loader!../img/e80/e80-payload-schematic.jpg"
import Image from "../components/Image"
import IFrame from "../components/IFrame"

export default () => (
	<div>
		<p>
			Experimental Engineering (E80) is a class I took at Harvey Mudd College my
			sophomore year. In this class, I worked on a team to build, test,
			simulate, and equip a sensory payload to a high-power rocket. We performed
			static motor tests and wind tunnel tests to simulate the rocket in
			RockSim. I assembled the rocket payload consisting of a circuit board
			containing 3D gyros and accelerometers with voltage level shifters feeding
			into a data-logger. We calibrated the accelerometers and gyroscopes using
			a turn-table.
		</p>
		<p>
			<Image src={rocket1} />
		</p>
		<p>
			<Image src={rocketSchematic} />
		</p>
		<p>
			<Image src={rocket0} />
		</p>
		<p>
			<Image src={rocket2} />
		</p>
		<p>
			We took our rocket out to a dry lake-bed in the middle of nowhere for
			launch. We were not allowed to handle gunpowder so a proctor had to pack
			our parachute. Sadly, we were the first rocket of the day to launch and
			the ejection charge never ignited. The electronics broke, but we still had
			one flight's worth of data.
		</p>
		<p>
			<Image src={rocketDone} />
		</p>
		<p>
			<Image src={rocket5} />
		</p>
		<p>
			<Image src={rocket3} />
		</p>
		<p>
			<Image src={rocket4} />
		</p>
		<p>
			<Image src={rocket6} />
		</p>
		<p>
			With the launch data, I personally created a 6 degree of freedom model in
			MATLAB to trace the path of the rocket from the gyros and accels. It was a
			bit trickier than I had originally thought. The data was smoothed and the
			angles were converted to Eulerian angles (roll, pitch, yaw) for a better
			numerical approximation of the orientation of the rocket. Here are some of
			the pots generated from the model.
		</p>
		<p>
			<Image src={rocket7} />
		</p>
		<p>
			<Image src={rocket8} />
		</p>
		<p>
			<Image src={rocket9} />
		</p>
		<p>
			<Image src={rocket1} />
		</p>
		<p>
			The orientation of the rocket is the easiest thing to see when compared to
			a video of the rocket's flight. The most compelling correlation is the way
			the rocket started to spiral before hitting the ground, as you can see in
			the video.
		</p>
		<p>
			<IFrame src="http://www.youtube.com/embed/SAORrSUakyQ" />
		</p>
	</div>
)
