import * as React from "react"
import { AstRenderer, MarkdownParser } from "markdown-it-renderer"
import Link from "./Link"

const Renderer = new AstRenderer({
	// `root` and `text` are special cases
	root: children => <main children={children} />,
	text: value => value,

	// single paragraphs only
	p: (props, children) => <span {...props} children={children} />,

	// the rest are simply mapping xml tags to components
	a: (props, children) => <Link {...props} children={children} />,
	h1: (props, children) => <h1 {...props} children={children} />,
	h2: (props, children) => <h2 {...props} children={children} />,
	h3: (props, children) => <h3 {...props} children={children} />,
	h4: (props, children) => <h4 {...props} children={children} />,
	h5: (props, children) => <h5 {...props} children={children} />,
	span: (props, children) => <span {...props} children={children} />,
	strong: (props, children) => <strong {...props} children={children} />,
	em: (props, children) => <em {...props} children={children} />,
	blockquote: (props, children) => (
		<blockquote {...props} children={children} />
	),
	code: (props, children) => <code {...props} children={children} />,
	pre: (props, children) => <pre {...props} children={children} />,
	ul: (props, children) => <ul {...props} children={children} />,
	ol: (props, children) => <ol {...props} children={children} />,
	li: (props, children) => <li {...props} children={children} />,
	table: (props, children) => <table {...props} children={children} />,
	th: (props, children) => <th {...props} children={children} />,
	tr: (props, children) => <tr {...props} children={children} />,
	td: (props, children) => <td {...props} children={children} />,
	hr: (props, children) => <hr {...props} children={children} />,
	br: (props, children) => <br {...props} children={children} />,
	img: props => <img {...props} />,
})

const Parser = new MarkdownParser({
	linkify: true,
	typographer: true,
})

export interface MarkdownProps {
	text: string
}

export default class Markdown extends React.PureComponent<MarkdownProps, {}> {
	render() {
		return Renderer.render(Parser.parse(this.props.text))
	}
}
