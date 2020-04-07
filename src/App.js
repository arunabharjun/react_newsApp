import React, { Component, useState, useEffect } from 'react';
import News_app from './News';

const The_app = () => {
	return (
		<div style={{ maxHeight: '100vh', overflow: 'hidden' }}>
			<nav class='navbar sticky-top navbar-dark bg-dark' style={{ zIndex: '1' }}>
				<a class='navbar-brand' href='#'>
					News App
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
			<div class='bmd-layout-container bmd-drawer-f-l bmd-drawer-overlay bg-dark' style={{ overflow: 'hidden' }}>
				<div
					id='dw-s2'
					class='bmd-layout-drawer bg-faded bg-light'
					style={{ zIndex: '9999999', marginTop: '-30px', color: '#000', minHeight: '105vh' }}
				>
					<ul class='list-group' style={{ color: '#000' }}>
						<a class='list-group-item'>- Arunabh Arjun</a>
					</ul>
				</div>
				<main class='bmd-layout-content' style={{ maxHeight: '95vh', overflowY: 'scroll' }}>
					<div class='container center_itm'>
						<br />
						<h4>Today's News</h4>
						<br />
						<News_app />
						<br />
						{/* Main content Here */}
					</div>
				</main>
			</div>
		</div>
	);
};

const App = () => {
	return <The_app />;
};

export default App;
