import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {

	const navigate = useNavigate();

	const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
		email: '',
        password: '',
		username: '',
    });

	const registerUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/user/register", userData);
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <div>
                <form onSubmit={registerUser} >
                    <label>First Name:</label>
                    <input placeholder='First Name' type='text' value={userData.firstName} onChange={(e) => {
						setUserData({ ...userData, firstName: e.target.value })
					}} />
                    <label>Last Name:</label>
                    <input placeholder='Last Name' type='text' value={userData.lastName} onChange={(e) => {
						setUserData({ ...userData, lastName: e.target.value })
					}} />
                    <label>email:</label>
                    <input placeholder='Email' type='email' value={userData.email} onChange={(e) => {
						setUserData({ ...userData, email: e.target.value })
					}} />
                    <label>Username:</label>
                    <input placeholder='Username' type='text' value={userData.username} onChange={(e) => {
						setUserData({ ...userData, username: e.target.value })
					}} />
                    <label>Password:</label>
                    <input placeholder='Password' type='password' value={userData.password} onChange={(e) => {
						setUserData({ ...userData, password: e.target.value })
					}} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
