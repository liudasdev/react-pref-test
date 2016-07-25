import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import app from './reducers'
let store = createStore(app)

import App from './components/app'

render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
)