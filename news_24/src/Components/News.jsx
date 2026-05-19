import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function News({ category }) {

	const [articles, setArticles] = useState([]);
	const [page, setPage] = useState(1);
	const [totalResults, setTotalResults] = useState(0);

	const apiKey = import.meta.env.VITE_NEWS_API_KEY;

	const fetchNews = async () => {
		try {

			const url =`https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=in&max=10&apikey=${apiKey}`;
			const response = await fetch(url);
			const data = await response.json();

			setArticles(data.articles || []);
			setTotalResults(data.totalResults || 0);

		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		setPage(1);
		fetchNews();
	}, [category]);

	const fetchMoreData = async () => {

		const nextPage = page + 1;

		const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${nextPage}&pageSize=9&apiKey=${apiKey}`;

		const response = await fetch(url);
		const data = await response.json();

		setPage(nextPage);

		setArticles((prevArticles) => [
			...prevArticles,
			...(data.articles || [])
		]);
	};

	return (
		<div className="container my-4">

			<h2 className="text-center mb-4">
				Top {category} Headlines
			</h2>

			<InfiniteScroll
				dataLength={articles.length}
				next={fetchMoreData}
				hasMore={articles.length < totalResults}
				loader={
					<h4 className="text-center">
						Loading...
					</h4>
				}
			>
				<div className="row">

					{articles.map((article, index) => (

						<div
							className="col-md-4 mb-4"
							key={index}
						>

							<div className="card h-100 shadow-sm">

								<img
									src={
										article.urlToImage ||
										"https://via.placeholder.com/300"
									}
									className="card-img-top"
									alt="news"
								/>

								<div className="card-body">

									<h5 className="card-title">
										{article.title}
									</h5>

									<p className="card-text">
										{article.description}
									</p>

									<a
										href={article.url}
										target="_blank"
										rel="noreferrer"
										className="btn btn-primary"
									>
										Read More
									</a>

								</div>
							</div>

						</div>
					))}

				</div>
			</InfiniteScroll>
		</div>
	);
}

export default News;