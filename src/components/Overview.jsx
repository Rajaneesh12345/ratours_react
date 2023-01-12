import React, { useEffect, useState } from 'react'

import Axios from 'axios'

import Header from './Header'
import Footer from './Footer'
import Card from './Card'

function Overview() {
	const [tours, setTours] = useState([])

	useEffect(() => {
		const ourRequest = Axios.CancelToken.source()
		async function fetchData() {
			try {
				const response = await Axios.get(
					'http://127.0.0.1:8000/api/v1/tours'
				)
				// console.log(response)
				setTours(response.data.data.data)
			} catch (e) {
				console.log(e)
			}
		}
		fetchData()
		return () => ourRequest.cancel()
	}, [])

	// console.log(tours)

	return (
		<>
			<Header />
			<main className="main">
				<div className="card-container">
					{tours.map((tour, index) => (
						<div key={index}>
							<Card tour={tour} />
						</div>
					))}
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Overview
