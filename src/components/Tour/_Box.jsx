export default function Box(props) {
	const { icon, label, text, Key } = props;
	return (
		<div className="overview-box__detail" key={Key}>
			<svg className="overview-box__icon">
				<use xlinkHref={`/img/icons.svg#icon-${icon}`}></use>
			</svg>
			<span className="overview-box__label">{label}</span>
			<span className="overview-box__text">{text}</span>
		</div>
	);
}
