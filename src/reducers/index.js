import { combineReducers } from 'redux'

import items from './items'
import ids from './ids'
import title from './title'

const app = combineReducers({
	title,
	ids,
	items
})

export default app