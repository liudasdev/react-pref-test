import { ADD_ITEM } from '../actions'

export default function item(state = [], action) {

	switch (action.type) {
		case ADD_ITEM:
			return [
				...state,
				{
					id: action.id,
					text: "Test item: " + action.id
				}
			]
		default:
			return state
	}
}