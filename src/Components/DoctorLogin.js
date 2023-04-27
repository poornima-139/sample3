import React from 'react';
import { Link } from "react-router-dom";
import x from "./css/doctorLogin.module.css";
// import ".//css/doctorLogIn.css";

export default function doctorLogin() {
    return (
		<body class={x.doctorbody}>
        <div>
            {/* <img src="https://genpactonline.sharepoint.com/sites/Pacers-Team2/Shared%20Documents/General/logo_transparent%20(2).png" alt="Logo" style={{"position": "absolute", "top": "0", "left":"0", "height":"150px", "width":"150px", "left":"20px"}}/>  */}
		<div class={`${x.container} ${x.rightpanelactive}`}>
	            <div class={`${x.container__form} ${x.container__signin}`}>
		            <form action="/doctor_login_data" class={x.doctorform} id="form2" method="POST">
			            <h2 class={x.form__title}>Doctor Login</h2>
			            <input type="email" placeholder="Email" class={x.input} name="email"/>
			            <input type="password" placeholder="Password" class={x.input} name="password" />
			            <p style={{"color":"rgb(254, 0, 0)" , "textAlign": "left"}}></p>
			            <Link to="/DoctorSignup" class={x.link}>New User? Sign Up</Link>
			            <input class={x.btn} type="submit" value="Log In" /> 
		            </form>
	            </div> 
            </div>
        </div>
		</body>
);
}