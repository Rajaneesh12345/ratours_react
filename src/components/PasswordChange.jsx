import React from 'react'

function PasswordChange() {
	return (
		<>
			<div className="user-view__form-container">
				<h2 className="heading-secondary ma-bt-md">Password change</h2>
				<form className="form form-user-password">
					<div className="form__group">
						<label className="form__label" htmlFor="password-current">
							Current password
						</label>
						<input
							className="form__input"
							id="password-current"
							type="password"
							placeholder="••••••••"
							required="required"
							minLength="8"
						/>
					</div>
					<div className="form__group">
						<label className="form__label" htmlFor="password">
							New password
						</label>
						<input
							className="form__input"
							id="password"
							type="password"
							placeholder="••••••••"
							required="required"
							minLength="8"
						/>
					</div>
					<div className="form__group ma-bt-lg">
						<label className="form__label" htmlFor="password-confirm">
							Confirm password
						</label>
						<input
							className="form__input"
							id="password-confirm"
							type="password"
							placeholder="••••••••"
							required="required"
							minLength="8"
						/>
					</div>
					<div className="form__group right">
						<button className="btn btn--small btn--green btn--save-password">
							Save password
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default PasswordChange
