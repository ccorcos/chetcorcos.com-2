import * as React from "react"
import done from "file!../img/etruck/done.jpg"
import grinder from "file!../img/etruck/grinder.jpg"
import welding from "file!../img/etruck/welding.jpg"
import batteries from "file!../img/etruck/batteries.jpg"
import shocks from "file!../img/etruck/shocks.jpg"
import motor from "file!../img/etruck/holding-motor.jpg"
import clutch from "file!../img/etruck/mounted-clutch.jpg"
import relays from "file!../img/etruck/relays.jpg"
import controller from "file!../img/etruck/controller.jpg"
import thinking from "file!../img/etruck/thinking.jpg"
import sign from "file!../img/etruck/sign.jpg"

export default () => (
	<div>
		<p>
			After two summers interning at UC Davis building plug-in hybrid-electric
			vehicles, my dad suggested I build an electric truck. This 1999 Chevrolet
			S-10 pick-up was a perfect vehicle to be converted. It had a blown motor
			and we could easily weld battery trays under the bed.
		</p>
		<p>
			<img src={done} />
		</p>
		<p>
			This was a long and frustrating project. We figured things out my calling
			up manufacturers of different parts and asking how to use them! Most of
			the parts came from{" "}
			<a href="http://www.canev.com">Canada Electric Vehicles Ltd.</a>
		</p>
		<p>
			First, we stripped the car of anything that wasn’t needed: the gas tank,
			exhaust pipes, engine, etc.
		</p>
		<p>
			<img src={grinder} />
		</p>
		<p>Then, we welded battery trays under the bed.</p>
		<p>
			<img src={welding} />
		</p>
		<p>
			We used 20 6V deep cycle marine batteries wired in series to get 120V DC
			power. These batteries, however, periodically need to be filled with
			deionized water so we mounted the bed on hinges for easy access.
		</p>
		<p>
			<img src={batteries} />
		</p>
		<p>
			We also beefed up the suspension with some air bags to hold the extra
			weight (~ 1/2 ton) of the batteries.
		</p>
		<p>
			<img src={shocks} />
		</p>
		<p>
			Next, mounted the clutch on the motor and mounted it to the 5-speed manual
			transmission.
		</p>
		<p>
			<img src={motor} />
			<img src={clutch} />
		</p>
		<p>
			The next challenge was fitting everything under the hood. We put the
			charging unit inside the cabin in the back feeding the power outlet
			through the old fuel door. We designed all the circuits laid out all of
			the relays right next to the high voltage and low voltage buses.
		</p>
		<p>
			<img src={relays} />
		</p>
		<p>
			We mounted the 3-phase DC controller on a huge heat sync and mounted it on
			hinges on top of the motor.
		</p>
		<p>
			<img src={controller} />
		</p>
		<p>
			We had many frustrating hours staring at diagrams and calling
			manufacturers.
		</p>
		<p>
			<img src={thinking} />
		</p>
		<p>
			Eventually, it powered up. Luckily, we had the truck on stands because the
			potentiometer for the accelerator was backwards. We hadn’t wired it wrong
			– the internal throttle spring pulls the lever in the full throttle
			direction! Once we fixed that, the truck was ready for it’s maiden voyage.
		</p>
		<div>
			<iframe
				width="420"
				height="315"
				src="//www.youtube.com/embed/ufjlHxnmjWQ"
			/>
		</div>
		<p>
			This project was invaluable for getting me into a good college. On my
			admission letter from Harvey Mudd College, they were excited to have me
			bring the truck to school. My sophomore year, I brought it down to school
			and they build me a plug in the parking lot with my own designated parking
			space!
		</p>
		<img src={sign} />
	</div>
)
