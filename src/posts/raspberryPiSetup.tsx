import * as React from "react"

export default () => (
	<div>
		<p>
			I have a few Raspberry Pi’s now, but my favorite thing to do with them is
			hardwire them to the ethernet run cron jobs. So I thought I’d give a quick
			introduction on how to setup your Pi.
		</p>
		<h2>Setup</h2>
		<p>
			After installing Raspian on your SD card and booting up your Pi, its
			helpful to install the{" "}
			<a href="http://en.wikipedia.org/wiki/Avahi_(software)">
				avahi-daemon
			</a>{" "}
			so you can ssh into your Pi over your local network without knowing the IP
			address.
		</p>
		<pre>
			<code>
				$ sudo apt-get update $ sudo apt-get upgrade $ sudo apt-get install
				avahi-daemon
			</code>
		</pre>
		<p>Now you can ssh into your Pi using the hostname.</p>
		<pre>
			<code>$ ssh pi@raspberrypi.local</code>
		</pre>
		<p>
			If you’re me, you’ll add an alias to your <code>.bashrc</code> (not on
			your Pi stupid!).
		</p>
		<pre>
			<code>alias pi=&quot;ssh pi@raspberrypi.local&quot;</code>
		</pre>
		<p>
			I also like using Vim because I’m most familiar with it. But you have to
			install it!
		</p>
		<pre>
			<code>
				$ sudo apt-get install vim $ echo &quot;set nocompatible&quot; &gt;
				~/.vimrc $ echo &quot;export VISUAL=vim&quot; &gt; ~/.bashrc $ echo
				&quot;export EDITOR=$VISUAL&quot; &gt; ~/.bashrc
			</code>
		</pre>
		<p>
			And because almost all scripts I run on my Pi using Python, the pip
			package manager is incredibly useful.
		</p>
		<pre>
			<code>$ sudo apt-get install python-pip</code>
		</pre>
		<h2>Cron Jobs</h2>
		<p>
			Cron jobs are awesome. They allow you to schedule scripts to run at a
			certain time.
		</p>
		<p>
			Setting up a cron job on your pi is pretty easy. All the cron jobs on your
			computer are listed in a single file. The format of the file is{" "}
			<a href="http://www.raspberrypi.org/documentation/linux/usage/cron.md">
				explained pretty well here
			</a>.
		</p>
		<p>To edit the cron jobs, use the following command.</p>
		<pre>
			<code>$ crontab -e</code>
		</pre>
		<p>
			There are all kinds of fun and useful things you can do with this. For
			example, you can user my{" "}
			<a href="https://github.com/ccorcos/craigslist-watch">
				Craigslist Watch
			</a>{" "}
			program to parse through apartments on craigslist every day and send you
			an email with the results.
		</p>
		<pre>
			<code>
				# Craigslist Script 0 18 * * * cd /home/pi/programs/craigslist-watch/
				&amp;&amp; python craigslist.py
			</code>
		</pre>
		<p>
			Note that its a good idea to{" "}
			<code>cd /path/to/dir/ &amp;&amp; python program.py</code> just in case
			your program is importing any files from the same directory.
		</p>
		<p>
			You can also setup an{" "}
			<a href="https://github.com/ccorcos/internet-speed-log">
				internet speed logger that tests your internet speed every hour
			</a>. This way, you can call up your internet service provider and get
			your internet bill prorated for the sluggish internet speeds below their
			quoted rate!
		</p>
		<pre>
			<code>
				# Speedtest 0 * * * * cd /home/pi/programs/internet-speed-log/
				&amp;&amp; python speedtest.py
			</code>
		</pre>
		<p>
			Or you could setup a cron job to{" "}
			<a href="https://github.com/ccorcos/southwest-checkin">
				check-in to your Southwest Airlines flight exactly 24 hours before the
				flight so you get an A boarding pass
			</a>.
		</p>
		<pre>
			<code>
				# Southwest Check-in Script 20 14 19 04 * cd python
				/home/pi/programs/southwest-checkin/checkin.py Chet Corcos G78ZOV
				ccorcos@gmail.com
			</code>
		</pre>
		<p>
			But wait, make sure you setup your timezone so these run at the correct
			time!
		</p>
		<pre>
			<code>$ sudo raspi-config</code>
		</pre>
		<p>
			Go to internationalization options &gt; timezone and set it to your
			timezone. Now you’re good to go! Have fun, and let me know of any awesome
			cron jobs your set up on your Raspberry Pi!
		</p>
		<p>
			If you are having any trouble and it seems the jobs aren’t running as
			you’d expect them to, then check out the logs.
		</p>
		<pre>
			<code>$ cat /var/log/syslog</code>
		</pre>
	</div>
)
