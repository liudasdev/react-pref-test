import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/app'
import reducers from './reducers'

let store = createStore(
	reducers, 
	typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)

let unsubscribe = store.subscribe(() =>
	console.log('store > state', store.getState())
)

render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
)