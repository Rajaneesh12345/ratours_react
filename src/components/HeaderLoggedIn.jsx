import { useContext } from 'react'
import StateContext from '../StateContext'
import DispatchContext from '../DispatchContext'
import { useNavigate } from 'react-router-dom'

function HeaderLoggedIn() {
	const appState = useContext(StateContext)
	const appDispatch = useContext(DispatchContext)

	const navigate = useNavigate()

	const { user } = appState

	return (
		<>
			<button
				className="nav__el nav__el--logout"
				onClick={() => {
					appDispatch({ type: 'logout' })
					navigate('/')
				}}
			>
				Log out
			</button>
			<a className="nav__el" href="/me">
				<img
					className="nav__user-img"
					src={`/img/users/${user.photo}`}
					alt={user._id}
				/>
				<span>{user.name.split(' ')[0]}</span>
			</a>
		</>
	)
}

export default HeaderLoggedIn
