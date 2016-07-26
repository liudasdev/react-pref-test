import { List } from 'immutable'

import { 
	ADD_ITEM,
	INCREMENT,
	DECREMENT
} from '../actions'

const initialState = new List()

export default function (state = initialState, action) {

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
			console.log('state', state)
			return state.update(
				state.findIndex(function(item) { 
					return item.id === action.id; 
				}), 
				function(item) {
					return item.set('count', item.count + 1);
				}
			)
		case DECREMENT:
			return state.update(
				state.findIndex(function(item) { 
					return item.get('id') === action.id; 
				}), 
				function(item) {
					return item.set('count', item.get('count') - 1);
				}
			)
		default:
			return state
	}
}