import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

import DispatchContext from '../DispatchContext'

function Login() {
	const appDispatch = useContext(DispatchContext)
	const navigate = useNavigate()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		try {
			const ourRequest = Axios.CancelToken.source()
			async function fetchData() {
				try {
					const response = await Axios.post(
						'http://127.0.0.1:8000/api/v1/users/login',
						{
							email,
							password
						}
					)
					console.log(response.data)
					appDispatch({ type: 'login', data: response.data })
					navigate('/')
				} catch (e) {
					console.log(e)
				}
			}
			fetchData()
			return () => ourRequest.cancel()
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<>
			<main className="main">
				<div className="login-form">
					<h2 className="heading-secondary ma-bt-lg">
						Log into your account
					</h2>
					<form className="form form--login" onSubmit={handleSubmit}>
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
						<div className="form__group">
							<button className="btn btn--green">Login</button>
						</div>
					</form>
				</div>
			</main>
		</>
	)
}

export default Login
