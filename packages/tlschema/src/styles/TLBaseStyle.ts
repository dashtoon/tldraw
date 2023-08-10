import { SetValue } from '../util-types'

/** @public */
export const TL_STYLE_TYPES = new Set([
	'color',
	'colorHex',
	'labelColor',
	'dash',
	'fill',
	'size',
	'strokeWidth',
	'font',
	'align',
	'verticalAlign',
	'icon',
	'geo',
	'arrowheadStart',
	'arrowheadEnd',
	'spline',
] as const)

/** @public */
export type TLStyleType = SetValue<typeof TL_STYLE_TYPES>

/** @public */
export interface TLBaseStyle {
	type: TLStyleType
	icon: string
}
