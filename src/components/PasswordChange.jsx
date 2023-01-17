import React, { useState } from 'react';

import Axios from 'axios';

function PasswordChange() {
	const [cPassword, setcPassword] = useState('');
	const [nPassword, setnPassword] = useState('');
	const [cnPassword, setcnPassword] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const ourRequest = Axios.CancelToken.source();
			async function fetchData() {
				try {
					const response = await Axios.post(
						'http://127.0.0.1:8000/api/v1/users/updateMyPassword',
						{
							passwordCurrent: cPassword,
							password: nPassword,
							passwordConfirm: cnPassword
						}
					);
					console.log(response.data);
				} catch (e) {
					console.log(e);
				}
			}
			fetchData();
			return () => ourRequest.cancel();
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<>
			<div className="user-view__form-container">
				<h2 className="heading-secondary ma-bt-md">Password change</h2>
				<form onSubmit={handleSubmit} className="form form-user-password">
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
							value={cPassword}
							onChange={e => setcPassword(e.target.value)}
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
							value={nPassword}
							onChange={e => setnPassword(e.target.value)}
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
							value={cnPassword}
							onChange={e => setcnPassword(e.target.value)}
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
	);
}

export default PasswordChange;
