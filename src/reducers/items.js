import { 
	ADD_ITEM,
	INCREMENT,
	DECREMENT
} from '../actions'


export default function item(state = [], action) {

	switch (action.type) {
		case ADD_ITEM:
			return [
				...state,
				{
					id: action.id,
					count: 0,
					text: "Test item: " + action.id
				}
			]
		case INCREMENT:
			return state.map((item) => {

				if (item.id !== action.id) {
					return item
				}

				return Object.assign({}, item, {
					count: item.count + 1
				})
			})
		case DECREMENT:
			return state.map((item) => {

				if (item.id !== action.id) {
					return item
				}

				return Object.assign({}, item, {
					count: item.count - 1
				})
			})
		default:
			return state
	}
}