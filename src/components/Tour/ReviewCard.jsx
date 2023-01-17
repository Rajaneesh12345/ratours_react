import React from 'react';

function ReviewCard({ reviews }) {
	return (
		<>
			<section className="section-reviews">
				<div className="reviews">
					{reviews.map((review, i) => (
						<div className="reviews__card">
							<div className="reviews__avatar">
								<img
									className="reviews__avatar-img"
									src={`/img/users/${review.user.photo}`}
									alt={`${review.user.name}`}
								/>
								<h6 className="reviews__user">{review.user.name}</h6>
							</div>
							<p className="reviews__text">{review.review}</p>
							<div className="reviews__rating">
								{[1, 2, 3, 4, 5].map((star, i) => (
									<svg
										key={i}
										className={`reviews__star reviews__star--${
											review.rating >= star ? 'active' : 'inactive'
										}`}
									>
										<use xlinkHref="/img/icons.svg#icon-star"></use>
									</svg>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default ReviewCard;
