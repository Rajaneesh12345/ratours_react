import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import StateContext from '../StateContext';

import Axios from 'axios';

import SectionHeader from './Tour/SectionHeader';
import SectionDescription from './Tour/SectionDescription';

import Box from './Tour/_Box';
import Picture from './Tour/Pictures';
import Map from './Tour/Map';
import ReviewCard from './Tour/ReviewCard';

function Tour(props) {
	const appState = useContext(StateContext);
	const { id } = useParams();
	const [tour, setTour] = useState([]);

	useEffect(() => {
		try {
			const ourRequest = Axios.CancelToken.source();
			async function fetchData() {
				try {
					const response = await Axios.get(
						`http://127.0.0.1:8000/api/v1/tours/${id}`
					);
					setTour(response.data.data.data);
				} catch (e) {
					console.log(e);
				}
			}
			fetchData();
			return () => ourRequest.cancel();
		} catch (e) {
			console.log(e);
		}
	}, []);

	// let date = '';

	// if (tour && tour.startDates) {
	// 	date = new Date(tour.startDates[0]).toLocaleString('en-us', {
	// 		year: 'numeric',
	// 		month: 'long',
	// 		day: 'numeric',
	// 		hour: 'numeric',
	// 		minute: 'numeric',
	// 		second: 'numeric'
	// 	});
	// }

	return (
		<>
			{tour && <SectionHeader tour={tour} />}

			{tour && <SectionDescription tour={tour} Box={Box} />}

			<section className="section-pictures">
				{tour && tour.images && <Picture images={tour.images} />}
			</section>

			<section className="section-map">
				{tour && tour.locations && <Map locations={tour.locations} />}
			</section>

			<section className="section-reviews">
				<div className="reviews">
					{tour &&
						tour.reviews &&
						tour.reviews.map((review, index) => (
							<ReviewCard review={review} key={index} />
						))}
				</div>
			</section>

			<section className="section-cta">
				{tour && tour.images && (
					<div className="cta">
						<div className="cta__img cta__img--logo">
							<img src="/img/logo-white.png" alt="Natours logo" />
						</div>
						<img
							className="cta__img cta__img--1"
							src={`/img/tours/${tour.images[1]}`}
							alt="Tour"
						/>
						<img
							className="cta__img cta__img--2"
							src={`/img/tours/${tour.images[2]}`}
							alt="Tour"
						/>
						<div className="cta__content">
							<h2 className="heading-secondary">
								What are you waiting for?
							</h2>
							<p className="cta__text">
								{`${tour.duration} days. 1 adventure. Infinite memories. Make
							it yours today!`}
							</p>
							{appState.loggedIn ? (
								<button className="btn btn--green span-all-rows">
									Book tour now!
								</button>
							) : (
								<Link
									to="/login"
									className="btn btn--green span-all-rows"
								>
									Log in to book tour
								</Link>
							)}
						</div>
					</div>
				)}
			</section>
		</>
	);
}

export default Tour;
