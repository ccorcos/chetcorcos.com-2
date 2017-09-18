import * as React from "react"
import before from "file!/img/malibu/before.jpg"
import beforeEngine from "file!/img/malibu/before-engine.jpg"
import newEngine from "file!/img/malibu/new-engine.jpg"
import buffing from "file!/img/malibu/buffing.jpg"
import doneInterior from "file!/img/malibu/done-interior.jpg"
import fixHeaders from "file!/img/malibu/fix-headers.jpg"
import done from "file!/img/malibu/done.jpg"

const data = {
	title: "1965 Malibu Restoration",
	url: "/malibu",
	date: "September 1, 2007",
}

export default () => (
	<div>
		<p>
			The summer after my freshman year of high school, I was only 6 months away
			from getting my driver’s license. My dad has always been a gearhead and
			enjoys working on cars in his free time. I had taken on his affinity of
			classic cars and he proposed that I work on a car all summer with him for
			my first car. We spend about 4-6 hours a day, 5 days a week for the entire
			summer. I can’t thank my dad enough for not only the car, but the
			experiences along the way.
		</p>
		<p>
			Picked up the car for $4,000. It is a 1965 Chevrolet Malibu, small block
			283. Interior was a wreck. The engine started but wasn’t running well.
		</p>
		<p>
			<img src={before} />
		</p>
		<p>
			First, we took the whole car apart. We pulled out the power train, the
			interior, and all the trim. We sent it out to get sand-blasted to get all
			the paint off. We also had the automatic transmission rebuilt by a
			professional because they’re incredibly complicated.
		</p>
		<p>
			<img src={beforeEngine} />
		</p>
		<p>
			In the meantime, we took the entire motor apart to clean the parts and
			rebuild it. We bought a few new parts for the engine – an aluminum exhaust
			manifold, some sexy valve covers, a new alternator and a fresh battery. We
			refurbished old parts and bolts by soaking them in gasoline to get the
			grease off, and sandblasting them until they were nice and shiny. With the
			seats, we replaced all the foam and bought new vinyl upholstery.
		</p>
		<p>
			When we got the car back, we took of the fenders to make the engine more
			accessible. On went the spark plugs, distributor, alternator, power
			brakes, power steering, water pump, fan, carburetor, and exhaust pipe
			headers.
		</p>
		<p>
			<img src={newEngine} />
		</p>
		<p>
			My dad and I did all the body work and painting ourselves for our first
			time. We vastly underestimated the amount of time it was going to take.
			Luckily, this car didn’t need much bondo and there wasn’t any rust.
		</p>
		<p>
			We had to wait about 2 weeks before we could start wet sanding the paint.
			This was an immensely tedious process. We used about 8 different grits
			making our way up to 2500 grit sand paper followed by buffing and waxing.
		</p>
		<p>
			<img src={buffing} />
		</p>
		<p>
			On to the interior, we laid speaker wire under the carpet and installed
			some 6 inch speakers under the back window. We pulled the entire dash out,
			cleaned it, painted, and rewired some of it. We replaced the door panels
			but reused most things like door handles and the rear view mirror that
			cleaned up nicely with some steel wool. We installed seat belts which
			didn’t originally come with the car. Mounted an oil and temperature gauge
			under the dash along with a stereo system. We got the ignition and doors
			rekeyed and threw the seats in.
		</p>
		<p>
			<img src={doneInterior} />
		</p>
		<p>
			All we had to do now was make sure the motor was tuned to spec, and put
			all the trim on. While the engine was running, we also noticed a clinking
			sound on every revolution of the motor. Using a rolled up piece of paper
			to trace the sound, we deduced that one of the valves was banging against
			the valve cover. We took the engine apart and sent out the heads to get
			rebuild. While getting rebuild, they found a flat spot on the cam shaft
			that was causing the clicking so we had it replaced. We put everything
			back together and sure enough, the clicking was gone.
		</p>
		<p>
			<img src={fixHeaders} />
		</p>
		<p>And here’s the finished product.</p>
		<p>
			<img src={done} />
		</p>
	</div>
)
