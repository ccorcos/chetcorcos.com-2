import * as React from "react"

export default () => (
	<div>
		<p>
			I'm looking for a new apartment and its just such a hassle here in LA.
			Housing prices are so expensive and the good places are swooped up the
			same day the go up. Another big frustration is having to go through heaps
			of spam on Craigslist and the inadequate search tools and filtering. So I
			set out to make a program to offload some of this work and send me an
			email every day of the apartments I should check out.
		</p>
		<p>
			I also recently discovered an awesome free “data extrator” service called{" "}
			<a href="https://import.io/">Import.io</a>. Their app allows you to create
			an API using a GUI and an intelligent parsing algorithm to get all the
			data you want. Then you can just cURL an API to get a JSON string of the
			results. This saved a ton of time.
		</p>
		<p>
			Lastly, I setup a cron job on my Raspberry Pi to check for results, filter
			them, and send me an email every day at 6pm. Its working great.{" "}
			<a href="https://github.com/ccorcos/craigslist-watch">
				The code is available on Github
			</a>{" "}
			and you may want to check out my blog post about setting up your Raspberry
			Pi to run the cron job for you.
		</p>
	</div>
)
