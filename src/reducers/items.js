import { ADD_ITEM } from '../actions'

const initialState = {
	items: []
}

export default function item(state = initialState, action) {

	switch (action.type) {
		case ADD_ITEM:
			return [
				...state.items,
				{
					id: action.id,
					text: "Test item: " + action.id
				}
			]
		default:
			return state
	}
}