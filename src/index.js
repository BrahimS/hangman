import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.css'

//import DashBoard from './components/Dashbord'

class ButtonPad extends Component {
	constructor (props) {
		super(props)
		this.state = {
			letters    : [
				['A', 'B', 'C', 'D', 'E', 'F'],
				['G', 'H', 'I', 'K', 'L', 'M'],
				['N', 'O', 'P', 'Q', 'R', 'S'],
				['T', 'U', 'V', 'X', 'Y', 'Z']
			],
			targetWord : props.targetWord
		}
	}
	render () {
		const letterGrid = this.state.letters.map((row, index) => (
			<p key={index}>{row.map((letter, index) => <button key={index}>{letter}</button>)}</p>
		))

		return <div>{letterGrid}</div>
	}
}
class Letter extends Component {
	render () {
		return <span className="letter">{this.props.value}</span>
	}
}

class DashBoard extends Component {
	render () {
		let letters = []
		this.props.word.split('').forEach((letter, index) => {
			letters.push(<Letter value={letter} key={index} />)
		})
		return (
			<div>
				<h2>This is the dashboard</h2>
				<div>{letters}</div>
				<div>
					<ButtonPad targetWord={this.props.targetWord} />
				</div>
			</div>
		)
	}
}
class HangMan extends Component {
	render () {
		return (
			<div>
				<h1>My Hangman Game</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere
					aliquam doloremque quam minus consequatur tenetur enim, quisquam amet, placeat
					fugit! Dicta, temporibus. Optio, pariatur at velit quae aliquam cum.
				</p>
				<div>
					<DashBoard word="Salamoalykoum" />
				</div>
			</div>
		)
	}
}

ReactDOM.render(<HangMan />, document.getElementById('root'))
