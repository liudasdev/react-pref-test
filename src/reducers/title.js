import { UPDATE_TITLE } from '../actions'

const initialState = "TITLE"

function title(state = initialState, action) {

	switch (action.type) {
		case UPDATE_TITLE:
			return action.text
		default:
			return state
	}
}

export default title