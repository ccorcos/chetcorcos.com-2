/* =============================================================================

	Global typescript definitions

============================================================================= */

// Need to make Typescript aware of various webpack loaders.

declare module "file-loader!*" {
	const content: string
	export = content
}
