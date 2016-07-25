import React from 'react'
import { connect } from 'react-redux'

import Title from '../components/title'

function mapStateToProps(state) {
	return {
		text: state.title
	}
}

export default connect(
	mapStateToProps
)(Title)