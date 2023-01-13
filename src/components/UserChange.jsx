import React, { useEffect, useState } from 'react'

function UserChange() {
	const [name, setName] = useState(localStorage.getItem('ratoursName'))
	const [email, setEmail] = useState(localStorage.getItem('ratoursEmail'))
	const [photo, setPhoto] = useState(localStorage.getItem('ratoursPhoto'))

	return (
		<>
			<div className="user-view__form-container">
				<h2 className="heading-secondary ma-bt-md">
					Your account settings
				</h2>
				<form className="form form-user-data">
					<div className="form__group">
						<label className="form__label" htmlFor="name">
							Name
						</label>
						<input
							className="form__input"
							id="name"
							type="text"
							value={name}
							required="required"
							name="name"
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className="form__group ma-bt-md">
						<label className="form__label" htmlFor="email">
							Email address
						</label>
						<input
							className="form__input"
							id="email"
							type="email"
							value={email}
							required="required"
							name="email"
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form__group form__photo-upload">
						<img
							className="form__user-photo"
							src={`/img/users/${photo}`}
							alt="User"
						/>
						<input
							className="form__upload"
							type="file"
							accept="image/*"
							id="photo"
							name="photo"
						/>
						<label htmlFor="photo">Choose new photo</label>
					</div>
					<div className="form__group right">
						<button className="btn btn--small btn--green">
							Save settings
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default UserChange
