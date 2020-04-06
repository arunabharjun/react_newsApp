import React, { Component, useState } from 'react';

class Counter_Class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	increment = () => {
		this.setState({
			count: this.state.count + 1
		});
	};

	reset = () => {
		this.setState({
			count: 0
		});
	};

	render() {
		return (
			<div>
				<button
					type='button'
					class='btn btn-raised btn-outline-success btn-lg btn-block'
					onClick={this.increment}
				>
					Clicked {this.state.count} times
				</button>
				<br />
				<center>
					<button onClick={this.reset} type='button' class='btn btn-success bmd-btn-fab'>
						<i class='material-icons'>refresh</i>
					</button>
				</center>
			</div>
		);
	}
}

const Counter_fn = () => {
	const [
		count,
		setCount
	] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const reset = () => {
		setCount(0);
	};

	return (
		<div>
			<button type='button' class='btn btn-raised btn-outline-info btn-lg btn-block' onClick={increment}>
				Clicked {count} times
			</button>
			<br />
			<center>
				<button onClick={reset} type='button' class='btn btn-info bmd-btn-fab'>
					<i class='material-icons'>refresh</i>
				</button>
			</center>
		</div>
	);
};

class Nav extends Component {
	render() {
		return (
			<div>
				<div
					class='bmd-layout-container bmd-drawer-f-l bmd-drawer-overlay bg-dark'
					style={{ minHeight: '100vh' }}
				>
					<header class='bmd-layout-header'>
						<nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
							<a class='navbar-brand' href='#'>
								React Counter
							</a>
							<button
								class='navbar-toggler'
								type='button'
								data-toggle='drawer'
								data-target='#dw-s2'
								style={{ border: 'none' }}
							>
								<span class='navbar-toggler-icon' />
							</button>
						</nav>
					</header>
					<div id='dw-s2' class='bmd-layout-drawer bg-faded bg-dark'>
						<header style={{ color: 'white' }}>
							<a class='navbar-brand justify-content-center'>React Counter</a>
						</header>
						<ul class='list-group' style={{ color: 'white' }}>
							<a class='list-group-item'>- Arunabh Arjun</a>
						</ul>
					</div>
					<main class='bmd-layout-content'>
						<div class='container center_itm'>
							<h3>Class Component</h3>
							<br />
							<Counter_Class />
							<br />
							<hr />
							<br />
							<h3>Functional Component</h3>
							<br />
							<Counter_fn />
						</div>
					</main>
				</div>
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div>
				<Nav />
			</div>
		);
	}
}

export default App;
