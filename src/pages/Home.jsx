import { useEffect, useState } from 'react'
import { initOTPless } from '../utils/initOtpless'
import { useNavigate } from 'react-router-dom'

function Home() {
	const navigate = useNavigate()
	useEffect(() => initOTPless(handleUserData), [])
	/** handleUserData - otpless callback function
	 * @description
	 * This function is called after authentication is done by otpless-sdk.
	 * Use this function to further process the otplessUser object, navigate to next page or perform any other action based on your requirement.
	 * @param {Object} otplessUser
	 * @returns {void}
	 */
	const handleUserData = (otplessUser) => {
		console.log(otplessUser)
		alert(JSON.stringify(otplessUser));
		localStorage.setItem('otplessUser', JSON.stringify(otplessUser));
		navigate('/result')
		alert(JSON.stringify(otplessUser));
	}

	return <div id='otpless-login-page'></div>
}
export default Home;




