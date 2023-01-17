import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Axios from 'axios';

import StateContext from '../StateContext';
import DispatchContext from '../DispatchContext';

function Register() {
	const appState = useContext(StateContext);
	const appDispatch = useContext(DispatchContext);

	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		try {
			const ourRequest = Axios.CancelToken.source();
			async function fetchData() {
				try {
					const response = await Axios.post(
						'https://ratoursbackendapi.onrender.com/api/v1/users/signup',
						{
							name,
							email,
							password,
							passwordConfirm
						}
					);
					appDispatch({ type: 'login', data: response.data });
					navigate('/');
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
		<main className="main">
			<div className="login-form">
				<h2 className="heading-secondary ma-bt-lg">Create your account</h2>
				<form className="form form--signUp" onSubmit={handleSubmit}>
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
							value={name}
							onChange={e => setName(e.target.value)}
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
							value={email}
							onChange={e => setEmail(e.target.value)}
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
							value={password}
							onChange={e => setPassword(e.target.value)}
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
							value={passwordConfirm}
							onChange={e => setPasswordConfirm(e.target.value)}
						/>
					</div>
					<button className="btn btn--green createUser">
						Create Account
					</button>
				</form>
			</div>
		</main>
	);
}

export default Register;
