import { TLEventHandlers } from '../../../types/event-types'
import { StateNode } from '../../StateNode'

export class Idle extends StateNode {
	static override id = 'idle'

	onPointerDown: TLEventHandlers['onPointerDown'] = (info) => {
		this.parent.transition('drawing', info)
	}

	onEnter = () => {
		this.editor.setCursor({ type: 'cross' })
	}

	onCancel = () => {
		this.editor.setSelectedTool('select')
	}
}
