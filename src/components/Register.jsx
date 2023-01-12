import React from 'react'

function Register() {
	return (
		<main className="main">
			<div className="login-form">
				<h2 className="heading-secondary ma-bt-lg">Create your account</h2>
				<form className="form form--signUp">
					<div className="form__group">
						<label className="form__label" htmlFor="name">
							Name
						</label>
						<input
							className="form__input"
							id="name"
							type="text"
							placeholder="Enter your name"
							required="required"
						/>
					</div>
					<div className="form__group">
						<label className="form__label" htmlFor="email">
							Email address
						</label>
						<input
							className="form__input"
							id="email"
							type="email"
							placeholder="you@example.com"
							required="required"
						/>
					</div>
					<div className="form__group ma-bt-md">
						<label className="form__label" htmlFor="password">
							Password
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
					<div className="form__group ma-bt-md">
						<label className="form__label" htmlFor="passwordConfirm">
							Confirm Password
						</label>
						<input
							className="form__input"
							id="passwordConfirm"
							type="password"
							placeholder="••••••••"
							required="required"
							minLength="8"
						/>
					</div>
					<button className="btn btn--green createUser">
						Create Account
					</button>
				</form>
			</div>
		</main>
	)
}

export default Register
