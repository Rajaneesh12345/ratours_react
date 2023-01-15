import Box from './_Box';

function SectionDescription({ tour }) {
	if (tour.length === 0) return;
	console.log(tour);
	const date = new Date(tour.startDates[0]).toLocaleString('en-us', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	});
	const facts = [
		{
			label: 'Next date',
			text: date,
			icon: 'calendar'
		},
		{
			label: 'Difficulty',
			text: tour.difficulty,
			icon: 'trending-up'
		},
		{
			label: 'Participants',
			text: `${tour.maxGroupSize} people`,
			icon: 'user'
		},
		{
			label: 'Rating',
			text: `${tour.ratingsAverage} / 5`,
			icon: 'star'
		}
	];
	return (
		<>
			<section className="section-description">
				<div className="overview-box">
					<div>
						<div className="overview-box__group">
							<h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
							{facts.map((item, index) => {
								return (
									<Box
										Key={index}
										icon={item.icon}
										label={item.label}
										text={item.text}
									/>
								);
							})}
						</div>
						<div className="overview-box__group">
							<h2 className="heading-secondary ma-bt-lg">
								Your tour guides
							</h2>
							{tour &&
								tour.guides &&
								tour.guides.map((guide, i) => {
									return (
										<div className="overview-box__detail" key={i}>
											<img
												className="overview-box__img"
												src={`/img/users/${guide.photo}`}
												alt={`${guide.name}`}
											/>
											{guide.role === 'lead-guide' && (
												<span className="overview-box__label">
													Lead guide
												</span>
											)}
											{guide.role === 'guide' && (
												<span className="overview-box__label">
													Tour Guide
												</span>
											)}

											<span className="overview-box__text">
												{guide.name}
											</span>
										</div>
									);
								})}
						</div>
					</div>
				</div>
				<div className="description-box">
					<h2 className="heading-secondary ma-bt-lg">
						{`About ${tour.name} tour`}
					</h2>
					{tour.description &&
						tour.description.split('\n').map((item, index) => (
							<p key={index} className="description__text">
								{item}
							</p>
						))}
				</div>
			</section>
		</>
	);
}

export default SectionDescription;
