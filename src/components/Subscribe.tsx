import * as React from "react"

const mailchimp = `

<style type="text/css">
/* MailChimp Form Embed Code - Horizontal Super Slim - 12/16/2015 v10.7
Adapted from: http://blog.heyimcat.com/universal-signup-form/ */

#mc_embed_signup form {
	font-size: 14px;
	font-family: -apple-system, "Helvetica", "Arial", sans-serif;
	text-align: center;
	padding: 10px 0 10px 0;
}

#mc_embed_signup input {
	font-size: 14px;
	font-family: -apple-system, "Helvetica", "Arial", sans-serif;
}

.mc-field-group {
	display: inline-block;
}

/* positions input field horizontally */

#mc_embed_signup input.email {
	font-family: "Open Sans", "Helvetica Neue", Arial, Helvetica, Verdana, sans-serif;
	font-size: 15px;
	border: 1px solid #ABB0B2;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	color: #343434;
	background-color: #fff;
	box-sizing: border-box;
	height: 32px;
	padding: 0px 0.4em;
	display: inline-block;
	margin: 0;
	width: 350px;
	vertical-align: top;
}

#mc_embed_signup label {
	display: block;
	font-size: 16px;
	padding-bottom: 10px;
	font-weight: bold;
}

#mc_embed_signup .clear {
	display: inline-block;
}

/* positions button horizontally in line with input */

#mc_embed_signup .button {
	font-size: 13px;
	border: none;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	letter-spacing: .03em;
	color: #fff;
	background-color: #aaa;
	box-sizing: border-box;
	height: 32px;
	line-height: 32px;
	padding: 0 18px;
	display: inline-block;
	margin: 0;
	transition: all 0.23s ease-in-out 0s;
}

#mc_embed_signup .button:hover {
	background-color: #777;
	cursor: pointer;
}

#mc_embed_signup div#mce-responses {
	float: left;
	top: -1.4em;
	padding: 0em .5em 0em .5em;
	overflow: hidden;
	width: 90%;
	margin: 0 5%;
	clear: both;
}

#mc_embed_signup div.response {
	margin: 1em 0;
	padding: 1em .5em .5em 0;
	font-weight: bold;
	float: left;
	top: -1.5em;
	z-index: 1;
	width: 80%;
}

#mc_embed_signup #mce-error-response {
	display: none;
}

#mc_embed_signup #mce-success-response {
	color: #529214;
	display: none;
}

#mc_embed_signup label.error {
	display: block;
	float: none;
	width: auto;
	margin-left: 1.05em;
	text-align: left;
	padding: .5em 0;
}

@media (max-width: 768px) {
	#mc_embed_signup input.email {
		width: 100%;
		margin-bottom: 5px;
	}
	#mc_embed_signup .clear {
		display: block;
		width: 100%
	}
	#mc_embed_signup .button {
		width: 100%;
		margin: 0;
	}
}
</style>
<div id="mc_embed_signup">
<form action="https://chetcorcos.us8.list-manage.com/subscribe/post?u=af1d27efdf84b62e7e490cedd&amp;id=f19394b3fb" method="post"
 id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
	<div id="mc_embed_signup_scroll">
		<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
		<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
		<div style="position: absolute; left: -5000px;" aria-hidden="true">
			<input type="text" name="b_af1d27efdf84b62e7e490cedd_f19394b3fb" tabindex="-1" value="">
		</div>
		<div class="clear">
			<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
		</div>
	</div>
</form>
</div>
`

export default class Subscribe extends React.PureComponent<{}, {}> {
	render() {
		return <div dangerouslySetInnerHTML={{ __html: mailchimp }} />
	}
}
