import React from 'react';
import { Link } from "react-router-dom";
// import ".//css/doctorLogIn.css";

export default function Home() {
    return (
        <div>
            <img src="https://genpactonline.sharepoint.com/sites/Pacers-Team2/Shared%20Documents/General/logo_transparent%20(2).png" alt="Logo" style={{"position": "absolute", "top": "0", "left":"0", "height":"150px", "width":"150px", "left":"20px"}}/> 
            <div class="container right-panel-active">
	            <div class="container__form container--signin">
		            <form action="/doctor_login_data" class="form" id="form2" method="POST">
			            <h2 class="form__title">Doctor Login</h2>
			            <input type="email" placeholder="Email" class="input" name="email"/>
			            <input type="password" placeholder="Password" class="input" name="password" />
			            <p style={{"color":"rgb(254, 0, 0)" , "textAlign": "left"}}></p>
			            <Link to="doctor_signup_page" class="link">New User? Sign Up</Link>
			            <input class="btn" type="submit" value="Log In" /> 
		            </form>
	            </div> 
            </div>
        </div>
);
}