import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import app from './reducers'

let store = createStore(
	app, 
	typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)

import App from './components/app'

render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
)