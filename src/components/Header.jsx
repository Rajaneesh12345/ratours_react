import { useContext } from 'react'
import { Link } from 'react-router-dom'

import HeaderLoggedIn from './HeaderLoggedIn.jsx'
import HeaderLoggedOut from './HeaderLoggedOut'

import StateContext from '../StateContext'

import logo_header from '../img/logo-white.png'

function Header() {
	const appState = useContext(StateContext)
	return (
		<>
			<header className="header">
				<nav className="nav nav--tours">
					<Link to="/" className="nav__el">
						All tours
					</Link>
				</nav>
				<div className="header__logo">
					<img src={logo_header} alt="" />
				</div>
				<nav className="nav nav--user">
					{appState.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
				</nav>
			</header>
		</>
	)
}

export default Header
