import './App.css'
import Home from './pages/Home'
import Result from './pages/Result'

import { Route, Routes } from 'react-router'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/result' element={<Result />} />
		</Routes>
	)
}

export default App
