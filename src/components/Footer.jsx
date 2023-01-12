import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../img/logo-green-small.png'

function Footer() {
	return (
		<div className="footer">
			<div className="footer__logo">
				<img src={logo} alt="Natours logo" />
			</div>
			<ul className="footer__nav">
				<li>
					<Link>About us</Link>
				</li>
				<li>
					<Link>Download apps</Link>
				</li>
				<li>
					<Link>Become a guide</Link>
				</li>
				<li>
					<Link>Careers</Link>
				</li>
				<li>
					<Link>Contact</Link>
				</li>
			</ul>
			<p className="footer__copyright">
				&copy; by Rajaneesh, this entire web project is done by me alone, so
				praise me 😁😁😄😝
			</p>
		</div>
	)
}

export default Footer
