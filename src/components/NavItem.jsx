import React from 'react'

function NavItem(props) {
	const { link, text, icon, active } = props
	return (
		<>
			<li className={`${active ? 'side-nav--active' : ''}`}>
				<a href={`${link}`}>
					<svg>
						<use xlinkHref={`/img/icons.svg#icon-${icon}`}></use>
					</svg>
					{text}
				</a>
			</li>
		</>
	)
}
export default NavItem
