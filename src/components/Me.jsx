import React from 'react'

import Header from './Header'
import Footer from './Footer'

import NavItem from './NavItem'
import PasswordChange from './PasswordChange'
import UserChange from './UserChange'

function Me() {
	const icons = [
		{ link: '#', text: 'settings', icon: 'settings', active: true },
		{
			link: '/my-tours',
			text: 'My bookings',
			icon: 'briefcase',
			active: false
		},
		{ link: '#', text: 'My reviews', icon: 'star', active: false },
		{ link: '#', text: 'Billing', icon: 'credit-card', active: false }
	]
	return (
		<>
			<Header />
			<main className="main">
				<div className="user-view">
					<nav className="user-view__menu">
						<ul className="side-nav">
							{icons.map((item, index) => (
								<NavItem
									link={item.link}
									text={item.text}
									icon={item.icon}
									active={item.active}
									poi={index}
								/>
							))}
						</ul>
					</nav>

					<div className="user-view__content">
						<UserChange />

						<div className="line">&nbsp;</div>

						<PasswordChange />
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Me
