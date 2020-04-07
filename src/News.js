import React, { Component, useState, useEffect } from 'react';

const News_app = () => {
	const [
		news,
		setNews
	] = useState([]);

	const [
		searchQuery,
		setSearchQuery
	] = useState('react');

	const [
		url,
		setUrl
	] = useState('https://hn.algolia.com/api/v1/search?query=react');

	const [
		loading,
		setLoading
	] = useState(false);

	const fetchNews = () => {
		setLoading(true);
		fetch(url)
			.then((result) => result.json())
			.then((data) => (setNews(data.hits), setLoading(false)))
			.catch((error) => console.error(error));
	};

	useEffect(
		() => {
			fetchNews();
		},
		[
			url
		]
	);

	const searchForm = (e) => {
		setSearchQuery(e.target.value);
	};

	const formSubmit = (e) => {
		e.preventDefault();
		setUrl(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`);
	};

	const queryForm = () => (
		<form onSubmit={formSubmit}>
			<div class='row'>
				<div class='col'>
					<input
						type='text'
						value={searchQuery}
						onChange={searchForm}
						class='form-control'
						placeholder='Search Query Here'
						style={{ color: '#aaa' }}
					/>
				</div>
				<div class='col'>
					<button type='submit' class='btn btn-raised btn-outline-success btn-block'>
						SEARCH
					</button>
				</div>
			</div>
		</form>
	);

	const showLoading = () => (
		<div>
			{loading ? (
				<div class='card'>
					<div class='card-body'>
						<center>... LOADING ...</center>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);

	const nwesFeed = () => (
		<div>
			{news.map((nws, index) => (
				<div>
					<div class='card'>
						<div key={index} class='card-body'>
							{nws.title}
						</div>
					</div>
					<br />
				</div>
			))}
		</div>
	);

	return (
		<div>
			{queryForm()}
			{showLoading()}
			{nwesFeed()}
		</div>
	);
};

export default News_app;
