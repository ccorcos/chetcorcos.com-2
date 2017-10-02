import * as React from "react"
import Image from "../components/Image"
import IFrame from "../components/IFrame"
import * as microps1 from "file-loader!../img/microps/microps-1.jpg"
import * as microps2 from "file-loader!../img/microps/microps-2.jpg"
import * as microps3 from "file-loader!../img/microps/microps-3.jpg"
import * as microps4 from "file-loader!../img/microps/microps-4.jpg"
import * as micropsV2 from "file-loader!../img/microps/microps-v2.jpg"

export default () => (
	<div>
		<p>
			<Image src={microps1} />
		</p>

		<p>
			My junior year at Harvey Mudd, I took a class called Microprocessor Design
			and Application (E155). This class follows a digital electronics course
			where we design and implement a MIPS multicycle processor in System
			Verilog and implement it on an FPGA. In this course, we assemble a board
			with a PIC32 microcontroller and an Altera Vertex 2 FPGA. In this class,
			we learn various things from time-multiplexing displays, bluetooth serial
			communication, displaying to a CRT display through an FPGA, and
			controlling a mouse on screen. This class culminates with a paired final
			project. Max Gonzalez and I decided to develop a one-handed keyboard.
		</p>

		<p>
			<Image src={microps2} />
			<Image src={microps3} />
			<Image src={microps4} />
		</p>

		<p>
			The keyboard was assembled with unnecessarily large arcade buttons.
			However, they were cheap and easy to find. The microcontroller would poll
			the buttons to figure out what keys had been pressed or are being held
			down. It would then compute the letters for the keyboard helper and send
			that information to the FPGA through a UART. The FPGA then looks up the
			bits for each character in a lookup table and displays them in a custom
			build word processor on a CRT display. Check out the video for more
			information
		</p>

		<p>
			<IFrame src="http://www.youtube.com/embed/23V3UcKeFqk" />
		</p>

		<p>
			I made another prototype the following winter break. This time, I
			implemented it on an Arduino R3 and send commands to a computer through
			USB. With the difficulties involved in finding nice buttons, I decided to
			go with capacitive touch sensors as well. I included added fucntionality
			for using keyboard arrows, applying Shift, etc.
		</p>

		<p>
			<Image src={micropsV2} />
		</p>
	</div>
)
