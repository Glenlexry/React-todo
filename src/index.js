import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			term: '',
			items: [],
			listNum: 0,
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.removeTodo		=	this.removeTodo.bind(this);
	}

	handleChange(e) {
		this.setState({
			term: e.target.value,
		})
	}

	handleSubmit(e) {
		this.state.term.length <= 0 ? false : this.setState({
			term: '',
			items: [...this.state.items,this.state.term],
			listNum: this.state.listNum + 1,
		});
		e.preventDefault();
	}

	removeTodo(item){
		this.setState({
			items: this.state.items.filter(i => i !== item),
			listNum: this.state.listNum - 1,
		})
	}

	render() {
		return (
			<div className="App">
				<h1>TodoList ({this.state.listNum})</h1>
					<form onSubmit={this.handleSubmit}>
						<input value={this.state.term} onChange={this.handleChange}  />
						<button>Submit</button>
					</form>
				<List items={this.state.items} removeTodo={this.removeTodo} />
			</div>
		)
	}
}

class List extends React.Component {
	render() {
		return (
			<ul>
				{this.props.items.map((item,index) =>
					<li onClick={(e) => this.props.removeTodo(item)} key={index}>{item}</li>
				)}
			</ul>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
