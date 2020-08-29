import React, { Component } from 'react'

class DashBoard extends Component {
	render (props) {
		return (
			<div>
				<h2>This is the dashboard</h2>
				<p>{this.props.word}</p>
			</div>
		)
	}
}

export default DashBoard
