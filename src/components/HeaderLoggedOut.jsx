import React from 'react'
import { Link } from 'react-router-dom'

function HeaderloggedOut() {
	return (
		<>
			<Link to="/login" className="nav__el">
				Log in
			</Link>
			<Link className="nav__el nav__el--cta" to="/register">
				Sign up
			</Link>
		</>
	)
}

export default HeaderloggedOut
