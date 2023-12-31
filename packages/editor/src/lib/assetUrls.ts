import { version } from '../version'

/** @public */
export type TLEditorAssetUrls = {
	fonts: {
		monospace: string
		serif: string
		sansSerif: string
		draw: string
	}
}

/** @public */
export let defaultEditorAssetUrls: TLEditorAssetUrls = {
	fonts: {
		draw: `https://unpkg.com/@tldraw/assets@${version}/fonts/Shantell_Sans-Normal-SemiBold.woff2`,
		serif: `https://unpkg.com/@tldraw/assets@${version}/fonts/IBMPlexSerif-Medium.woff2`,
		sansSerif: `https://unpkg.com/@tldraw/assets@${version}/fonts/IBMPlexSans-Medium.woff2`,
		monospace: `https://unpkg.com/@tldraw/assets@${version}/fonts/IBMPlexMono-Medium.woff2`,
	},
}

/** @internal */
export function setDefaultEditorAssetUrls(assetUrls: TLEditorAssetUrls) {
	defaultEditorAssetUrls = assetUrls
}
