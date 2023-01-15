function Picture({ images }) {
	return (
		<>
			{images.map((img, i) => (
				<div className="picture-box" key={i * 12}>
					<img
						className={`picture-box__img picture-box__img--${i + 1}`}
						src={`/img/tours/${img}`}
						alt={`The Park Camper Tour ${i + 1}`}
					/>
				</div>
			))}
		</>
	);
}

export default Picture;
