import React from 'react'
import pureRenderer from '../pure-renderer'

import Perf from './perf'
import Title from '../containers/title'
import Items from '../containers/items'

const App = () => (
  <div>
  	<Perf />
    <Title />
    <Items />
  </div>
)

class AppComponent extends React.Component {
	render() {
		return App(this.props)
	}
}

export default pureRenderer(AppComponent)