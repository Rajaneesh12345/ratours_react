import React, { useEffect } from 'react'
import { useImmerReducer } from 'use-immer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Overview from './components/Overview'
import Login from './components/Login'
import Register from './components/Register'
import Tour from './components/Tour'

import StateContext from './StateContext'
import DispatchContext from './DispatchContext'

function App() {
	const initialState = {
		loggedIn: Boolean(localStorage.getItem('ratoursToken')),
		flashMessages: [],
		token: '',
		user: {
			_id: localStorage.getItem('ratoursUserId'),
			photo: localStorage.getItem('ratoursPhoto'),
			name: localStorage.getItem('ratoursName')
		}
	}

	function ourReducer(draft, action) {
		switch (action.type) {
			case 'login':
				draft.loggedIn = true
				draft.token = action.data.token
				draft.user = action.data.data.user
				return
			case 'logout':
				draft.loggedIn = false
				return
			case 'flashMessage':
				draft.flashMessages.push(action.value)
				return
			default:
				return
		}
	}

	const [state, dispatch] = useImmerReducer(ourReducer, initialState)

	useEffect(() => {
		if (state.loggedIn) {
			localStorage.setItem('ratoursToken', state.token)
			localStorage.setItem('ratoursUserId', state.user._id)
			localStorage.setItem('ratoursPhoto', state.user.photo)
			localStorage.setItem('ratoursName', state.user.name)
		} else {
			localStorage.removeItem('ratoursToken')
			localStorage.removeItem('ratoursUserId')
			localStorage.removeItem('ratoursPhoto')
			localStorage.removeItem('ratoursName')
		}
	}, [state.loggedIn])

	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				<BrowserRouter>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/tour/:id" element={<Tour />} />
						<Route path="/" element={<Overview />} />
					</Routes>
				</BrowserRouter>
			</DispatchContext.Provider>
		</StateContext.Provider>
	)
}

export default App
