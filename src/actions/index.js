import uuid from 'node-uuid'

// actions
export const ADD_ITEM = 'ADD_ITEM'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const UPDATE_TITLE = 'UPDATE_TITLE'

// action creators
export function increment(id) {
	return {
		type: INCREMENT,
		id: id
	}
}

export function decrement(id) {
	return {
		type: DECREMENT,
		id: id
	}
}

export function addItem() {
	return {
		type: ADD_ITEM,
		id: uuid.v4()
	}
}

export function updateTitle() {
	return {
		type: UPDATE_TITLE,
		text: uuid.v4()
	}
}