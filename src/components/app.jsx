import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

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

export default class extends React.Component {

	constructor(props) {

		super(props)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	render() {
		return App(this.props)
	}
}