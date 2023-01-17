import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Axios from 'axios';

import SectionHeader from './Tour/SectionHeader';
import SectionDescription from './Tour/SectionDescription';
import Picture from './Tour/Pictures';
import Map from './Tour/Map';
import ReviewCard from './Tour/ReviewCard';
import Cta from './Tour/Cta';

function Tour(props) {
	const { id } = useParams();
	const [tour, setTour] = useState(null);

	useEffect(() => {
		try {
			const ourRequest = Axios.CancelToken.source();
			async function fetchData() {
				try {
					const response = await Axios.get(
						`https://ratoursbackendapi.onrender.com/api/v1/tours/${id}`
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

	if (tour) {
		console.log(tour);
	}
	return (
		<>
			{tour && (
				<>
					<SectionHeader tour={tour} />
					<SectionDescription tour={tour} />
					<Picture images={tour.images} />
					<Map locations={tour.locations} />
					<ReviewCard reviews={tour.reviews} />
					<Cta tour={tour} />
				</>
			)}
		</>
	);
}

export default Tour;
