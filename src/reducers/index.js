import { combineReducers } from 'redux'

import items from './items'

import title from './title'

const app = combineReducers({
	title,
	items
})

export default app