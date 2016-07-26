import { 
	ADD_ITEM, 
	INCREMENT, 
	DECREMENT 
} from '../actions'

export default function (state = {}, action) {

	const item = state[action.id]

	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				[action.id]: {
					count: 0,
					text: "Test item: " + action.id
				}
			}
		case INCREMENT:
			return {
				...state,
				[action.id]: {
					...item, 
					count: item.count + 1
				}
			}
		case DECREMENT:
			return {
				...state,
				[action.id]: {
					...item, 
					count: item.count - 1
				}
			}
		default:
			return state
	}
}