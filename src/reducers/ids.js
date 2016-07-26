import { ADD_ITEM } from '../actions'

export default function (state = [], action) {
	switch (action.type) {
		case ADD_ITEM:
			return [
				...state,
				action.id
			]
		default:
			return state
	}
}